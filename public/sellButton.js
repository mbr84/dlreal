/* eslint-disable no-undef */

$(document).ready(() => {
  let elBottom = $('.edit').offset().top + $('.edit').height();
  const toggleFollowerButton = () => {
    if (window.innerWidth > 550) {
      let percentRight = 50 - (50 * ($('.follow').width() / window.innerWidth));
      percentRight += '%';
      $('.follow').css({ right: percentRight });
    } else {
      $('.follow').css({ right: '8%' });
    }
    if (elBottom - $(window).scrollTop() < -100) {
      $('.follow').css('top', '1px');
    } else {
      $('.follow').css('top', '-60px');
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
