
'use strict';

/*AOS.init({
    mirror: true
});*/
$('document').ready(function () {
    //rating 
    $('.rating__input').on('click', function () {
        let rating = $(this).val()
        console.log(rating)
        $('.feedback__rating__number').text(rating)
    });
    $('.btn__feedback__submit').on('click', function(e) {
        e.preventDefault();
    });
    // breadcrumbs
    $('.breadcrumbs__item__link').click(function () {
        $(this).toggleClass('active');
        $('.breadcrumbs__item__link').not($(this)).removeClass('active');
    });

    //slider 

    $('.card__slider--big').slick({
        arrows: false,
        asNavFor: ".card__slider--small"
    });

    $('.card__slider--small').slick({
        slidesToShow: 3,
        asNavFor: ".card__slider--big",
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.card__item__count__click--minus').on('click', function () {
        let quantity = $('.quantity__number').text()
        let price = $('.card__item__basket__product-price__number').text()
        if ( quantity > 1) {
            quantity--;
        } else {
            quantity = 1;
        }
        $('.quantity__number').text(quantity);
        $('.quantity__number__input').val(quantity);
        let totalPrice = $('.card__item__count__price--number').text()
        $('.card__item__count__price--number').text(totalPrice  - price );
        $('.card__item__count__price--number__input').val(totalPrice - price);
        if (quantity === 1 ) {
            $('.card__item__count__price--number').text(price);
            $('.card__item__count__price--number__input').val(price)
        }
        
      
       
    });

    $('.card__item__count__click--plus').on('click', function () {
        let quantity = $('.quantity__number').text();
        let price = $('.card__item__basket__product-price__number').text()
        quantity++;
        $('.quantity__number').text(quantity)
        $('.quantity__number__input').val(quantity)
        $('.card__item__count__price--number').text(quantity  * price );
        $('.card__item__count__price--number__input').val(quantity  * price)
    });
   



    (function () {
        var menuBtn = $('[data-js-action="toggle-menu"]');
        menuBtn.on('click', function () {
            if ($('.main-menu_active').length) {
                $('.main-menu .aos-animate').removeClass('aos-animate');
            } else {
                $('.main-menu .aos-init').addClass('aos-animate');
            }
            $('.hamburger').toggleClass('is-active');
            $('.hamburger_mobile').toggleClass('is-active');
            $('.hamburger-menu').toggleClass('show');
            $('.hamburger-menu').toggleClass('hide');
            $('.cursor').toggleClass('cursor_black');
            $('.header__btn').toggleClass('show');
            $('.header__logo').toggleClass('show'); 
            $('.header__auth-link').toggleClass('show'); 
            $('.header__ctrl-item-icon').toggleClass('show');
            $('.slide-ctrl').toggleClass('slide-ctrl_black');  
        $('a').on('click', function (e) {
            $('.hamburger').removeClass('is-active');
            $('.hamburger-menu').removeClass('show');
            $('.hamburger-menu').addClass('hide');
            $('.cursor').toggleClass('cursor_black');
            $('.header__btn').removeClass('show');
            $('.header__logo').removeClass('show'); 
            $('.header__auth-link').removeClass('show'); 
            $('.header__ctrl-item-icon').removeClass('show');
            $('.slide-ctrl').removeClass('slide-ctrl_black');
        });
     
            
        });
    })();
    
    $(window).on('mousemove', function (e) {
        $('.cursor').css({
            top: e.pageY - 13,
            left: e.pageX - 13
        });
    }).on('mousedown', function () {
        $('.cursor').addClass('cursor_down');
    }).on('mouseup', function () {
        $('.cursor').removeClass('cursor_down');
    }).on('mouseleave', function () {
        $('.cursor').css('opacity', 0);
    }).on('mouseenter', function () {
        $('.cursor').css('opacity', 1);
    });

    $('[data-js-role="cursor-pointer"]').on('hover mouseenter', function () {
        $('.cursor').addClass('cursor_pointer');
    }).on('blur mouseleave', function () {
        $('.cursor').removeClass('cursor_pointer');
    });

    $('[data-js-hover="gold"]').on('hover mouseenter', function () {
        $('.cursor').addClass('cursor_gold');
    }).on('blur mouseleave', function () {
        $('.cursor').removeClass('cursor_gold');
    });

    $('[data-js-hover="black"]').on('hover mouseenter', function () {
        $('.cursor').addClass('cursor_black');
    }).on('blur mouseleave', function () {
        $('.cursor').removeClass('cursor_black');
    });

   
    //spoiler in hamburger - mobile

        function windowSize(){
            if ($(window).width() <= '1300'){

                $('.hamburger-menu_list-title').addClass('spoiler');
                $('.hamburger-menu-bottom').children().removeClass('spoiler');

                $('.hamburger-menu_list-title').click(function(event) {  

                 if ($(this).parent()[0] != $('.hamburger-menu-bottom')[0] ) {
                    $(this).toggleClass('active').nextAll().slideToggle(300);
                 }        
                });
                
            } else {
                $('.hamburger-menu_list-title').removeClass('spoiler');
               
            }
            if ($(window).width() <= '1200') {
               
                $('.hamburger-menu_list-title').click(function (e) {
                    if ($(this).parent()[0] != $('.hamburger-menu-bottom')[0]) {
                        if ($('.hamburger-menu_list').hasClass('one')) {
                            $('.hamburger-menu_list-title').not($(this)).removeClass('active');
                            $('.hamburger-menu_list-title').not($(this)).not($('.hamburger-menu-bottom').children()).nextAll().slideUp(300);
                        } 
                    } else {
                        $('.hamburger--slider').removeClass('is-active');
                        
                    }
                    
                });
                $('.header__logo_black').addClass('isnt-active');
                $('.icon-cart').addClass('isnt-active');
                $('.icon-search').addClass('isnt-active');

                const menuBtn = $('[data-js-action="toggle-menu"]');

                menuBtn.click(function (e) {
                    $('.header__logo_black').toggleClass('isnt-active');
                    $('.icon-cart').toggleClass('isnt-active');
                    $('.icon-search').toggleClass('isnt-active');
                } );

            }

            if ($(window).width() <= '480') {
                $('.about__decor-element').removeClass('layer');
                $('.about__name').removeClass('layer');
                $('.services__name').removeClass('layer');
                $('.configurator__name').removeClass('layer');
                $('.contacts__name').removeClass('layer');
                
            }
            
        }
        $('.merchandise__item').on('click', function(e) {
            e.preventDefault()
        })

        $(window).on('load',windowSize);
       
   
    
});


