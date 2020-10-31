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

// ソファー、チェア、机のスライドアップ
const sofaShadow = $(() => {
    $('.item-sofa').on('mouseenter', () => {
        $('.item-sofa').children('.news-about-shadow').slideDown();
    });
    $('.item-sofa').on('mouseleave', () => {
        $('.item-sofa').children('.news-about-shadow').slideUp();
    });
});

const chairShadow = $(() => {
    $('.item-chair').on('mouseenter', () => {
        $('.item-chair').children('.news-about-shadow').slideDown();
    });
    $('.item-chair').on('mouseleave', () => {
        $('.item-chair').children('.news-about-shadow').slideUp();
    });
});

const tableShadow = $(() => {
    $('.item-table').on('mouseenter', () => {
        $('.item-table').children('.news-about-shadow').slideDown();
    });
    $('.item-table').on('mouseleave', () => {
        $('.item-table').children('.news-about-shadow').slideUp();
    });
});

// ボタンを押すとアニメーションが発火
// PC
const target = document.querySelector('.contact-submit');
$(target).on('click', () => {
    target.className = "btn-completed";
    target.children[0].textContent = 'TRANSMISSION COMPLETED';
});
// SP
const spTarget = document.querySelector('.sp-contact-submit');
$(spTarget).on('click', () => {
    spTarget.className = "sp-btn-completed";
    spTarget.children[0].textContent = 'TRANSMISSION COMPLETED';
});
