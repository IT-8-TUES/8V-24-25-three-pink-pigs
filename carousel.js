const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let autoplayInterval;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add('active');
  }
}

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlidePosition();
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 20000);
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

nextButton.addEventListener('click', () => {
  nextSlide();
  resetAutoplay();
});

prevButton.addEventListener('click', () => {
  prevSlide();
  resetAutoplay();
});

window.addEventListener('resize', updateSlidePosition);

createDots();
updateSlidePosition();
startAutoplay();