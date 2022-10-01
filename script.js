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
