/* eslint-disable no-undef*/


$('#edit').click(() => {
  $('#cover, #modal').fadeTo(300, 1);
});

$('#cover').click(() => {
  $('#cover, #modal').fadeTo(300, 0).hide();
});

const errorMessage = `<h4 class="error-message">There was an error fulfilling your request. Please ensure you've entered a vaild email address and try again</h4>`;
const successMessage = `
<h3 class="success-message">We have received your request. An agent will be in touch with you shortly</h3>`;

$('.submit').click((event) => {
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/',
    dataType: 'json',
    data: $('#agent-request').formSerialize(),
    complete: (res) => {
      if (res.responseJSON.yo === 'error') {
        $('.inner-modal').append(errorMessage);
      } else {
        $('#agent-request').replaceWith(successMessage);
      }
    },
  });
});
