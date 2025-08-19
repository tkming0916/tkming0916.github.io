$(function () {

  // MV背景画像ランダム切り替え
  (function() {
    const imageCount = 9;
    const images = [];
    for (let i = 1; i <= imageCount; i++) {
      images.push(`img/photos/img_${i}.jpg`);
    }
    const mv = document.getElementById('js-mv-bg');
    if (!mv) return;
    let idx = Math.floor(Math.random() * images.length);
    function setBg(i) {
      mv.style.backgroundImage = `url('${images[i]}')`;
    }
    setBg(idx);
    setInterval(() => {
      idx = (idx + 1) % images.length;
      setBg(idx);
    }, 4000);
  })();

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  // 画像クリックでモーダル表示
  $('.works-img img').on('click', function() {
    $('#modal-img').attr('src', $(this).attr('src'));
    $('#modal').css('display', 'flex').hide().fadeIn(200); // ここを修正
  });

  // モーダル内のどこをクリックしても閉じる
  $('#modal').on('click', function() {
    $('#modal').fadeOut(200);
    $('#modal-img').attr('src', '');
  });
});
