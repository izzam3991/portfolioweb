
const slider = document.getElementById('cardSlider');
const dotsContainer = document.getElementById('dotIndicators');
const cards = slider.querySelectorAll('.card');
let cardWidth = slider.offsetWidth;
let currentIndex = 0;

function updateDots(index) {
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function createDots() {
  cards.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      slider.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      currentIndex = index;
      updateDots(index);
    });
    dotsContainer.appendChild(dot);
  });
}

// ✅ NEW: Update dots when scrolling
slider.addEventListener('scroll', () => {
  const newIndex = Math.round(slider.scrollLeft / cardWidth);
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    updateDots(currentIndex);
  }
});

window.addEventListener('resize', () => {
  cardWidth = slider.offsetWidth;
  slider.scrollLeft = currentIndex * cardWidth;
});

createDots();

