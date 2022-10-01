var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  freeScroll: true,
  groupCells: true,
  contain: true,
  draggable: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});