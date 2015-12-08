// fullscreen-carousel

var display = $( "#fullscreen-carousel" );

$( "#content-1" ).click(function() {
  display.removeClass();
  display.addClass( "content-1") ;
});
$( "#content-2" ).click(function() {
  display.removeClass();
  display.addClass( "content-2" );
});
$( "#content-3" ).click(function() {
  display.removeClass();
  display.addClass( "content-3") ;
});
$( "#content-4" ).click(function() {
  display.removeClass();
  display.addClass( "content-4" );
});
$( "#content-5" ).click(function() {
  display.removeClass();
  display.addClass( "content-5") ;
});
$( "#content-6" ).click(function() {
  display.removeClass();
  display.addClass( "content-6" );
});
$( "#content-7" ).click(function() {
  display.removeClass();
  display.addClass( "content-7") ;
});
$( "#content-8" ).click(function() {
  display.removeClass();
  display.addClass( "content-8" );
});

// testimonials

$( "#nurul" ).click(function() {
  $( ".participant" ).hide();
  $( ".nurul" ).show();
});

$( "#firdaus" ).click(function() {
  $( ".participant" ).hide();
  $( ".firdaus" ).show();
});

$( "#tan" ).click(function() {
  $( ".participant" ).hide();
  $( ".tan" ).show();
});

$( "#chandry" ).click(function() {
  $( ".participant" ).hide();
  $( ".chandry" ).show();
});

$( "#dzayed" ).click(function() {
  $( ".participant" ).hide();
  $( ".dzayed" ).show();
});