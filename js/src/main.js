// main.js
(function($) {
  var htmlBtn = $('.html_btn'),
      cssBtn = $('.css_btn'),
      jsBtn = $('.js_btn'),
      exBtn = $('.ex_btn');
  var html_content = $('.html_content'),
      css_content = $('.css_content'),
      js_content = $('.js_content'),
      ex_content = $('.ex_content');
  htmlBtn.on('click', function(e){
    e.preventDefault();
    html_content.show();
    html_content.siblings('div').hide();
    $(this).addClass('click');
    $(this).siblings('button').removeClass('click');
  });
  cssBtn.on('click', function(e){
    e.preventDefault();
    css_content.show();
    css_content.siblings('div').hide();
    $(this).addClass('click');
    $(this).siblings('button').removeClass('click');
  });
  jsBtn.on('click', function(e){
    e.preventDefault();
    js_content.show();
    js_content.siblings('div').hide();
    $(this).addClass('click');
    $(this).siblings('button').removeClass('click');
  });
  exBtn.on('click', function(e){
    e.preventDefault();
    ex_content.show();
    ex_content.siblings('div').hide();
    $(this).addClass('click');
    $(this).siblings('button').removeClass('click');
  });
  

})(this.jQuery);