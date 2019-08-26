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
  var back_play = $('.back_play');
  var back_pause = $('.back_pause');

  // 재생 버튼
  playerPlay.on('click', function(e){
    e.preventDefault();
    videoSample.play();
    playerPlay.hide();
    playerPause.show();
    back_play.hide();
    back_pause.show();
  });
  // 정지 버튼
  playerPause.on('click', function(e){
    e.preventDefault();
    videoSample.pause();
    playerPause.hide();
    playerPlay.show();
    back_pause.hide();
    back_play.show();
  });
  // 10초 뒤로 버튼
  playerBack.on('click', function(e){
    e.preventDefault();
    videoSample.currentTime -= 10;
  });
  // 10초 앞으로 버튼
  playerForward.on('click', function(e){
    e.preventDefault();
    videoSample.currentTime += 10;
  });
  // 배경 누르면 재생됨
  back_play.on('click', function(e){
    e.preventDefault();
    videoSample.play();
    back_play.hide();
    back_pause.show();
    playerPlay.hide();
    playerPause.show();
  });
  // 배경 누르면 정지됨
  back_pause.on('click', function(e){
    e.preventDefault();
    videoSample.pause();
    back_pause.hide();
    back_play.show();
    playerPause.hide();
    playerPlay.show();
  });

})(jQuery);