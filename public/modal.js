/* eslint-disable no-undef*/


$('#edit').click(() => {
  $('#cover, #modal').fadeTo(300, 1);
});

$('#cover').click(() => {
  $('#cover, #modal').fadeTo(300, 0).hide();
});

const errorText = '<h4>There was an error fulfilling your request. Please ensure you entered a vaild email address and try again</h4>';

$('.submit').click((event) => {
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/',
    dataType: 'json',
    data: $('#agent-request').formSerialize(),
    complete: (res) => {
      if (res.responseJSON.yo === 'error') {
        $('.inner-modal').append(errorText);
      } else {
        $('.inner-modal').replaceWith('<h1>SUCCESS</h1>');
      }
    },
  });
});
