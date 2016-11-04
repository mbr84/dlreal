/* eslint-disable no-undef */

$(document).ready(() => {
  let elBottom = $('.edit').offset().top;

  const toggleFollowerButton = () => {
    if (elBottom - $(window).scrollTop() < 0) {
      $('.follow').css('display', 'block');
    } else {
      $('.follow').css('display', 'hidden');
    }
  };

  $(window).resize(() => {
    elBottom = $('.edit').offset().top;
    toggleFollowerButton();
  });

  $(document).on('scroll touchmove', () => {
    toggleFollowerButton();
  });
});
