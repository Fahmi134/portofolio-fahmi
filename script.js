// ═══════════════════════════════════════════
//  SCROLL ANIMATIONS
// ═══════════════════════════════════════════
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// ═══════════════════════════════════════════
//  NAVBAR SCROLL EFFECT + ACTIVE LINK
// ═══════════════════════════════════════════
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor = window.scrollY > 60
    ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)';
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(l => {
    l.style.color = l.getAttribute('href') === `#${current}` ? '#ffffff' : '';
  });
});

// Mobile menu drawer toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
if (mobileMenuBtn && mobileDrawer) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    mobileMenuBtn.classList.toggle('open', isOpen);
    document.body.classList.toggle('drawer-open', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
  });
  mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      mobileMenuBtn.classList.remove('open');
      document.body.classList.remove('drawer-open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    });
  });
}

// ═══════════════════════════════════════════
//  BACKGROUND MUSIC (AUTOPLAY + FALLBACK UNLOCK)
// ═══════════════════════════════════════════
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

if (bgMusic && musicBtn) {
  bgMusic.volume = 0.55;
  const musicText = musicBtn.querySelector('.music-text');

  function syncMusicUI(playing) {
    musicBtn.classList.toggle('playing', playing);
    if (musicText) musicText.textContent = playing ? 'On' : 'Musik';
  }

  function tryAutoPlay() {
    const p = bgMusic.play();
    if (p !== undefined) {
      p.then(() => {
        syncMusicUI(true);
        removeUnlockListeners();
      }).catch(() => {
        syncMusicUI(false);
      });
    }
  }

  function unlockOnGesture() {
    if (bgMusic.paused) {
      tryAutoPlay();
    } else {
      removeUnlockListeners();
    }
  }

  function removeUnlockListeners() {
    ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
      document.removeEventListener(evt, unlockOnGesture);
    });
  }

  ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
    document.addEventListener(evt, unlockOnGesture, { passive: true });
  });

  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (bgMusic.paused) {
      bgMusic.play().then(() => syncMusicUI(true)).catch(() => {});
    } else {
      bgMusic.pause();
      syncMusicUI(false);
    }
  });

  window.addEventListener('DOMContentLoaded', tryAutoPlay);
  window.addEventListener('load', tryAutoPlay);
  tryAutoPlay();
}

// ═══════════════════════════════════════════
//  PROJECT FILTER
// ═══════════════════════════════════════════
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.opacity = match ? '1' : '0.2';
      card.style.transform = match ? '' : 'scale(0.97)';
      card.style.pointerEvents = match ? 'auto' : 'none';
    });
  });
});

// ═══════════════════════════════════════════
//  TYPING EFFECT ON HERO TAGLINE
// ═══════════════════════════════════════════
const tagline = document.querySelector('.hero-tagline');
if (tagline) {
  const text = tagline.innerHTML;
  tagline.innerHTML = '';
  tagline.style.opacity = '1';
  let i = 0;
  const typeInterval = setInterval(() => {
    tagline.innerHTML = text.slice(0, i++);
    if (i > text.length) clearInterval(typeInterval);
  }, 18);
}

// ═══════════════════════════════════════════
//  STAT COUNTER ANIMATION
// ═══════════════════════════════════════════
function animateCounter(el, target) {
  let cur = 0;
  const step = Math.ceil(target / 30);
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur;
    if (cur >= target) clearInterval(timer);
  }, 50);
}
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.stat-num').forEach(num => {
      const match = num.textContent.match(/(\d+)/);
      if (match) {
        const dot = num.querySelector('.red-dot');
        num.textContent = '';
        if (dot) num.appendChild(dot);
        animateCounter(num, parseInt(match[1]));
      }
    });
    statsObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });
const heroRight = document.querySelector('.hero-right');
if (heroRight) statsObserver.observe(heroRight);

// ═══════════════════════════════════════════
//  CARD HOVER PARALLAX
// ═══════════════════════════════════════════
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${-y*4}deg) rotateY(${x*4}deg) translateY(-2px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// ═══════════════════════════════════════════
//  INITIAL HERO ANIMATE
// ═══════════════════════════════════════════
window.addEventListener('load', () => {
  document.querySelectorAll('.hero [data-animate]').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 150);
  });
});


/* ══════════════════════════════════════════════════════════
   ██████╗ ██╗   ██╗██████╗ ███████╗ ██████╗ ██████╗
  ██╔════╝ ██║   ██║██╔══██╗██╔════╝██╔═══██╗██╔══██╗
  ██║      ██║   ██║██████╔╝███████╗██║   ██║██████╔╝
  ██║      ██║   ██║██╔══██╗╚════██║██║   ██║██╔══██╗
  ╚██████╗ ╚██████╔╝██║  ██║███████║╚██████╔╝██║  ██║
   ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝
   ANIMATIONS — Multi Agent Cursors + Custom Cursor
══════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────
//  1. CUSTOM MAIN CURSOR
// ─────────────────────────────────────────────────────────
const mainCursor = document.createElement('div');
mainCursor.id = 'main-cursor';
document.body.appendChild(mainCursor);

const cursorDot = document.createElement('div');
cursorDot.id = 'cursor-dot';
document.body.appendChild(cursorDot);

const cursorGlow = document.createElement('div');
cursorGlow.id = 'cursor-glow';
document.body.appendChild(cursorGlow);

let mouseX = -200, mouseY = -200;
let dotX = -200, dotY = -200;
let ringX = -200, ringY = -200;
let glowX = -200, glowY = -200;
let cursorVisible = false;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (!cursorVisible) {
    cursorVisible = true;
    dotX = ringX = glowX = mouseX;
    dotY = ringY = glowY = mouseY;
    mainCursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
    cursorGlow.style.opacity = '1';
  }
});

document.addEventListener('mouseleave', () => {
  cursorVisible = false;
  mainCursor.style.opacity = '0';
  cursorDot.style.opacity = '0';
  cursorGlow.style.opacity = '0';
});

// Cursor scale on hover over interactive elements (event delegation)
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button, .project-card, .filter-btn, .nav-links a, .contact-item, .play-icon')) {
    mainCursor.classList.add('cursor-hover');
    cursorDot.classList.add('dot-hover');
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('a, button, .project-card, .filter-btn, .nav-links a, .contact-item, .play-icon')) {
    mainCursor.classList.remove('cursor-hover');
    cursorDot.classList.remove('dot-hover');
  }
});

// Click effect
document.addEventListener('mousedown', () => mainCursor.classList.add('cursor-click'));
document.addEventListener('mouseup',   () => mainCursor.classList.remove('cursor-click'));

// RAF loop — smooth lag follow
(function animateCursor() {
  if (cursorVisible) {
    dotX += (mouseX - dotX) * 0.85;
    dotY += (mouseY - dotY) * 0.85;
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    glowX += (mouseX - glowX) * 0.07;
    glowY += (mouseY - glowY) * 0.07;

    mainCursor.style.left = ringX + 'px';
    mainCursor.style.top  = ringY + 'px';
    cursorDot.style.left  = dotX + 'px';
    cursorDot.style.top   = dotY + 'px';
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top  = glowY + 'px';
  }
  requestAnimationFrame(animateCursor);
})();


// ─────────────────────────────────────────────────────────
//  2. CLICK RIPPLE / SPARK
// ─────────────────────────────────────────────────────────
document.addEventListener('click', (e) => {
  // Ring ripple
  const ripple = document.createElement('div');
  ripple.className = 'click-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top  = e.clientY + 'px';
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);

  // Sparks
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement('div');
    spark.className = 'click-spark';
    const angle  = (i / 8) * 360;
    const dist   = 24 + Math.random() * 20;
    spark.style.left = e.clientX + 'px';
    spark.style.top  = e.clientY + 'px';
    spark.style.setProperty('--dx', Math.cos(angle * Math.PI / 180) * dist + 'px');
    spark.style.setProperty('--dy', Math.sin(angle * Math.PI / 180) * dist + 'px');
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 500);
  }
});


// ─────────────────────────────────────────────────────────
//  3. CURSOR TRAIL — ghost ring echoes
// ─────────────────────────────────────────────────────────
const TRAIL_COUNT = 8;
const trailRings = [];
const trailPositions = Array.from({ length: 30 }, () => ({ x: -200, y: -200 }));
let trailHead = 0;

for (let i = 0; i < TRAIL_COUNT; i++) {
  const ring = document.createElement('div');
  ring.className = 'cursor-trail';
  const scale = 1 - i * 0.1;
  ring.style.width  = (18 - i * 1.5) + 'px';
  ring.style.height = (18 - i * 1.5) + 'px';
  ring.style.opacity = (0.4 - i * 0.045).toString();
  document.body.appendChild(ring);
  trailRings.push(ring);
}

(function animateTrail() {
  trailPositions[trailHead] = { x: mouseX, y: mouseY };
  trailHead = (trailHead + 1) % trailPositions.length;
  trailRings.forEach((ring, i) => {
    const idx = (trailHead - 1 - i * 3 + trailPositions.length * 4) % trailPositions.length;
    const pos = trailPositions[idx];
    ring.style.left = pos.x + 'px';
    ring.style.top  = pos.y + 'px';
  });
  requestAnimationFrame(animateTrail);
})();


// ─────────────────────────────────────────────────────────
//  4. FLOATING AGENT CURSORS BUILDING THE WEBSITE
// ─────────────────────────────────────────────────────────
const isCompactScreen = () => window.innerWidth <= 640;

const ALL_AGENTS = [
  { name: 'Agent-01', color: '#3b82f6', label: 'Building Grid' },
  { name: 'Agent-02', color: '#22c55e', label: 'Styling UI' },
  { name: 'Agent-03', color: '#f59e0b', label: 'Animating' },
  { name: 'Agent-04', color: '#a855f7', label: 'Refining CSS' },
  { name: 'Agent-05', color: '#ec4899', label: 'Polishing' },
];

const AGENTS = isCompactScreen() ? ALL_AGENTS.slice(0, 3) : ALL_AGENTS;

const BUILDABLE_SELECTOR =
  '.hero-left, .hero-center, .stat-block, .project-card, .featured-project, .about-headline, .triple-col, .manifesto-card, .contact-item, .section-header';

const codeSnippets = [
  '+ display: grid',
  '+ color: #D92323',
  '+ padding: 36px',
  '+ border: 1px solid',
  '+ font: Bebas Neue',
  '+ transition: 0.3s',
  '+ gap: 24px',
  '+ backdrop-filter: blur',
  '+ border-radius: 4px',
  '+ box-shadow: glow',
  '+ transform: translateY(0)',
  '✓ layout synced'
];

const actions = [
  'Building Layout', 'Styling UI', 'Writing CSS', 'Snapping Grid',
  'Animating', 'Tuning Colors', 'Adding Effects', 'Rendering',
  'Resizing Box', 'Polishing', 'Optimizing', 'Done ✓'
];

function formatTagName(el) {
  const tag = el.tagName.toLowerCase();
  const cls = Array.from(el.classList).find(c => !['visible', 'is-wireframe', 'agent-building'].includes(c));
  return cls ? `<${tag}.${cls}>` : `<${tag}>`;
}

function spawnAgentClick(x, y, color) {
  const ring = document.createElement('div');
  ring.className = 'agent-click-ring';
  ring.style.left = x + 'px';
  ring.style.top  = y + 'px';
  ring.style.setProperty('--ac', color);
  document.body.appendChild(ring);
  setTimeout(() => ring.remove(), 580);
}

function spawnCodeToast(state, x, y, color, text) {
  if (state.lastToast && state.lastToast.isConnected) {
    state.lastToast.remove();
  }
  const toast = document.createElement('div');
  toast.className = 'agent-code-toast';
  toast.textContent = text;
  const toastMaxX = Math.max(12, window.innerWidth - (isCompactScreen() ? 135 : 170));
  toast.style.left = Math.min(toastMaxX, Math.max(12, x + 12)) + 'px';
  toast.style.top  = Math.max(74, y - 24) + 'px';
  toast.style.setProperty('--ac', color);
  document.body.appendChild(toast);
  state.lastToast = toast;
  setTimeout(() => {
    if (toast.isConnected) toast.remove();
  }, 1400);
}

const agentStates = AGENTS.map((agent, i) => {
  const el = document.createElement('div');
  el.className = 'agent-cursor';
  el.innerHTML = `
    <svg class="agent-arrow" width="18" height="22" viewBox="0 0 18 22" fill="none">
      <path d="M1 1L1 18L6 13.5L9.5 21L12 20L8.5 12.5L16 12.5L1 1Z"
            fill="${agent.color}" stroke="#000" stroke-width="1.2"/>
    </svg>
    <div class="agent-label" style="background:${agent.color}">
      <span>${agent.name}</span>
      <span class="agent-action">${agent.label}</span>
    </div>`;
  document.body.appendChild(el);

  // Per-agent Figma/Builder selection box with corner handles
  const box = document.createElement('div');
  box.className = 'agent-bbox';
  box.style.setProperty('--ac', agent.color);
  box.innerHTML = `
    <div class="agent-bbox-tag"></div>
    <div class="agent-bbox-dim"></div>
    <span class="agent-bbox-handle tl"></span>
    <span class="agent-bbox-handle tr"></span>
    <span class="agent-bbox-handle bl"></span>
    <span class="agent-bbox-handle br"></span>
  `;
  document.body.appendChild(box);

  const cols = isCompactScreen() ? [40, 140, 220] : [160, 380, 620, 860, 1100];
  const rows = isCompactScreen() ? [140, 280, 420] : [160, 300, 420, 240, 180];
  const startX = cols[i] ?? (60 + i * 100);
  const startY = rows[i] ?? (180 + i * 70);

  return {
    el,
    box,
    agent,
    x: startX, y: startY,
    tx: startX, ty: startY,
    vx: 0, vy: 0,
    phase: i * (Math.PI * 2 / AGENTS.length),
    speed: 0.24 + i * 0.03,
    isPaused: false,
    pauseDuration: 50 + i * 25,
    targetEl: null,
    activeEl: null,
  };
});

function getActionEl(state) {
  return state.el.querySelector('.agent-action');
}

function updateAgentBox(state, target) {
  if (!target) {
    state.box.classList.remove('active');
    return;
  }
  const r = target.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0 || r.bottom < 0 || r.top > window.innerHeight) {
    state.box.classList.remove('active');
    return;
  }
  state.box.style.left   = r.left + 'px';
  state.box.style.top    = r.top + 'px';
  state.box.style.width  = r.width + 'px';
  state.box.style.height = r.height + 'px';
  state.box.querySelector('.agent-bbox-tag').textContent = `${state.agent.name} · ${formatTagName(target)}`;
  state.box.querySelector('.agent-bbox-dim').textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
  state.box.classList.add('active');
}

function buildElement(target, state) {
  if (!target) return;
  target.classList.remove('is-wireframe');
  target.classList.remove('agent-building');
  void target.offsetWidth; // restart sweep animation
  target.classList.add('agent-building');
  setTimeout(() => target.classList.remove('agent-building'), 700);

  // Trigger cursor click & code toast
  state.el.classList.add('is-clicking');
  setTimeout(() => state.el.classList.remove('is-clicking'), 180);
  spawnAgentClick(state.x, state.y, state.agent.color);
  spawnCodeToast(
    state,
    state.x,
    state.y,
    state.agent.color,
    codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
  );
  updateAgentBox(state, target);
}

// Track which elements are currently claimed by agents
const claimedElements = new Map(); // agentIndex → Element

function getVisibleBuildables() {
  const vh = window.innerHeight;
  const targets = Array.from(document.querySelectorAll(BUILDABLE_SELECTOR));
  return targets.filter(el => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 80 && r.top < vh - 60;
  });
}

function pickWaypoint(state, agentIdx) {
  claimedElements.delete(agentIdx);
  state.box.classList.remove('active');
  state.activeEl = null;

  const visible = getVisibleBuildables();
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  if (visible.length === 0) {
    const section = agentIdx % 5;
    state.targetEl = null;
    state.tx = 80 + section * Math.max(100, (vw - 220) / 4) + (Math.random() - 0.5) * 60;
    state.ty = 120 + Math.random() * Math.max(120, vh - 220);
    return;
  }

  // Prioritize elements that are still in wireframe state so agents visibly build them first!
  const claimedSet = new Set(claimedElements.values());
  const unbuilt = visible.filter(el => el.classList.contains('is-wireframe') && !claimedSet.has(el));
  const pool = unbuilt.length > 0 ? unbuilt : visible.filter(el => !claimedSet.has(el));
  const candidates = pool.length > 0 ? pool : visible;

  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  claimedElements.set(agentIdx, chosen);
  state.targetEl = chosen;

  const r = chosen.getBoundingClientRect();
  // Aim near the top-left / bottom-right corners so cursors don't park over body text
  const corner = agentIdx % 2 === 0;
  const targetX = corner ? r.left + 14 : Math.max(r.left + 18, r.right - 95);
  const targetY = corner ? r.top + 14 : Math.max(r.top + 18, r.bottom - 38);
  state.tx = Math.max(18, Math.min(vw - (isCompactScreen() ? 110 : 140), targetX));
  state.ty = Math.max(76, Math.min(vh - (isCompactScreen() ? 100 : 80), targetY));
}

// Start a wireframe -> build sequence for visible elements (and auto-reveal fallback)
function triggerBuildSequence() {
  const allTargets = document.querySelectorAll(BUILDABLE_SELECTOR);
  allTargets.forEach(el => {
    el.classList.add('is-wireframe');
  });

  // Reset status bar to active building
  layerCount = 0;
  const stateEl = document.getElementById('asb-state');
  if (stateEl) {
    stateEl.textContent = 'Building...';
    stateEl.className = 'asb-running';
  }

  // Gently send agents to build visible blocks without darting over text
  agentStates.forEach((state, idx) => {
    state.isPaused = false;
    state.speed = 0.45 + idx * 0.04;
    pickWaypoint(state, idx);
  });

  // Safety reveal for visible items so nothing ever stays wireframe too long
  revealVisibleWireframesSoon();
}

function revealVisibleWireframesSoon() {
  const visible = getVisibleBuildables().filter(el => el.classList.contains('is-wireframe'));
  visible.forEach((el, idx) => {
    setTimeout(() => {
      if (el.classList.contains('is-wireframe')) {
        el.classList.remove('is-wireframe');
        el.classList.add('agent-building');
        setTimeout(() => el.classList.remove('agent-building'), 700);
      }
    }, 900 + idx * 240);
  });
}

// Initialize build sequence right on load
setTimeout(() => {
  triggerBuildSequence();
}, 250);

let frame = 0;
(function animateAgents() {
  frame++;
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  agentStates.forEach((state, idx) => {
    if (state.isPaused) {
      state.pauseDuration--;
      if (state.activeEl) {
        updateAgentBox(state, state.activeEl);
      }
      if (state.pauseDuration <= 0) {
        state.isPaused = false;
        state.speed = 0.24 + idx * 0.03;
        pickWaypoint(state, idx);
        getActionEl(state).textContent = actions[Math.floor(Math.random() * actions.length)];
      }
    } else {
      const dx = state.tx - state.x;
      const dy = state.ty - state.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 12) {
        state.isPaused = true;
        // Calm, longer pause after building so text stays undisturbed
        const hasUnbuilt = getVisibleBuildables().some(el => el.classList.contains('is-wireframe'));
        state.pauseDuration = hasUnbuilt
          ? 70 + Math.floor(Math.random() * 45)
          : 180 + Math.floor(Math.random() * 140);
        state.activeEl = state.targetEl;
        buildElement(state.targetEl, state);
      } else {
        state.vx += dx * 0.006 * state.speed;
        state.vy += dy * 0.006 * state.speed;
        state.vx *= 0.88;
        state.vy *= 0.88;
        state.x += state.vx;
        state.y += state.vy;
      }
    }

    const maxRight = isCompactScreen() ? 105 : 135;
    const maxBottom = isCompactScreen() ? 98 : 75;
    state.x = Math.max(12, Math.min(vw - maxRight, state.x));
    state.y = Math.max(72, Math.min(vh - maxBottom, state.y));

    if (state.isPaused) {
      const wobble = Math.sin(frame * 0.03 + state.phase) * 1.1;
      state.el.style.transform = `translate(${state.x + wobble}px, ${state.y}px)`;
    } else {
      state.el.style.transform = `translate(${state.x}px, ${state.y}px)`;
    }
  });

  requestAnimationFrame(animateAgents);
})();

// Re-assign visible waypoints & build newly revealed sections when scrolling
let scrollCollectTimer = null;
window.addEventListener('scroll', () => {
  agentStates.forEach(state => {
    if (state.activeEl) updateAgentBox(state, state.activeEl);
  });
  clearTimeout(scrollCollectTimer);
  scrollCollectTimer = setTimeout(() => {
    agentStates.forEach((state, idx) => {
      state.isPaused = false;
      pickWaypoint(state, idx);
    });
    revealVisibleWireframesSoon();
  }, 160);
});


// ─────────────────────────────────────────────────────────
//  5. STATUS BAR (bottom pill — like in the video + Replay)
// ─────────────────────────────────────────────────────────
const statusBar = document.createElement('div');
statusBar.id = 'agent-status-bar';
statusBar.innerHTML = `
  <div class="asb-dot"></div>
  <span id="asb-count">${AGENTS.length} agents</span>
  <span class="asb-sep">|</span>
  <span id="asb-layers">0 / 364 layers</span>
  <span class="asb-sep">|</span>
  <span id="asb-state" class="asb-running">Building...</span>
  <button id="asb-replay" class="asb-replay" title="Putar ulang animasi bangun website">↻ Replay</button>
`;
document.body.appendChild(statusBar);

document.getElementById('asb-replay').addEventListener('click', (e) => {
  e.stopPropagation();
  triggerBuildSequence();
});

// Animate the layer counter smoothly & keep status bar alive
let layerCount = 0;
setInterval(() => {
  if (layerCount < 364) {
    layerCount = Math.min(layerCount + Math.floor(Math.random() * 10) + 4, 364);
    document.getElementById('asb-layers').textContent = `${layerCount} / 364 layers`;
    if (layerCount >= 364) {
      document.getElementById('asb-state').textContent = 'Polishing ✓';
      document.getElementById('asb-state').className   = 'asb-done';
      setTimeout(() => {
        layerCount = 14;
        document.getElementById('asb-state').textContent = 'Running';
        document.getElementById('asb-state').className   = 'asb-running';
      }, 4500);
    }
  }
}, 180);


// ─────────────────────────────────────────────────────────
//  6. BOUNDING BOX HIGHLIGHTS (hover — blue outline flash)
// ─────────────────────────────────────────────────────────
const bbox = document.createElement('div');
bbox.id = 'bbox-highlight';
document.body.appendChild(bbox);

let bboxTimer = null;
document.addEventListener('mouseover', (e) => {
  const target = e.target.closest('.project-card, .hero-left, .stat-block, .triple-col, .tl-item, .contact-item');
  if (!target) { bbox.style.opacity = '0'; return; }
  const r = target.getBoundingClientRect();
  bbox.style.left   = (r.left   + window.scrollX) + 'px';
  bbox.style.top    = (r.top    + window.scrollY) + 'px';
  bbox.style.width  = r.width  + 'px';
  bbox.style.height = r.height + 'px';
  bbox.style.opacity = '1';
  clearTimeout(bboxTimer);
  bboxTimer = setTimeout(() => { bbox.style.opacity = '0'; }, 1500);
});


// ─────────────────────────────────────────────────────────
//  7. MAGNETIC BUTTON EFFECT
// ─────────────────────────────────────────────────────────
document.querySelectorAll('.btn-primary, .btn-outline, .filter-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.3;
    const y = (e.clientY - r.top  - r.height / 2) * 0.3;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});
