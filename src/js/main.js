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

    //Slick Slider Solutions

    $('.solutions-slider__wrapper').slick({
        speed: 1200,
        fade: true,
        infinite: true,
        arrows: true,
        dots: true,
        cssEase: 'ease',
        // appendArrows: $('.solutions-slider__nav'),
        appendDots: $('.solutions-slider__dots'),
        customPaging: function(slider, i) { 
            return '<button class="solutions-slider__dot">' + $(slider.$slides[i]).attr('title') + '</button>';
        },
        prevArrow: '<div class="solutions-slider__left"><img src="img/solutions-slider-left.png" alt=""></div>',
        nextArrow: '<div class="solutions-slider__right"><img src="img/solutions-slider-right.png" alt=""></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]

    });

    //Mobile Menu

    const showMobileMenu = (element) => {
        element.on('click', function() {
            $('.menu').toggleClass('menu_active');
        })
    }

    showMobileMenu($('.hamburger'));
    showMobileMenu($('.menu__close'));


});