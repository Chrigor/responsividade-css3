let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

  document.body.style.overflow = show ? 'hidden': 'initial';

  menuSection.classList.toggle('on', show); // para alterar, se tiver, ele tira, se nao tiver, ele coloca
  show = !show;
});