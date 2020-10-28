// ページ遷移
const body = document.querySelector('body')
body.animate({
    opacity: [0, 1]
}, 1500)

// ハンバーガーをクリックした時の処理

$('.sp-hamburger').on('click', () => {
    // ここがハンバーガーの線の部分
    $(event.currentTarget).toggleClass('active');
    // ここからプルダウンメニュー
    if ($('.sp-header-menu').css('display') === 'none') {
        $('.sp-header-menu').slideDown();
    } else {
        $('.sp-header-menu').slideUp();
    }
});
