// video_netflix.js
(function($) {
  // var videoSample = $('#videoSample');
  var playerPlay = $('.player_play');
  var playerPause = $('.player_pause');
  var playerBack = $('.player_back');
  var playerForward = $('.player_forward');
  var playerQuestion = $('.player_question');
  var playerBubble = $('.player_bubble');
  var playerScreen = $('.player_screen');

  playerPause.on('click', function(e){
    e.preventDefault();
    videoSample.pause();
    playerPause.hide();
    playerPlay.show();
  });

  playerPlay.on('click', function(e){
    e.preventDefault();
    videoSample.play();
    playerPlay.hide();
    playerPause.show();
  });

})(jQuery);