$(function(){

    $('.header__slider').slick({
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="Arrow Left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="Arrow Right"></img>',
        asNavFor: '.slider-dotshead'
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        dots: true,
        // centerMode: true,
        focusOnSelect: true
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="Arrow Left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="Arrow Right"></img>',
        asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="Arrow Left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="Arrow Right"></img>'
    })
});