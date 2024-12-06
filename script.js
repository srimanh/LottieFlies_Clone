const layer1 = document.querySelector('.layer1');
const layer2 = document.querySelector('.layer2');
const layer3 = document.querySelector('.layer3');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Layer 1 rotates clockwise
  layer1.style.transform = `rotate(${currentScrollY * 0.2}deg)`;
  // Layer 2 rotates counter-clockwise
  layer2.style.transform = `rotate(${currentScrollY * -0.1}deg)`;
  // Layer 3 rotates clockwise
  layer3.style.transform = `rotate(${currentScrollY * 0.05}deg)`;
});
