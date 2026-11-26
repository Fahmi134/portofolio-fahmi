// ===== Data Portofolio (Mudah diubah sesuai data dirimu) =====
const PORTFOLIO_DATA = {
  // Ubah src di bawah ini ke file MP3 milikmu di folder music/, contoh: 'music/lagu-saya.mp3'
  music: {
    src: 'music/lagu-saya.mp3',
    title: 'Lagu Saya',
    artist: 'Background Music',
  },
  typingRoles: [
    'Web Developer',
    'UI/UX Enthusiast',
    'Pelajar SMK RPL',
    'Frontend Builder',
  ],
  education: [
    {
      year: '2023 – 2026',
      school: 'SMK Negeri 1 Jakarta',
      detail: 'Jurusan Rekayasa Perangkat Lunak (RPL). Fokus pada pemrograman web, basis data, dan desain antarmuka.',
    },
    {
      year: '2020 – 2023',
      school: 'SMP Negeri 5 Jakarta',
      detail: 'Aktif di ekstrakurikuler Komputer & Desain Grafis serta mengikuti olimpiade informatika tingkat sekolah.',
    },
  ],
  skills: [
    { name: 'HTML5 & CSS3', category: 'frontend', level: 92, note: 'Layouting modern (Flexbox, Grid), animasi & responsif.' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 86, note: 'DOM manipulation, async fetch, dan interaksi UI.' },
    { name: 'React / Next.js', category: 'frontend', level: 78, note: 'Component-based architecture & state management.' },
    { name: 'Tailwind CSS', category: 'frontend', level: 85, note: 'Rapid UI prototyping dan design system konsisten.' },
    { name: 'Node.js & Express', category: 'backend', level: 72, note: 'REST API sederhana, autentikasi, dan CRUD.' },
    { name: 'MySQL / PostgreSQL', category: 'backend', level: 75, note: 'Perancangan skema relasional & query optimasi.' },
    { name: 'Figma', category: 'tools', level: 84, note: 'Wireframing, prototyping interaktif, dan UI kit.' },
    { name: 'Git & GitHub', category: 'tools', level: 82, note: 'Version control, branching, dan kolaborasi tim.' },
  ],
  projects: [
    {
      id: 1,
      title: 'EduTrack — Aplikasi Jadwal & Tugas Sekolah',
      category: 'web',
      summary: 'Web app untuk membantu siswa mencatat jadwal pelajaran, deadline tugas, dan target belajar harian.',
      description: 'EduTrack dirancang khusus untuk pelajar agar tidak melewatkan deadline tugas. Dilengkapi fitur filter prioritas, mode fokus Pomodoro, dan penyimpanan otomatis di browser.',
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      highlights: ['Timer Pomodoro terintegrasi', 'Filter tugas berdasarkan mata pelajaran', 'Mode gelap & terang'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'KantinDigital — UI/UX Pemesanan Kantin',
      category: 'ui',
      summary: 'Prototipe desain aplikasi pemesanan makanan kantin sekolah tanpa antre panjang.',
      description: 'Studi kasus UI/UX mulai dari riset pengguna di lingkungan sekolah, pembuatan user flow, wireframe, hingga high-fidelity prototype di Figma.',
      tech: ['Figma', 'Design System', 'Prototyping'],
      highlights: ['Alur checkout kurang dari 3 langkah', 'Desain ramah pengguna mobile', 'Komponen UI reusable'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'CodeSnippet Vault',
      category: 'tool',
      summary: 'Pengelola potongan kode cepat dengan fitur pencarian instan dan copy-to-clipboard.',
      description: 'Alat produktivitas ringan untuk developer dan pelajar agar bisa menyimpan snippet HTML, CSS, dan JS yang sering dipakai.',
      tech: ['JavaScript', 'CSS Grid', 'Clipboard API'],
      highlights: ['Pencarian real-time', 'Salin kode satu klik', 'Kategori bahasa pemrograman'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 4,
      title: 'Portal Ekstrakurikuler Sekolah',
      category: 'web',
      summary: 'Website informasi kegiatan, galeri, dan pendaftaran anggota baru ekstrakurikuler.',
      description: 'Membantu pengurus OSIS dan pembina ekstrakurikuler mengelola data pendaftar baru secara online dengan tampilan modern.',
      tech: ['React', 'Tailwind CSS', 'REST API'],
      highlights: ['Formulir pendaftaran interaktif', 'Galeri kegiatan responsif', 'Dashboard admin sederhana'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ],
  achievements: [
    {
      year: '2025',
      title: 'Juara 2 LKS Web Technology Tingkat Kota',
      desc: 'Merancang dan membangun aplikasi web full-stack dalam batas waktu lomba dengan skor UI terbaik.',
    },
    {
      year: '2024',
      title: 'Ketua Klub Pemrograman Sekolah',
      desc: 'Membimbing 30+ anggota dalam belajar dasar HTML, CSS, JavaScript, serta mengadakan mini hackathon.',
    },
    {
      year: '2024',
      title: 'Sertifikasi Frontend Web Developer',
      desc: 'Menyelesaikan kelas intensif pengembangan web responsif, aksesibilitas, dan optimasi performa.',
    },
  ],
  slides: [
    {
      id: 'slide-1',
      category: 'proyek',
      title: 'Tampilan Dashboard EduTrack',
      desc: 'Antarmuka utama aplikasi pengatur jadwal sekolah & timer Pomodoro dengan mode gelap modern.',
      image: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="540" viewBox="0 0 900 540"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#312e81"/><stop offset="100%" stop-color="#0891b2"/></linearGradient></defs><rect width="900" height="540" fill="url(#g1)"/><rect x="60" y="60" width="780" height="420" rx="22" fill="#0f172a" fill-opacity="0.88" stroke="#6366f1" stroke-opacity="0.45"/><circle cx="100" cy="96" r="8" fill="#ef4444"/><circle cx="126" cy="96" r="8" fill="#f59e0b"/><circle cx="152" cy="96" r="8" fill="#10b981"/><rect x="100" y="140" width="220" height="290" rx="14" fill="#1e293b"/><rect x="345" y="140" width="455" height="130" rx="14" fill="#1e293b"/><rect x="345" y="290" width="218" height="140" rx="14" fill="#1e293b"/><rect x="582" y="290" width="218" height="140" rx="14" fill="#1e293b"/><text x="370" y="200" fill="#e2e8f0" font-family="sans-serif" font-size="26" font-weight="bold">EduTrack Web App</text><text x="370" y="235" fill="#38bdf8" font-family="sans-serif" font-size="16">Jadwal Pelajaran • Tugas • Pomodoro</text></svg>`)}`,
    },
    {
      id: 'slide-2',
      category: 'sertifikat',
      title: 'Sertifikat Juara 2 LKS Web Technology',
      desc: 'Penghargaan lomba kompetensi siswa tingkat kota dalam pengembangan aplikasi web full-stack.',
      image: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="540" viewBox="0 0 900 540"><defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient></defs><rect width="900" height="540" fill="url(#g2)"/><rect x="70" y="55" width="760" height="430" rx="18" fill="#111827" stroke="#f59e0b" stroke-width="3" stroke-opacity="0.7"/><text x="450" y="155" text-anchor="middle" fill="#fbbf24" font-family="sans-serif" font-size="22" font-weight="bold" letter-spacing="4">SERTIFIKAT PENGHARGAAN</text><text x="450" y="240" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-size="38" font-weight="bold">Juara 2 LKS Web Technology</text><text x="450" y="295" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="20">Diberikan kepada Muhammad Hafizul Fahmi • SMK Negeri 1 Jakarta</text><circle cx="450" cy="385" r="42" fill="#f59e0b" fill-opacity="0.2" stroke="#fbbf24" stroke-width="2"/><text x="450" y="393" text-anchor="middle" fill="#fbbf24" font-family="sans-serif" font-size="22" font-weight="bold">2025</text></svg>`)}`,
    },
    {
      id: 'slide-3',
      category: 'penting',
      title: 'Workshop & Sharing Klub Coding Sekolah',
      desc: 'Dokumentasi kegiatan membimbing adik kelas membangun website portofolio pertama dengan HTML & CSS.',
      image: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="540" viewBox="0 0 900 540"><defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#064e3b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><rect width="900" height="540" fill="url(#g3)"/><rect x="90" y="80" width="720" height="380" rx="22" fill="#0f172a" fill-opacity="0.75" stroke="#10b981" stroke-opacity="0.5"/><text x="450" y="220" text-anchor="middle" fill="#34d399" font-family="monospace" font-size="22">&lt;CodingClub /&gt;</text><text x="450" y="275" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-size="32" font-weight="bold">Workshop Web Development</text><text x="450" y="325" text-anchor="middle" fill="#cbd5e1" font-family="sans-serif" font-size="18">30+ Peserta • SMK Negeri 1 Jakarta</text></svg>`)}`,
    },
  ],
};

// ===== Helper Elements =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== Typing Effect =====
function initTyping() {
  const target = $('#typingText');
  const roles = PORTFOLIO_DATA.typingRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIdx];
    target.textContent = current.slice(0, charIdx);

    if (!deleting && charIdx < current.length) {
      charIdx++;
      setTimeout(tick, 85);
    } else if (!deleting && charIdx === current.length) {
      deleting = true;
      setTimeout(tick, 1400);
    } else if (deleting && charIdx > 0) {
      charIdx--;
      setTimeout(tick, 45);
    } else {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(tick, 350);
    }
  }
  tick();
}

// ===== Render Sections =====
function renderEducation() {
  const container = $('#educationTimeline');
  container.innerHTML = PORTFOLIO_DATA.education
    .map(
      (item) => `
      <div class="timeline-item">
        <span class="timeline-year">${item.year}</span>
        <h4>${item.school}</h4>
        <p>${item.detail}</p>
      </div>
    `
    )
    .join('');
}

function renderSkills(filter = 'all') {
  const grid = $('#skillsGrid');
  const list =
    filter === 'all'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === filter);

  grid.innerHTML = list
    .map(
      (s) => `
      <div class="skill-card" tabindex="0" data-skill="${s.name}">
        <div class="skill-top">
          <span class="skill-name">${s.name}</span>
          <span class="skill-pct">${s.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" style="width: ${s.level}%"></div>
        </div>
        <p class="skill-note">${s.note}</p>
      </div>
    `
    )
    .join('');
}

function renderProjects(filter = 'all', query = '') {
  const grid = $('#projectsGrid');
  const q = query.trim().toLowerCase();
  const list = PORTFOLIO_DATA.projects.filter((p) => {
    const matchCategory = filter === 'all' || p.category === filter;
    const matchQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q));
    return matchCategory && matchQuery;
  });

  if (list.length === 0) {
    grid.innerHTML = `<div class="card"><p>Tidak ada proyek yang cocok dengan pencarian "${query}".</p></div>`;
    return;
  }

  grid.innerHTML = list
    .map(
      (p) => `
      <article class="project-card" data-id="${p.id}" tabindex="0">
        <div>
          <span class="project-badge">${p.category.toUpperCase()}</span>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
        </div>
        <div class="tech-tags">
          ${p.tech.map((t) => `<span>${t}</span>`).join('')}
        </div>
      </article>
    `
    )
    .join('');

  $$('.project-card').forEach((card) => {
    card.addEventListener('click', () => openProjectModal(Number(card.dataset.id)));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') openProjectModal(Number(card.dataset.id));
    });
  });
}

function renderAchievements() {
  $('#achievementsGrid').innerHTML = PORTFOLIO_DATA.achievements
    .map(
      (a) => `
      <div class="achievement-card reveal visible">
        <span class="achievement-year">${a.year}</span>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </div>
    `
    )
    .join('');
}

// ===== Project Modal =====
function openProjectModal(id) {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
  if (!project) return;

  $('#projectModalBody').innerHTML = `
    <span class="project-badge">${project.category.toUpperCase()}</span>
    <h2>${project.title}</h2>
    <p class="modal-subtitle">${project.description}</p>
    <h4>Fitur Utama:</h4>
    <ul style="padding-left: 18px; margin: 8px 0 16px; color: var(--text-muted);">
      ${project.highlights.map((h) => `<li>${h}</li>`).join('')}
    </ul>
    <div class="tech-tags" style="margin-bottom: 20px;">
      ${project.tech.map((t) => `<span>${t}</span>`).join('')}
    </div>
    <div class="modal-actions">
      <a href="${project.demoUrl}" class="btn btn-primary" onclick="event.preventDefault(); showToast('Demo proyek siap dihubungkan ke URL live!');">Live Demo</a>
      <a href="${project.repoUrl}" class="btn btn-secondary" onclick="event.preventDefault(); showToast('Link repository GitHub siap dihubungkan!');">Source Code</a>
    </div>
  `;
  $('#projectModal').classList.add('open');
  $('#projectModal').setAttribute('aria-hidden', 'false');
}

function closeModal(modalId) {
  const modal = $(modalId);
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

// ===== Theme Toggle =====
function initTheme() {
  const saved = localStorage.getItem('portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  $('#themeIcon').textContent = saved === 'dark' ? '☀️' : '🌙';

  $('#themeToggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio_theme', next);
  $('#themeIcon').textContent = next === 'dark' ? '☀️' : '🌙';
  showToast(`Tema diubah ke mode ${next === 'dark' ? 'gelap' : 'terang'}`);
}

// ===== Scroll Effects, Counters & Tilt =====
function initScrollAndReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );
  $$('.reveal').forEach((el) => observer.observe(el));

  // Counter animation
  $$('.stat-num').forEach((el) => {
    const target = Number(el.dataset.target);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 35);
  });

  // Scroll progress & active nav link
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    $('#scrollProgress').style.width = `${pct}%`;

    const sections = $$('main section');
    let currentId = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 140) {
        currentId = sec.id;
      }
    });
    $$('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  });

  // Cursor glow & 3D tilt card
  window.addEventListener('mousemove', (e) => {
    const glow = $('#cursorGlow');
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });

  const tilt = $('#tiltCard');
  if (tilt) {
    tilt.addEventListener('mousemove', (e) => {
      const rect = tilt.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tilt.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    tilt.addEventListener('mouseleave', () => {
      tilt.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg)';
    });
  }
}

// ===== Command Palette (Ctrl + K) =====
function initCommandPalette() {
  const commands = [
    { label: 'Ke Bagian Tentang & Sekolah', action: () => location.assign('#about') },
    { label: 'Ke Bagian Keahlian', action: () => location.assign('#skills') },
    { label: 'Ke Bagian Proyek', action: () => location.assign('#projects') },
    { label: 'Ke Bagian Kontak', action: () => location.assign('#contact') },
    { label: 'Buka Ringkasan CV', action: () => $('#openCvBtn').click() },
    { label: 'Ganti Tema Gelap / Terang', action: () => toggleTheme() },
  ];

  function renderCmds(query = '') {
    const q = query.toLowerCase();
    const filtered = commands.filter((c) => c.label.toLowerCase().includes(q));
    $('#cmdList').innerHTML = filtered
      .map((c, idx) => `<li><button data-idx="${idx}"><span>${c.label}</span><span>↵</span></button></li>`)
      .join('');

    $$('#cmdList button').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        closeModal('#cmdModal');
        filtered[idx].action();
      });
    });
  }

  function openCmd() {
    renderCmds();
    $('#cmdModal').classList.add('open');
    $('#cmdModal').setAttribute('aria-hidden', 'false');
    $('#cmdInput').value = '';
    setTimeout(() => $('#cmdInput').focus(), 50);
  }

  $('#cmdBtn').addEventListener('click', openCmd);
  $('#cmdInput').addEventListener('input', (e) => renderCmds(e.target.value));

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCmd();
    } else if (e.key === 'Escape') {
      closeModal('#projectModal');
      closeModal('#cvModal');
      closeModal('#cmdModal');
    }
  });
}

// ===== Contact Form & Copy Buttons =====
function initContact() {
  $$('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        showToast('Email berhasil disalin!');
      } catch {
        showToast('Silakan salin email secara manual.');
      }
    });
  });

  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#senderName').value.trim();
    const email = $('#senderEmail').value.trim();
    const message = $('#senderMessage').value.trim();

    $('#nameError').textContent = name ? '' : 'Nama wajib diisi.';
    $('#emailError').textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? ''
      : 'Masukkan alamat email yang valid.';
    $('#messageError').textContent = message.length >= 10 ? '' : 'Pesan minimal 10 karakter.';

    if (name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.length >= 10) {
      e.target.reset();
      showToast(`Terima kasih ${name}! Pesan kamu sudah terkirim.`);
    }
  });
}

// ===== Gallery Slider & Upload =====
function initGallerySlider() {
  const STORAGE_KEY = 'portfolio_custom_slides';
  let customSlides = [];
  try {
    customSlides = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    customSlides = [];
  }

  let allSlides = [...PORTFOLIO_DATA.slides, ...customSlides];
  let activeFilter = 'all';
  let currentIndex = 0;
  let autoplay = true;
  let autoplayTimer = null;

  const track = $('#sliderTrack');
  const dotsWrap = $('#sliderDots');
  const thumbsWrap = $('#sliderThumbs');
  const counter = $('#sliderCounter');

  function getFiltered() {
    return activeFilter === 'all'
      ? allSlides
      : allSlides.filter((s) => s.category === activeFilter);
  }

  function updatePosition() {
    const items = getFiltered();
    if (items.length === 0) return;
    if (currentIndex >= items.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = items.length - 1;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `${currentIndex + 1} / ${items.length}`;

    $$('.slider-dot').forEach((d, idx) => d.classList.toggle('active', idx === currentIndex));
    $$('.thumb-btn').forEach((t, idx) => t.classList.toggle('active', idx === currentIndex));
  }

  function renderSlider() {
    const items = getFiltered();
    if (items.length === 0) {
      track.innerHTML = `<div class="slide-item"><div class="slide-caption"><h3>Belum ada slide</h3><p>Klik "+ Tambah Slide" untuk menambahkan gambar pada kategori ini.</p></div></div>`;
      dotsWrap.innerHTML = '';
      thumbsWrap.innerHTML = '';
      counter.textContent = '0 / 0';
      return;
    }

    const catLabel = { proyek: 'Gambar Proyek', sertifikat: 'Sertifikat', penting: 'Hal Penting' };

    track.innerHTML = items
      .map(
        (s) => `
        <div class="slide-item">
          <div class="slide-media">
            <img src="${s.image}" alt="${s.title}" loading="lazy" />
          </div>
          <div class="slide-caption">
            <span class="project-badge">${catLabel[s.category] || s.category}</span>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="slide-actions">
              ${s.custom ? `<button class="btn-mini remove-slide-btn" data-id="${s.id}">Hapus Slide</button>` : ''}
            </div>
          </div>
        </div>
      `
      )
      .join('');

    dotsWrap.innerHTML = items
      .map((_, i) => `<button class="slider-dot" data-idx="${i}" aria-label="Ke slide ${i + 1}"></button>`)
      .join('');

    thumbsWrap.innerHTML = items
      .map((s, i) => `<button class="thumb-btn" data-idx="${i}" aria-label="Preview ${s.title}"><img src="${s.image}" alt="" /></button>`)
      .join('');

    $$('.slider-dot, .thumb-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentIndex = Number(btn.dataset.idx);
        updatePosition();
        resetAutoplay();
      });
    });

    $$('.remove-slide-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        customSlides = customSlides.filter((s) => s.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customSlides));
        allSlides = [...PORTFOLIO_DATA.slides, ...customSlides];
        currentIndex = 0;
        renderSlider();
        showToast('Slide berhasil dihapus.');
      });
    });

    updatePosition();
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    if (autoplay) {
      autoplayTimer = setInterval(() => {
        currentIndex++;
        updatePosition();
      }, 4500);
    }
  }

  $('#prevSlideBtn').addEventListener('click', () => {
    currentIndex--;
    updatePosition();
    resetAutoplay();
  });

  $('#nextSlideBtn').addEventListener('click', () => {
    currentIndex++;
    updatePosition();
    resetAutoplay();
  });

  $('#autoplayToggle').addEventListener('click', () => {
    autoplay = !autoplay;
    $('#autoplayToggle').textContent = autoplay ? '⏸ Autoplay' : '▶ Autoplay';
    $('#autoplayToggle').setAttribute('aria-pressed', String(autoplay));
    resetAutoplay();
  });

  $$('#galleryFilters .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('#galleryFilters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      currentIndex = 0;
      renderSlider();
      resetAutoplay();
    });
  });

  // Touch swipe support
  let touchStartX = 0;
  $('#sliderViewport').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  $('#sliderViewport').addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 45) {
      currentIndex += diff < 0 ? 1 : -1;
      updatePosition();
      resetAutoplay();
    }
  }, { passive: true });

  // Add Slide Modal & Upload
  $('#openAddSlideBtn').addEventListener('click', () => {
    $('#addSlideModal').classList.add('open');
    $('#addSlideModal').setAttribute('aria-hidden', 'false');
  });
  $('#closeAddSlideModal').addEventListener('click', () => closeModal('#addSlideModal'));
  $('#addSlideModal').addEventListener('click', (e) => {
    if (e.target === $('#addSlideModal')) closeModal('#addSlideModal');
  });

  $('#addSlideForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const category = $('#slideCategory').value;
    const title = $('#slideTitle').value.trim();
    const desc = $('#slideDesc').value.trim();
    const file = $('#slideFile').files[0];
    const url = $('#slideUrl').value.trim();

    const saveNewSlide = (imgSrc) => {
      const newSlide = {
        id: `custom-${Date.now()}`,
        category,
        title,
        desc,
        image: imgSrc,
        custom: true,
      };
      customSlides.push(newSlide);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customSlides));
      } catch {
        showToast('Gambar terlalu besar untuk disimpan permanen, tampil untuk sesi ini.');
      }
      allSlides = [...PORTFOLIO_DATA.slides, ...customSlides];
      activeFilter = 'all';
      $$('#galleryFilters .filter-btn').forEach((b) =>
        b.classList.toggle('active', b.dataset.filter === 'all')
      );
      currentIndex = allSlides.length - 1;
      renderSlider();
      resetAutoplay();
      e.target.reset();
      closeModal('#addSlideModal');
      showToast(`Slide "${title}" berhasil ditambahkan!`);
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = () => saveNewSlide(reader.result);
      reader.readAsDataURL(file);
    } else if (url) {
      saveNewSlide(url);
    } else {
      showToast('Pilih file gambar atau masukkan URL gambar terlebih dahulu.');
    }
  });

  renderSlider();
  resetAutoplay();
}

// ===== Floating Music Player (MP3 + Web Audio Ambient Fallback) =====
function initMusicPlayer() {
  const player = $('#musicPlayer');
  const toggleBtn = $('#musicToggleBtn');
  const playIcon = $('#musicPlayIcon');
  const muteBtn = $('#musicMuteBtn');
  const volumeSlider = $('#musicVolume');
  const audio = $('#bgAudio');
  const cfg = PORTFOLIO_DATA.music;

  $('#musicTitle').textContent = cfg.title;
  $('#musicArtist').textContent = cfg.artist;

  let isPlaying = false;
  let isMuted = false;
  let volume = Number(volumeSlider.value);

  // Web Audio gentle ambient synth fallback jika cfg.src belum diisi file MP3
  let audioCtx = null;
  let masterGain = null;
  let synthTimer = null;
  const chords = [
    [261.63, 329.63, 392.0, 493.88], // Cmaj7
    [220.0, 261.63, 329.63, 392.0],  // Am7
    [174.61, 220.0, 261.63, 349.23], // Fmaj7
    [196.0, 246.94, 293.66, 392.0],  // G6
  ];
  let chordIdx = 0;

  function playAmbientChord() {
    if (!audioCtx || !isPlaying) return;
    const now = audioCtx.currentTime;
    const notes = chords[chordIdx % chords.length];
    chordIdx++;

    notes.forEach((freq) => {
      const osc = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.05, now + 0.6);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.4);

      osc.connect(noteGain);
      noteGain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 3.5);
    });
  }

  function startSynth() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new Ctx();
      masterGain = audioCtx.createGain();
      masterGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    masterGain.gain.value = isMuted ? 0 : volume;
    playAmbientChord();
    synthTimer = setInterval(playAmbientChord, 3500);
  }

  function stopSynth() {
    clearInterval(synthTimer);
    synthTimer = null;
  }

  function updateVolume() {
    const effective = isMuted ? 0 : volume;
    audio.volume = effective;
    if (masterGain) masterGain.gain.value = effective;
    muteBtn.textContent = isMuted || volume === 0 ? '🔇' : '🔊';
  }

  if (cfg.src) {
    audio.src = cfg.src;
    audio.volume = volume;
  }

  toggleBtn.addEventListener('click', async () => {
    if (!isPlaying) {
      isPlaying = true;
      player.classList.add('playing');
      playIcon.textContent = '⏸';
      if (cfg.src) {
        try {
          await audio.play();
        } catch {
          startSynth();
          showToast('File MP3 tidak ditemukan, memutar musik ambient bawaan.');
        }
      } else {
        startSynth();
      }
    } else {
      isPlaying = false;
      player.classList.remove('playing');
      playIcon.textContent = '▶';
      if (cfg.src) audio.pause();
      stopSynth();
    }
  });

  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    updateVolume();
  });

  volumeSlider.addEventListener('input', (e) => {
    volume = Number(e.target.value);
    if (volume > 0) isMuted = false;
    updateVolume();
  });
}

// ===== Init App =====
document.addEventListener('DOMContentLoaded', () => {
  $('#yearNow').textContent = new Date().getFullYear();

  initTheme();
  initTyping();
  renderEducation();
  renderSkills();
  renderProjects();
  renderAchievements();
  initScrollAndReveal();
  initCommandPalette();
  initContact();
  initGallerySlider();
  initMusicPlayer();

  // Skill filters
  $$('#skillFilters .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('#skillFilters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.filter);
    });
  });

  // Project filters & search
  let activeProjFilter = 'all';
  $$('#projectFilters .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('#projectFilters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeProjFilter = btn.dataset.filter;
      renderProjects(activeProjFilter, $('#projectSearch').value);
    });
  });

  $('#projectSearch').addEventListener('input', (e) => {
    renderProjects(activeProjFilter, e.target.value);
  });

  // Mobile menu
  $('#hamburger').addEventListener('click', () => {
    const nav = $('#navLinks');
    const isOpen = nav.classList.toggle('open');
    $('#hamburger').setAttribute('aria-expanded', String(isOpen));
  });

  $$('.nav-link').forEach((link) => {
    link.addEventListener('click', () => $('#navLinks').classList.remove('open'));
  });

  // Modals
  $('#openCvBtn').addEventListener('click', () => {
    $('#cvModal').classList.add('open');
    $('#cvModal').setAttribute('aria-hidden', 'false');
  });
  $('#printCvBtn').addEventListener('click', () => window.print());
  $('#closeProjectModal').addEventListener('click', () => closeModal('#projectModal'));
  $('#closeCvModal').addEventListener('click', () => closeModal('#cvModal'));

  ['#projectModal', '#cvModal', '#cmdModal'].forEach((id) => {
    $(id).addEventListener('click', (e) => {
      if (e.target === $(id)) closeModal(id);
    });
  });
});
