// video_netflix.js
(function($) {
  // var videoSample = $('#videoSample');
  var video_controller = $('.video_controller');
  var playerPlay = $('.player_play');
  var playerPause = $('.player_pause');
  var playerBack = $('.player_back');
  var playerForward = $('.player_forward');
  var playerQuestion = $('.player_question');
  var playerBubble = $('.player_bubble');
  var playerScreen = $('.player_screen');
  var back_play = $('.back_play');
  var back_pause = $('.back_pause');
  var center_play = $('.center_play');
  var center_pause = $('.center_pause');
  var center_back = $('.center_back');
  var center_forward = $('.center_forward');

  // 재생 버튼
  playerPlay.on('click', function(e){
    e.preventDefault();
    videoSample.play();
    playerPlay.hide();
    playerPause.show();
    back_play.hide();
    back_pause.show();
    center_play.stop().fadeIn(500).fadeOut(500);
    video_controller.addClass('play_con');
  });
  // 정지 버튼
  playerPause.on('click', function(e){
    e.preventDefault();
    videoSample.pause();
    playerPause.hide();
    playerPlay.show();
    back_pause.hide();
    back_play.show();
    center_pause.stop().fadeIn(500).fadeOut(500);
    video_controller.removeClass('play_con');
  });
  // 10초 뒤로 버튼
  playerBack.on('click', function(e){
    e.preventDefault();
    videoSample.currentTime -= 10;
    center_back.stop().fadeIn(500).fadeOut(500);
  });
  // 10초 앞으로 버튼
  playerForward.on('click', function(e){
    e.preventDefault();
    videoSample.currentTime += 10;
    center_forward.stop().fadeIn(500).fadeOut(500);
  });
  // 배경 누르면 재생됨
  back_play.on('click', function(e){
    e.preventDefault();
    videoSample.play();
    back_play.hide();
    back_pause.show();
    playerPlay.hide();
    playerPause.show();
    center_play.stop().fadeIn(500).fadeOut(500);
    video_controller.addClass('play_con');
  });
  // 배경 누르면 정지됨
  back_pause.on('click', function(e){
    e.preventDefault();
    videoSample.pause();
    back_pause.hide();
    back_play.show();
    playerPause.hide();
    playerPlay.show();
    center_pause.stop().fadeIn(500).fadeOut(500);
    video_controller.removeClass('play_con');
  });
  // 키보드 제어
  $(document).keyup(function(e) {
  if (event.keyCode == '37') {
    videoSample.currentTime -= 10;
    center_back.stop().fadeIn(500).fadeOut(500);
  }else if(event.keyCode == '39') {
    videoSample.currentTime += 10;
    center_forward.stop().fadeIn(500).fadeOut(500);
  }else if(event.keyCode == '32') {
    // 스페이스바는 정지, 재생 상태에 따라 다른 효과를 줘야함. 조건에 &&시 계속 중복 또는 오류남. 키코드 32안에서 다시 조건문 해야 오류가 안남.
    if(video_controller.hasClass("play_con") === true){
      // 플레이상태. 플레이상태에서 스페이스바 이므로 정지
      videoSample.pause();
      playerPause.hide();
      playerPlay.show();
      back_pause.hide();
      back_play.show();
      center_pause.stop().fadeIn(500).fadeOut(500);
      video_controller.removeClass('play_con');
    }else{
      // 나머지 이므로 정지상태. 정지상태에서 스페이스바 이므로 플레이
      videoSample.play();
      back_play.hide();
      back_pause.show();
      playerPlay.hide();
      playerPause.show();
      center_play.stop().fadeIn(500).fadeOut(500);
      video_controller.addClass('play_con');
    }
  }
  });

})(jQuery);