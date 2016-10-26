$('#edit').click(() => {
  $('#cover, #modal').fadeTo(300, 1);
});

$('#cover').click(() => {
  $('#cover, #modal').fadeTo(300, 0).hide();
});

$('.submit').click((event) => {
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/',
    dataType: 'json',
    data: $('#agent-request').formSerialize(),
    complete: function(res) {
      if (res.responseJSON.yo === "error") {
        $('.inner-modal').append(`<h4>There was an error fulfilling your request. Please ensure you've entered a vaild email address and try again</h4>`);
      } else {
        $('.inner-modal').replaceWith(`<h1>SUCCESS</h1>`);
      }
    },
  });
});
