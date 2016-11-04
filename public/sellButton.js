/* eslint-disable no-undef */

$(document).ready(() => {
  const elBottom = $('.edit').offset().top;

  $(document).scroll(() => {
    if (elBottom - $(window).scrollTop() < 0) {
      $('.follow').css({ display: 'block', top: '3px' });
    } else {
      $('.follow').css({ display: 'hidden' });
    }
  });
});
