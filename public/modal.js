
$('#edit').click(() => {
  $('#cover, #modal').fadeTo(500, 1);
});

$('#cover').click(() => {
  $('#cover, #modal').fadeTo(500, 0).hide();
});
