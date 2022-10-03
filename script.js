// Scroll Suave
const menu = document.querySelectorAll ('nav a[href^="#"]');

menu.forEach((item) => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to){
  window.scroll({
    top: to,
    behavior: "smooth",
  })
}

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

//Menu Hamburguer
const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  }
  else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);