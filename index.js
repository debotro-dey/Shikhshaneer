// Toggle Hamburger Menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Hamburger toggle click
document.getElementById('hamburger').addEventListener('click', toggleMenu);

// Scroll to Top Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll Animation for .animate elements
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Slideshow logic
let slideIndex = 0;
let slideTimer = null;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  slideTimer = setTimeout(showSlides, 5000); // 5 seconds per slide
}

// Next/Prev slideshow controls
function plusSlides(n) {
  clearTimeout(slideTimer);
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = 0;
  showSlides();
}

showSlides(); // Start slideshow

// Mega menu category switching
document.querySelectorAll('.category').forEach((cat, index) => {
  cat.addEventListener('mouseenter', () => {
    // Remove active from all categories
    document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
    // Hide all subject lists
    document.querySelectorAll('.subject-list').forEach(list => list.classList.remove('active'));
    // Activate hovered category
    cat.classList.add('active');
    document.querySelectorAll('.subject-list')[index].classList.add('active');
  });
});

// Show first category & subject list by default
if (document.querySelector('.category') && document.querySelector('.subject-list')) {
  document.querySelector('.category').classList.add('active');
  document.querySelector('.subject-list').classList.add('active');
}
