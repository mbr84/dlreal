/* eslint-disable no-undef */

$(document).ready(() => {
  let elTop = $('.edit').offset().top;
  const toggleFollowerButton = () => {
    if (elTop - $(window).scrollTop() < 0) {
      $('.follow').css('display', 'block');
    } else {
      $('.follow').css('display', 'hidden');
    }
  };

  $(window).resize(() => {
    elTop = $('.edit').offset().top;
    toggleFollowerButton();
  });

  $(document).on('scroll touchmove', () => {
    toggleFollowerButton();
  });
});

// for dropdown animated follow button
// const toggleFollowerButton = () => {
//   if (window.innerWidth > 550) {
//     let percentRight = 50 - (50 * ($('.follow').width() / window.innerWidth));
//     percentRight += '%';
//     $('.follow').css({ right: percentRight });
//   } else {
//     $('.follow').css({ right: '8%' });
//   }
//   if (elBottom - $(window).scrollTop() < -100) {
//     $('.follow').css('top', '1px');
//   } else {
//     $('.follow').css('top', '-60px');
//   }
// };
