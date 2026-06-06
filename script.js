/* ═══════════════════════════════════════════════════════════════
   template-pasticcerie-002 — Dessert Lab
   food-dessert scroll · single-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/pasticcerie-002/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // food-dessert — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 600;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fbg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#C49A6C" stop-opacity="0.12"/>'
    + '<stop offset="100%" stop-color="#2A1F15" stop-opacity="0.06"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="url(#fbg)"/>'
    + '<text x="50%" y="50%" font-family="\'DM Sans\',sans-serif" font-size="13"'
    + ' font-weight="700" fill="#9A8B7A" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Icons — stroke-width inline, 256 viewBox ────────
var PHOSPHOR_ICONS = {

  /* ─ Navigation / UI ─ */
  'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="128" cy="104" r="32"/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"/></svg>',

  'clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  'phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M164.39,145.34l-24.61,24.6a144.29,144.29,0,0,1-54.06-54.06l24.6-24.61a8,8,0,0,0,1.83-8.51L96.31,46.05a8,8,0,0,0-8.74-4.8A72.14,72.14,0,0,0,24,112c0,66.17,53.83,120,120,120a72.14,72.14,0,0,0,70.75-63.57,8,8,0,0,0-4.8-8.74l-36.72-15.84A8,8,0,0,0,164.39,145.34Z"/></svg>',

  'tag': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><path d="M197.66,122.34l-72-72A8,8,0,0,0,120,48H48a8,8,0,0,0-8,8v72a8,8,0,0,0,2.34,5.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,197.66,122.34Z"/><circle cx="84" cy="84" r="8" fill="currentColor" stroke="none"/></svg>',

  'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/></svg>',

  /* ─ Chef / Brand ─ */
  'chef-hat': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><path d="M92,208H72a8,8,0,0,1-8-8V152"/><path d="M164,208h20a8,8,0,0,0,8-8V152"/><rect x="64" y="144" width="128" height="48" rx="4"/><path d="M196,144H60a52,52,0,1,1,90.84-34.8"/><path d="M196,144a52,52,0,0,0,0-104,51,51,0,0,0-31.16,10.6"/></svg>',

  'star': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><polygon points="128,32 162,96 234,107 181,159 195,232 128,196 61,232 75,159 22,107 94,96"/></svg>',

  'leaf': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><path d="M216,40c0,120-88,176-88,176"/><path d="M40,144c20.29-20.29,44.07-30.65,68.07-30.65C131.81,113.35,155.82,120,180,98.32A104.06,104.06,0,0,0,216,40,104.06,104.06,0,0,0,40,144Z"/></svg>',

  'gift': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><rect x="32" y="112" width="192" height="120" rx="8"/><rect x="24" y="72" width="208" height="40" rx="8"/><line x1="128" y1="72" x2="128" y2="232"/><path d="M128,72a24,24,0,0,1-48,0c0-13.25,10.75-24,24-24C120.83,48,128,62.6,128,72Z"/><path d="M128,72a24,24,0,0,0,48,0c0-13.25-10.75-24-24-24C144.17,48,128,62.6,128,72Z"/></svg>',

  'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="88,136 112,160 168,104"/></svg>',

  'x-circle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><circle cx="128" cy="128" r="96"/><line x1="160" y1="96" x2="96" y2="160"/><line x1="96" y1="96" x2="160" y2="160"/></svg>',

  'calendar': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><rect x="32" y="48" width="192" height="176" rx="8"/><line x1="176" y1="24" x2="176" y2="64"/><line x1="80" y1="24" x2="80" y2="64"/><line x1="32" y1="96" x2="224" y2="96"/></svg>',

  'sparkle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M208,144H144V80a16,16,0,0,0-32,0v64H48a16,16,0,0,0,0,32h64v64a16,16,0,0,0,32,0V176h64a16,16,0,0,0,0-32Z"/></svg>',

  /* ─ Social ─ */
  'whatsapp': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.69,215.07a8,8,0,0,0,9.88,9.83l37.88-11.85A104,104,0,1,0,128,24Z"/><path d="M168.73,152c-3.27,6-7.94,10.5-14.14,13.07C144,169,134,168,120.27,160c-10.5-6-19.13-14-26.27-24C87.27,127.07,84,118,88,107.07c2.33-6,6.87-10.53,13-13.73"/><path d="M157.65,120.65l-24-6.32a8,8,0,0,0-8.24,2.57l-8,10.66a44,44,0,0,1-16.84-18.67l10.31-8.87a8,8,0,0,0,2.15-8.43l-7.34-23.36A8,8,0,0,0,98,72H80a8,8,0,0,0-8,8.27A96.09,96.09,0,0,0,168,176a8,8,0,0,0,8-8V150.31A8,8,0,0,0,157.65,120.65Z"/></svg>',

  'instagram': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="40"/><circle cx="180" cy="76" r="10" fill="currentColor" stroke="none"/></svg>'
};

(function () {
  'use strict';

  // ── Inject Phosphor icons ─────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ──────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ──────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── IntersectionObserver — fade-up, stagger-card ─────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Scroll animation — canvas COVER mode ─────────────────
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx          = canvas.getContext('2d');
  var images       = [];
  var loaded       = 0;
  var currentFrame = 0;
  var pinEl        = section.querySelector('.scroll-anim-pin');

  function setupCanvas() {
    var dpr = window.devicePixelRatio || 1;
    var cw  = pinEl.clientWidth;
    var ch  = pinEl.clientHeight;
    canvas.width        = cw * dpr;
    canvas.height       = ch * dpr;
    canvas.style.width  = cw + 'px';
    canvas.style.height = ch + 'px';
    ctx.scale(dpr, dpr);
  }

  function renderFrame(img) {
    var cw = canvas.clientWidth;
    var ch = canvas.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);  // COVER — obbligatorio
    var dw = iw * scale;
    var dh = ih * scale;
    var dx = (cw - dw) / 2;
    var dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, scrolled / (total || 1));
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0 || loaded === 1) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      img.src = FRAME_PATH + FRAME_PREFIX
               + String(idx + 1).padStart(FRAME_PAD, '0') + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
