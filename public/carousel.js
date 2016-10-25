$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});

$('#edit').click(() => {
  $('#cover, #modal').fadeTo(500, 1);
});

$('#cover').click(() => {
  $('#cover, #modal').fadeTo(500, 0).hide();
});
