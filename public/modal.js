$('#edit').click(() => {
  $('#cover, #modal').fadeTo(300, 1);
});

$('#cover').click(() => {
  $('#cover, #modal').fadeTo(300, 0).hide();
});
