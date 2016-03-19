$.fn.extend({
  animateIn: function(s) {
    var a = 'animated ';
    var e = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(this)
      .css('z-index', '2')
      .addClass(a + s)
      .one(e, function() {
        $(this)
          .removeClass(a + s);
      });
  },
  animateOut: function(s) {
    var a = 'animated ';
    var e = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(this)
      .addClass(a + s)
      .one(e, function() {
        $(this)
          .removeClass(a + s)
          .css('z-index', '0');
      });
  }
});

function ahsoka() {

	var capitalize = function(s) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	var selector = function(s) {
	  return '[data-content=' + s + ']';
	};

	$('.show-panel').click(function() {
	  var target = $(this).attr('data-show');
	  var direction = $(this).attr('data-direction');
	  $(selector(target)).animateIn('slideIn' + capitalize(direction));
	});

	$('.close-panel').click(function() {
	  var target = $(this).attr('data-close');
	  var direction = $(this).attr('data-direction');
	  $(selector(target)).animateOut('slideOut' + capitalize(direction));
	});
}

function kenobi() {
  $('.true-facts span').each(function() {
    var string = $(this).html();
    var url = "https://twitter.com/intent/tweet?text=";
    var source = " - http://impact.mymagic.my";
    url += encodeURIComponent(string + source);
    $(this).siblings('a').attr('href', url);
  });
}

$( document ).ready(function() {

	$( document ).foundation();

	var wow = new WOW({
	  offset: 300
	}).init();

	$( '.fancybox' ).fancybox({
    padding: '0',
    width: '100%',
    height: '100%'
	});

	ahsoka();
  kenobi();

});