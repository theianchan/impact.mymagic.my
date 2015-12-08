/*!
 * Description:    MaGIC IR Report 2014
 * Website URL:    http://www.mymagic.my
 * Author:         Sheue Yen Lian
 * Author Website: http://sheueyen.com
 */

 (function() {
  $(document).ready(function() {
    var $carousel, transitions;
    transitions = Modernizr.csstransitions ? {
      transforms: Modernizr.csstransforms,
      transforms3d: Modernizr.csstransforms3d,
      easing: 'ease'
    } : false;
    $('.jcarousel').jcarousel({
      wrap: 'circular',
      transitions: transitions
    });
    $('.jcarousel-control-prev').jcarouselControl({
      target: '-=1'
    });
    $('.jcarousel-control-next').jcarouselControl({
      target: '+=1'
    });
    $carousel = $('.jcarousel-pagination');
    $carousel.on('jcarouselpagination:active', 'a', function() {
      return $(this).addClass('active');
    });
    $carousel.on('jcarouselpagination:inactive', 'a', function() {
      return $(this).removeClass('active');
    });
    return $carousel.jcarouselPagination({
      item: function(page, carouselItems) {
        return '<a href="#' + page + '">' + ' </a>';
      }
    });
  });

}).call(this);
