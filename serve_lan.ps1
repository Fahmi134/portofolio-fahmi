$root = 'C:\Users\hafiz\.gemini\antigravity\scratch\portfolio-hafizul'
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, 8787)
$listener.Start()
Write-Host "LAN Server listening on http://0.0.0.0:8787/"

$mimeMap = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.png'  = 'image/png'
  '.webp' = 'image/webp'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
  '.mp3'  = 'audio/mpeg'
  '.m4a'  = 'audio/mp4'
  '.ogg'  = 'audio/ogg'
  '.wav'  = 'audio/wav'
}

while ($true) {
  $client = $null
  try {
    $client = $listener.AcceptTcpClient()
    $client.ReceiveTimeout = 3000
    $client.SendTimeout = 10000
    $stream = $client.GetStream()
    $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()
    $rangeHeader = $null
    while ($true) {
      $line = $reader.ReadLine()
      if ([string]::IsNullOrEmpty($line)) { break }
      if ($line -match '^Range:\s*bytes=(\d*)-(\d*)') {
        $rangeHeader = @{ Start = $Matches[1]; End = $Matches[2] }
      }
    }

    if ($requestLine -match '^(GET|HEAD)\s+([^\s\?]+)') {
      $method = $Matches[1]
      $urlPath = [System.Uri]::UnescapeDataString($Matches[2]).TrimStart('/')
      if ([string]::IsNullOrEmpty($urlPath)) { $urlPath = 'index.html' }
      $safePath = $urlPath.Replace('/', '\')
      $fullPath = [System.IO.Path]::GetFullPath((Join-Path $root $safePath))

      if ($fullPath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path $fullPath -PathType Leaf)) {
        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
        $totalLen = $bytes.Length
        $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
        $mime = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { 'application/octet-stream' }

        if ($rangeHeader -and $totalLen -gt 0) {
          $start = if ($rangeHeader.Start -ne '') { [int64]$rangeHeader.Start } else { 0 }
          $end = if ($rangeHeader.End -ne '') { [int64]$rangeHeader.End } else { $totalLen - 1 }
          if ($end -ge $totalLen) { $end = $totalLen - 1 }
          if ($start -gt $end) { $start = 0 }
          $len = [int]($end - $start + 1)
          $header = "HTTP/1.1 206 Partial Content`r`nContent-Type: $mime`r`nAccept-Ranges: bytes`r`nContent-Range: bytes $start-$end/$totalLen`r`nContent-Length: $len`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
          $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
          $stream.Write($hb, 0, $hb.Length)
          if ($method -ne 'HEAD') {
            $stream.Write($bytes, [int]$start, $len)
          }
        } else {
          $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nAccept-Ranges: bytes`r`nContent-Length: $totalLen`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
          $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
          $stream.Write($hb, 0, $hb.Length)
          if ($method -ne 'HEAD') {
            $stream.Write($bytes, 0, $totalLen)
          }
        }
      } else {
        $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
        $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
        $stream.Write($hb, 0, $hb.Length)
        $stream.Write($body, 0, $body.Length)
      }
    }
    $stream.Flush()
    $client.Close()
  } catch {
    if ($client) { try { $client.Close() } catch {} }
  }
}
