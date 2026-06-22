'use strict';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Header + barra de progresso */
const header = document.getElementById('header');
const progress = document.getElementById('scrollProgress');
addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 20);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
}, { passive: true });

/* Reveal on scroll + counters */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-count],[data-text]').forEach(count);
    if (e.target.matches('[data-count],[data-text]')) count(e.target);
    io.unobserve(e.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.querySelectorAll('.about-stats').forEach(el => io.observe(el));

function count(el) {
  if (el.dataset.done) return; el.dataset.done = '1';
  if (el.dataset.text) { el.textContent = el.dataset.text; return; }
  const target = +el.dataset.count, suffix = el.dataset.suffix || '';
  if (reduceMotion) { el.textContent = target + suffix; return; }
  let t0 = null; const dur = 1300;
  const step = ts => { if (!t0) t0 = ts; const p = Math.min((ts - t0) / dur, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* Marquee loop perfeito */
const track = document.querySelector('.marquee-track');
if (track) track.innerHTML += track.innerHTML;

/* Menu mobile */
const toggle = document.getElementById('menuToggle'), nav = document.getElementById('nav');
toggle.addEventListener('click', () => { nav.classList.toggle('open'); toggle.classList.toggle('active'); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.classList.remove('active'); }));

/* Ano */
document.getElementById('year').textContent = new Date().getFullYear();
