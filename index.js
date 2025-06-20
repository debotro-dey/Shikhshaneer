// Toggle Hamburger Menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Scroll to Top Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
