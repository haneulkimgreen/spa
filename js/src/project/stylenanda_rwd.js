// stylenanda_rwd.js
(function($) {

  // var menu_btn = $('.menu_btn');
  // var menu_btn_off = $('.menu_btn_off');
  // var border_top = $('.border_top');
  // var border_bottom = $('.border_bottom');
  // var border_left = $('.border_left');
  // var border_right = $('.border_right');
  // var modal_menu = $('.modal_menu');

  // // 메뉴 버튼
  // menu_btn.on('click', function(e){
  //   e.preventDefault();
  //   if(menu_btn.hasClass("menu_on") === true){
  //     menu_btn.removeClass('menu_on');
  //     modal_menu.stop().fadeOut();
  //   }else{
  //     menu_btn.addClass('menu_on');
  //     modal_menu.stop().fadeIn();
  //   }
  // });
  // // 메뉴버튼 hover시 효과. 사방 끝 선들
  // menu_btn.on('mouseenter', function(e){
  //   e.preventDefault();
  //   border_top.stop().animate({'height':'20px'});
  //   border_bottom.stop().animate({'height':'20px'});
  //   border_left.stop().animate({'width':'20px'});
  //   border_right.stop().animate({'width':'20px'});
  // });
  // menu_btn.on('mouseleave', function(e){
  //   e.preventDefault();
  //   border_top.stop().animate({'height':'0'});
  //   border_bottom.stop().animate({'height':'0'});
  //   border_left.stop().animate({'width':'0'});
  //   border_right.stop().animate({'width':'0'});
  // });

  // 스크롤 마우스
  var win_h = $(window).height();
  $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
  $('.section').each(function(index){
    $(this).attr("data-index", win_h * index);
  });

  $('.section').on('mousewheel DOMMouseScroll', function(e){
    var sectionPos = parseInt($(this).attr("data-index"));
    if(e.originalEvent.wheelDelta >= 0){
      $("html,body").stop().animate({scrollTop:sectionPos - win_h}, 500, 'easeInCubic');
      return false;
    }else if(e.originalEvent.wheelDelta < 0){
      $("html,body").stop().animate({scrollTop:sectionPos + win_h}, 500, 'easeInCubic');
      return false;
    }
  });
  
})(this.jQuery);