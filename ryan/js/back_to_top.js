// 判断位置控制 返回顶部的显隐
var backTo = $(".back-to-top");
var backHeight = $(window).height() - 1100 + 'px'; // -218px
var backHeightActive = $(window).height() - 1000 + 'px'; // -118px

$.scrollto = function (scrolldom, scrolltime) {
    $(scrolldom).click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      backTo.css('transition', 'all 1s ease-in-out');
      backTo.css('top', backHeightActive);
      
      $('html, body').animate({
        scrollTop: $('body').offset().top
      }, scrolltime);
      
      return false;
    });
  };
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 700 && backTo.css('top') === '-900px') {
      backTo.css('transition', 'all 1s ease-in-out');
      backTo.css('top', backHeight);
    }
    else if ($(window).scrollTop() <= 700 && backTo.css('top') !== '-900px') {
      backTo.css('transition', 'all .3s ease-in-out');
      backTo.css('top', '-900px');
    }
  });

  // 启用
  $.scrollto(".back-to-top", 800);
