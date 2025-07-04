// script.js

// Smooth scroll to sections (if using single-page style)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

      function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
      }