const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const controlActive = document.querySelector('.control-active');

// let currentIndex = 0;
// const slideCount = slides.length;
// let isDragging = false;
// let startPositionX = 0;
// let currentTranslate = 0;
// const slideWidth = slides[0].offsetWidth;

// function updateSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`;
// }

// function updateControlActiveWidth() {
//   const controlWidth = (100 / slideCount) * (currentIndex + 1);
//   controlActive.style.width = `${controlWidth}%`;
// }

// sliderContainer.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   startPositionX = e.clientX;
// });

// sliderContainer.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;
//   const moveX = e.clientX - startPositionX;
//   currentTranslate = -currentIndex * slideWidth + moveX;

//   updateSliderPosition();
// });

// sliderContainer.addEventListener('mouseup', () => {
//   isDragging = false;
//   currentIndex = (currentIndex + 1) % slideCount;
//   currentTranslate = -currentIndex * slideWidth;
//   updateSliderPosition();
//   updateControlActiveWidth();
// });

// sliderContainer.addEventListener('mouseleave', () => {
//   isDragging = false;
//   currentIndex = (currentIndex + 1) % slideCount;
//   currentTranslate = -currentIndex * slideWidth;
//   updateSliderPosition();
//   updateControlActiveWidth();
// });

// sliderContainer.addEventListener('mouseup', () => {
//   isDragging = false;
//   const movedBy = -currentTranslate / slideWidth;
//   console.log(movedBy);
//   if (movedBy < -0.5) {
//     currentIndex = Math.min(currentIndex + 1, slideCount - 1);
//   } else if (movedBy > 0.5) {
//     currentIndex = Math.max(currentIndex - 1, 0);
//   }
//   currentTranslate = -currentIndex * slideWidth;
//   updateSliderPosition();
//   updateControlActiveWidth();
// });

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % slideCount;
//   currentTranslate = -currentIndex * slides[0].offsetWidth;
//   updateSliderPosition();
//   updateControlActiveWidth();
// }, 3000);

let isDragging = false;
let startPosX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosX = e.clientX;
  prevTranslate = currentTranslate;
});

slider.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const distanceX = e.clientX - startPosX;
    console.log(distanceX);
    currentTranslate = prevTranslate + distanceX;
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});
