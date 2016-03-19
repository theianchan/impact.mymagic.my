var i11 = {
  messages: [
    "That's great to hear! 😁",
    "In that case... Would you mind doing us a favor?"
  ],
  choices: [
    "I'm listening..."
  ]
};

var i111 = {
  messages: [
    "MaGIC exists to help entrepreneurs. You can do your part by sharing this report with a friend or family member who's interested in entrepreneurship 💌",
    "After all, it's important that people in the startup world know about programs and resources that could help them! "
  ],
  choices: [
    "Maybe next time...",
    "I'll share it!"
  ]
};

var i1111 = {
  messages: [
    "Awesome! 🎉 Here are some links to help you out with Facebook, Twitter, LinkedIn, and email.",
    "But feel free to share any way you're comfortable with 👻",
    "Thank you!"
  ]
};

var i1110 = {
  messages: [
    "No problem! We appreciate you dropping by!",
    "And here... Just in case you change your mind 😜"
  ]
};

var i10 = {
  messages: [
    "We're sorry to hear that 😞",
    "What could we have done better?"
  ]
};

var i101 = {
  messages: [
    "We really appreciate your feedback! 😁",
    "Your answer will help us create a better experience for Malaysian entrepreneurs 💯",
    "If there was any part of this report you wanted to discuss further - feel free to use the sharing buttons below. Thanks!"
  ]
};

function fixAnswer(string) {
  $('#answer').remove();
  $('#magicbot').append('<div class="row row--answers"><div class="message">' + string + '</div></div>');
}

function createMessage(messagesArray) {
  var htmlPre = '<div class="row"><div class="message animated fadeInUp">',
    htmlPost = "</div></div>";
  for (var i = 0; i < messagesArray.length; i++) {
    $("#magicbot").append(htmlPre + messagesArray[i] + htmlPost);
  }
}

function createChoice(messagesArray, currentBranch) {
  var html = '<div class="row row--answers" id="answer">';
  for (var i = messagesArray.length; i > 0; i--) {
    html += '<div class="message animated fadeInUp" data-choice="' + currentBranch + i + '">' + messagesArray[i - 1] + '</div>';
  }
  html += '</div>';
  $('#magicbot').append(html);
  crossroads();
}

function createField() {
  var html = '<div class="row row--answers"><form action="#" autocomplete="off" onsubmit="return false;"><input type="text" name="answer" id="answer" class="message animated fadeInUp" value="" placeholder="Write a response..."></form></div>';

  $("#magicbot").append(html);
  $("#answer").keyup(function(event) {
    if (event.keyCode == 13) {
      var answer = $.trim($("#answer").val());
      if (answer !== "") {
        fixAnswer(answer);
        createMessage(i101.messages);
        $('.sharing-economy').show();
        smoothScrollBottom();
      } else {
        $("#answer").removeClass("shake").removeClass("fadeInUp");
        $("#answer").addClass("shake");
        $("#answer").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
          $(this).removeClass("shake").removeClass("fadeInUp");
        });
      }
    }
  });
  $("#answer").focus();
}

function crossroads() {
  $('#answer .message').click(function() {

    if ($(this).attr('data-choice') === 'i11') {

      fixAnswer($(this).text());
      createMessage(i11.messages);
      createChoice(i11.choices, 'i11');

    } else if ($(this).attr('data-choice') === 'i10') {

      fixAnswer($(this).text());
      createMessage(i10.messages);
      createField();

    } else if ($(this).attr('data-choice') === 'i111') {

      fixAnswer($(this).text());
      createMessage(i111.messages);
      createChoice(i111.choices, 'i111');

    } else if ($(this).attr('data-choice') === 'i1111') {

      fixAnswer($(this).text());
      createMessage(i1110.messages);
      $('.sharing-economy').show();

    } else if ($(this).attr('data-choice') === 'i1112') {

      fixAnswer($(this).text());
      createMessage(i1111.messages);
      $('.sharing-economy').show();

    }

  smoothScrollBottom();
  });
}

function smoothScrollBottom() {
  $("html,body").animate({
    scrollTop: $(document).height()
  }, 1e3);
}

$(document).ready(function() {
  crossroads();
  $('.sharing-economy').hide();
});