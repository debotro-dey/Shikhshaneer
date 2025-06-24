// Toggle Hamburger Menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Close menu (optional - only works if a close button exists)
function closeMenu() {
  document.getElementById('navLinks').classList.remove('active');
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
}, {
  threshold: 0.1
});

// Observe elements with .animate class
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Event Listeners
document.getElementById('hamburger').addEventListener('click', toggleMenu);
