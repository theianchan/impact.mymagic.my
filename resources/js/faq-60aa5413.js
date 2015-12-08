/*!
 * Description:    MaGIC IR Report 2014
 * Website URL:    http://www.mymagic.my
 * Author:         Sheue Yen Lian
 * Author Website: http://sheueyen.com
 */

(function() {
  $(document).ready(function() {
    var $faq;
    $faq = $('#faq');
    if ($faq.length) {
      $faq.on('click', 'li', function(e) {
        var $answer, $item;
        $item = $(e.currentTarget);
        $answer = $('.answer', $item);
        if (!$answer.hasClass('active')) {
          $('li .answer', $item.closest('ol')).removeClass('active');
        }
        $answer.toggleClass('active');
      });
    }
  });

}).call(this);
