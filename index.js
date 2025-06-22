// Toggle Hamburger Menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Attach click events
document.getElementById('hamburger').addEventListener('click', toggleMenu);
document.getElementById('closeBtn').addEventListener('click', toggleMenu);

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
}, {
  threshold: 0.1
});

// Animate elements
document.querySelectorAll('.animate').forEach(el => observer.observe(el));
