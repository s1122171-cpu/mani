const layers = document.querySelectorAll('.layer');
const area = document.querySelector('.parallax-area');

window.addEventListener('scroll', () => {
  const areaTop = area.getBoundingClientRect().top;

  layers.forEach(layer => {
    const speed = Number(layer.dataset.speed || 0);
    const move = -areaTop * speed;

    layer.style.transform = `translate(-50%, ${move}px)`;
  });
});
