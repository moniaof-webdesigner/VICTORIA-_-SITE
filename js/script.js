/* ── NAV SCROLL EFFECT ─────────────────────────────────────── */
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ── COUNTER ANIMATION ─────────────────────────────────────── */
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    let current  = 0;
    const step   = Math.ceil(target / 50);

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);

    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(el => counterObserver.observe(el));

/* ── COMPARE CARDS — TILT 3D PARALLAX ─────────────────────── */
document.querySelectorAll('[data-tilt]').forEach(card => {
  const MAX = 5;
  let raf;
  card.addEventListener('mousemove', e => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform =
        `perspective(1000px) rotateY(${x * MAX}deg) rotateX(${-y * MAX}deg) scale(1.018)`;
    });
  });
  card.addEventListener('mouseleave', () => {
    cancelAnimationFrame(raf);
    card.style.transform = '';
  });
});

/* ── HOLOFOTE NA GRADE (para quem é + faq) ─────────────────── */
[['para-quem', '--pq-mx', '--pq-my'], ['faq', '--faq-mx', '--faq-my']].forEach(([id, mx, my]) => {
  const sec = document.getElementById(id);
  if (!sec) return;
  sec.addEventListener('pointermove', e => {
    const r = sec.getBoundingClientRect();
    sec.style.setProperty(mx, `${((e.clientX - r.left) / r.width) * 100}%`);
    sec.style.setProperty(my, `${((e.clientY - r.top) / r.height) * 100}%`);
  });
});

/* ── MÓDULOS — PAINÉIS EXPANSÍVEIS ─────────────────────────── */
const moduloOptions = document.querySelectorAll('.modulo-option');

moduloOptions.forEach(option => {
  option.addEventListener('click', () => {
    if (option.classList.contains('active')) return;

    moduloOptions.forEach(o => {
      o.classList.remove('active');
      o.setAttribute('aria-selected', 'false');
    });

    option.classList.add('active');
    option.setAttribute('aria-selected', 'true');
  });

  option.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      option.click();
    }
  });
});
