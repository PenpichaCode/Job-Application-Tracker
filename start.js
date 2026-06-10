// start.js – Handles navigation and UI interactions on the landing page
document.addEventListener('DOMContentLoaded', () => {
  // Helper: smooth scroll for internal anchors
  const smoothScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Buttons that should navigate to the main dashboard (dashboard.html)
  const goToDashboard = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        // Fade‑out transition for a nicer UX
        document.body.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 300);
      });
    }
  };

  // Primary entry points
  goToDashboard('btn-start');   // Nav "Get started"
  goToDashboard('btn-hero');   // Hero "Start locally"
  goToDashboard('btn-cta');    // CTA banner button

  // Hamburger menu toggle (mobile)
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
      // Optionally toggle an aria‑expanded attribute for accessibility
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });
  }

  // Attach smooth‑scroll to all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', smoothScroll);
  });
});
