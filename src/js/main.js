$(document).ready(function(){
    //Slick Slider Promo
    $('.promo__slider').slick({
        speed: 1200,
        infinite: true,
        arrows: true,
        dots: true,
        cssEase: 'ease',
        appendArrows: $('.promo__nav'),
        appendDots: $('.promo__dots'),
        prevArrow: '<div class="promo__left"><img src="img/promo-slider-left.png" alt=""></div>',
        nextArrow: '<div class="promo__right"><img src="img/promo-slider-right.png" alt=""></div>'

    });

    //Mobile Menu
    // let buttonMenuMobile = $('.namburger'),
    //     buttonMenuClose = $('.menu__close'),
    //     menu = $('.menu');

    const showMobileMenu = (element) => {
        element.on('click', function() {
            $('.menu').toggleClass('menu_active');
        })
    }

    showMobileMenu($('.hamburger'));
    showMobileMenu($('.menu__close'));


});