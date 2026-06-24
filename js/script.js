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

/* ── PARA QUEM É — HOLOFOTE NA GRADE ──────────────────────── */
const paraQuemSection = document.getElementById('para-quem');
if (paraQuemSection) {
  paraQuemSection.addEventListener('pointermove', e => {
    const rect = paraQuemSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    paraQuemSection.style.setProperty('--pq-mx', `${x}%`);
    paraQuemSection.style.setProperty('--pq-my', `${y}%`);
  });
}

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
