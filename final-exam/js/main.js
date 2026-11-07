//ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});

//カバー画像カルーセル
$('.cover-slick').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  fade: true,
});

// タブ
$('#smarttab').smartTab({
  enableUrlHash: false,
  autoAdjustHeight: false
});

//スクロールに付随したフェードイン（左方向）
$('.animate__animated').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInLeft');
      this.destroy();
    }
  },
  offset: '60%',
});

//スクロールに付随したフェードイン（右方向）
$('.animate__animated.animate__animated2').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  offset: '60%',
});

//よくある質問のアコーディオンメニュー
$('.accordion-title').on('click', function (e) {
  var content = $(this).next();
  content.slideToggle();
  $(this).find('.triangle').toggleClass('selected');
});
