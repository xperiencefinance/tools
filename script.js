/* ============================================
   XPERIENCE FINANCE — script.js
   Scroll-triggered animations + interactions
   ============================================ */

(function () {
  'use strict';

  // --- Intersection Observer: Reveal sections on scroll ---
  const sections = document.querySelectorAll('.section');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  } else {
    // Fallback: show all sections immediately for older browsers
    sections.forEach((section) => section.classList.add('visible'));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Reading progress indicator (optional thin gold bar at top) ---
  const progressBar = document.createElement('div');
  progressBar.setAttribute('aria-hidden', 'true');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background: linear-gradient(90deg, #C9A84C, #E8C97A);
    z-index: 9999;
    transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(progress, 100) + '%';
  }, { passive: true });

})();
