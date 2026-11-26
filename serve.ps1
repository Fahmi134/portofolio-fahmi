$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add('http://localhost:8787/')
$listener.Start()
Write-Host "Serving at http://localhost:8787/" -ForegroundColor Green
$root = 'C:\Users\hafiz\.gemini\antigravity\scratch\portfolio-hafizul'
while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $resp = $ctx.Response
        $path = $req.Url.LocalPath.TrimStart('/')
        if ($path -eq '') { $path = 'index.html' }
        $file = Join-Path $root $path
        if (Test-Path $file -PathType Leaf) {
            $bytes = [IO.File]::ReadAllBytes($file)
            $ext = [IO.Path]::GetExtension($file).ToLower()
            $resp.ContentType = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css' }
                '.js'   { 'application/javascript' }
                default { 'application/octet-stream' }
            }
            $resp.ContentLength64 = $bytes.Length
            $resp.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $resp.StatusCode = 404
        }
        $resp.Close()
    } catch {}
}
