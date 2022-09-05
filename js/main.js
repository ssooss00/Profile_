// main-header nav

$(function () {
  $("ul.gnb>li").hover(function () {
    $("ul.sub, .nav-bg").stop().slideDown();
  }, function () {
    $("ul.sub, .nav-bg").stop().slideUp();
  });
});

// mobile menu

$(function () {
  $('#toggle-btn').click(function () {
    // $('#gnb').css('display','block');
    $('#menu').slideDown();
  });
  $('.gnb-close').click(function () {
    // $('#gnb').css('display','none');
    $('#menu').slideUp();
  });

  $('.m-gnb > li').click(function () {
    $(this).find('.m-sub').toggle(function () {
      $(this).find('.m-sub').fadeIn();
      $(this).find('.m-sub').fadeOut();
    });
  });
});




