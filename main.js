const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const controlActive = document.querySelector('.control-active');

let currentIndex = 0;
const slideCount = slides.length;
let isDragging = false;
let startPositionX = 0;
let currentTranslate = 0;
let test = 0;
const slideWidth = slides[0].offsetWidth;

function updateSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function updateControlActiveWidth() {
  const controlWidth = (100 / slideCount) * (currentIndex + 1);
  controlActive.style.width = `${controlWidth}%`;
}

function checkScreenWidth() {
  if (window.innerWidth < 768) {
    sliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startPositionX = e.clientX;
      slider.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const moveX = e.clientX - startPositionX;
      currentTranslate = -currentIndex * slideWidth + moveX;
      updateSliderPosition();
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      currentIndex = (currentIndex + 1) % slideCount;
      currentTranslate = -currentIndex * slideWidth;
      updateSliderPosition();
      updateControlActiveWidth();
      slider.style.cursor = 'grab';
    });
  }
}

window.onload = checkScreenWidth;
window.addEventListener('resize', checkScreenWidth);
