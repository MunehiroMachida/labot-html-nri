// ページ遷移
const body = document.querySelector('body')
body.animate({
    opacity: [0, 1]
}, 1500)

// ハンバーガーをクリックした時の処理
$(function () {
    $('.sp-hamburger').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });
});
