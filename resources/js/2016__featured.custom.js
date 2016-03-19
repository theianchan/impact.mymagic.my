var wow = new WOW(
  {
    boxClass: 'wow',
    offset: 300
  }
);

$( document ).ready(function() {

  wow.init();

  $( '.carousel-controls li' ).click(function() {
    $( "#carousel-display" ).attr('class', $(this).attr('id') );
  });

  $( '.testimonial-controls li' ).click(function() {
    $( ".participant" ).hide();
    $( "." + $(this).attr('id') ).show("show");
  });

});