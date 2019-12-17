// template_tabrwd_01.js
(function($) {
  var contentBtn01 = $('.content_btn01'),
      contentBtn02 = $('.content_btn02'),
      contentBtn03 = $('.content_btn03'),
      contentBtn04 = $('.content_btn04');
  var contentBox01 = $('#contentBox_01'),
      contentBox02 = $('#contentBox_02'),
      contentBox03 = $('#contentBox_03'),
      contentBox04 = $('#contentBox_04');
  var bannerWrap = $('.banner_wrap');
  var bannerUl = $('.banner_ul');
  var bannerLi = bannerUl.children('li');
  var bannerClone = bannerLi.first().clone(true);
  bannerLi.last().after(bannerClone);
  var bannerLiWidth = bannerLi.outerWidth();
  var bannerLi = bannerUl.children('li');
  // 첫번째 li를 복사한 후 다시 변수지정
  var bannerLiLength = bannerLi.length;
  bannerUl.css({width:bannerLiLength*100+'%'});
  var bannerUlW = bannerUl.innerWidth();
  bannerLi.css({width:bannerUlW/bannerLiLength});
  bannerLiW = bannerLi.innerWidth();

  // 탭메뉴 버튼 클릭시 탭본문 생성, 탭메뉴 버튼 컬러 변경
  contentBtn01.on('click', function(e){
    e.preventDefault();
    contentBox01.show();
    contentBox01.siblings('section').hide();
    $(this).parents('li').addClass('click');
    $(this).parents('li').siblings('li').removeClass('click');
  });
  contentBtn02.on('click', function(e){
    e.preventDefault();
    contentBox02.show();
    contentBox02.siblings('section').hide();
    $(this).parents('li').addClass('click');
    $(this).parents('li').siblings('li').removeClass('click');
  });
  contentBtn03.on('click', function(e){
    e.preventDefault();
    contentBox03.show();
    contentBox03.siblings('section').hide();
    $(this).parents('li').addClass('click');
    $(this).parents('li').siblings('li').removeClass('click');
  });
  contentBtn04.on('click', function(e){
    e.preventDefault();
    contentBox04.show();
    contentBox04.siblings('section').hide();
    $(this).parents('li').addClass('click');
    $(this).parents('li').siblings('li').removeClass('click');
  });

  // 배너
  // timer();
  // var i=0;
  // var interval;

  // function timer(){
  //   var interval=setInterval(function(){slide()},3000);                        
  // }

  // function slide(i){
  //   bannerUl.animate({left:"-=960px"},1000,function(){
  //   $(this).css({"left":0});
  //     bannerUl.append( $("ul").children("li").eq(0) );
  //   });    
  //   current++;
  //   if(current==5)current=0;
  // }
  // function slide(i){
  //  i++;
  //  if(i == 4){
  //    i=0;
  //  };
  //  bannerUl.animate({left:-n*960},1000);

  // }


// var n = 0;
//    function slide(){
//    n++
//    if(n==3){
//        n=0;
//    };
//    bannerUl.animate({"left":-n*500},300);
// }
// setInterval("slide()",2000)



  
})(this.jQuery);