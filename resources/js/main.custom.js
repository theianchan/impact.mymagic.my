var $background = $('.ff');
var $destination = $('.ff__destination');
var $titles = $('.ff__title');

$titles.hover( function() {
	$(this).children().toggleClass('current');

	if ($(this).hasClass('ff__educating')) {
		$background.removeClass().addClass('section ff ff--educating');
	} else if ($(this).hasClass('ff__accelerating')) {
		$background.removeClass().addClass('section ff ff--accelerating');
	} else if ($(this).hasClass('ff__exposing')) {
		$background.removeClass().addClass('section ff ff--exposing');
	} else {
		$background.removeClass().addClass('section ff ff--educating');
	}
});

$('.fancybox').fancybox(
	{
		padding : 7
	}
);