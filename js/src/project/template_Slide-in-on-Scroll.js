// template_Slide-in-on-Scroll.js
(function($) {
  var wrap = $('.wrap');
  var sec01_img = $('.sec01_img');
  var sec01_p01 = $('.sec01_p01');
  var sec01_p02 = $('.sec01_p02');
  var sec02_img_wrap = $('.sec02_img_wrap');
  var sec02_img = $('.sec02_img');
  var sec02_img_offtop = sec02_img.offset().top;
  var circle = $('.circle');
  var circleIn = circle.children('circle');
  var circle_offtop = circle.offset().top;
  var circleIn_offtop = circleIn.offset().top;
  var sec03_img01_wrap = $('.sec03_img01_wrap');
  var sec03_img02_wrap = $('.sec03_img02_wrap');
  var sec03_img02_wrap_offtop = sec03_img02_wrap.offset().top;
  var section_04 = $('.section_04');
  var section_04_offtop = section_04.offset().top;
  var circle_02 = $('.circle_02');
  var circleIn_02 = circle_02.children('circle');
  var circleIn_02_offtop = circle_02.children('circle').offset().top;
  var sec05_img01 = $('.sec05_img01');
  var sec05_img01_offtop = sec05_img01.offset().top;
  var section_06 = $('.section_06');
  var section_06_offtop = section_06.offset().top;


  // section01의 컨텐츠. 시작하자마자, 새로고침 했을때 효과
  sec01_img.delay(500).addClass('animate_img');
  sec01_p01.children('p').animate({top: '0'}, 1000);
  sec01_p02.children('p').animate({top: '0'}, 1000);

  $(window).on('scroll', function(){

    var winscrollTop = $(this).scrollTop();

    if( winscrollTop >= circleIn_offtop-500 ){
      circleIn.addClass('animate');
    }

    if( winscrollTop >= sec02_img_offtop-600 ){
      sec02_img_wrap.addClass('animate_img');
      sec02_img.addClass('animate_img');
      wrap.removeClass('animate_back');
    }

    if( winscrollTop >= sec03_img02_wrap_offtop-700 ){
      sec03_img01_wrap.addClass('animate_img');
      sec03_img02_wrap.addClass('animate_img');
      wrap.addClass('animate_back');
    }

    if( winscrollTop >= section_04_offtop-300 ){
      wrap.removeClass('animate_back');
    }

    if( winscrollTop >= circleIn_02_offtop-300 ){
      circleIn_02.addClass('animate');
    }

    if( winscrollTop >= sec05_img01_offtop-400 ){
      sec05_img01.animate({left: '170px'}, 500);
    }

    if( winscrollTop >= section_06_offtop-300 ){
      section_06.addClass('animate');
    }

    // console.log(section_06_offtop);
    // console.log(winscrollTop);
  });

  // 로고 효과
  var pathes = $('#headBox').find('path');
    pathes.each(function( i, path ) {
        var total_length = path.getTotalLength();
        path.style.strokeDasharray = total_length + " " + total_length;
        path.style.strokeDashoffset = total_length;
        $(path).animate({
            "strokeDashoffset" : 0
        }, 1000);
    });

  // setTimeout(function() { 
  //   top_txt_01.stop().animate({marginBottom:'180px'}, 1000);
  //   top_txt_02.stop().animate({marginBottom:'30px'}, 1000);
  // }, 500);




// $(window).on('scroll', function(){
// var winscrollTop = $(this).scrollTop();

//   if( section02_top >= winscrollTop >= section01_top+400 ){
//     con_02.animate({left:'501px'}, 500);
//   }else if( section03_top >= winscrollTop && winscrollTop > section02_top+200 ){
//     con_03.animate({left:'500px'}, 500);
//   }
// });
  // var winscrollTop = $("html, body").scrollTop();
  // var asdasd = content_section_01.height();
  // console.log(asdasd);
  // var aofftop = content_section_01.offset().top;
  // var winscrollTop = $(window).scrollTop();
  // console.log(winscrollTop);
  // 위에 주석 필요없는거 삭제, 스크롤 기준 조금-로 정리



  


})(this.jQuery);
  
