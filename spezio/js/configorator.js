'use strict';

/*AOS.init({
    mirror: true
});*/
$('document').ready(function () {

    
    $(window).scroll(function() {
        // let scroll = $(window).scrollTop();
        // if (scroll >= 980 && scroll < 2400 ) {
        //     $('.header').removeClass('header_black')
        //     $('.header').removeClass('header_black-bg')
        // } else if (scroll >= 9980) {
        //     $('.header').removeClass('header_black')
        //     $('.header').removeClass('header_black-bg')
        // } else if (scroll >= 6000 && scroll < 8000) {
        //     $('.header').addClass('header_black-bg')
        //     $('.header').removeClass('header_black')
        // } else {
        //     $('.header').addClass('header_black')
        //     $('.header').removeClass('header_black-bg')
        // }
        $('.section').each(function (index,item) {
            item = $(this)
            let scroll = $(window).scrollTop();
            if (item.hasClass('section_dark')) {

                if (item.hasClass('product')) {
                    let productOffset = item.offset().top;
                    let productHeight = item.height()
                   if (scroll >= productOffset && scroll < productHeight + productOffset ) {
                         $('.header').removeClass('header_black')
                   } else {
                    $('.header').addClass('header_black')
                   }
                }
                if (item.hasClass('total')) {
                    let totalOffset = item.offset().top;
                    let totaltHeight = item.height()
                   if (scroll >= totalOffset && scroll < totaltHeight + totalOffset ) {
                         $('.header').removeClass('header_black')
                         $('.header').addClass('header_black-bg')
                   } 
                }
                if (item.hasClass('profitability')) {
                    let profitabilityOffset = item.offset().top;
                    let profitabilitytHeight = item.height()
                   if (scroll >= profitabilityOffset && scroll < profitabilitytHeight + profitabilityOffset ) {
                         $('.header').removeClass('header_black')
                         $('.header').addClass('header_black-bg')
                   } else {
                         $('.header').removeClass('header_black-bg')
                   }
                }
                if (item.hasClass('about')) {
                    let aboutilityOffset = item.offset().top;
                    let aboutilitytHeight = item.height()
                   if (scroll >= aboutilityOffset && scroll < aboutilitytHeight + aboutilityOffset ) {
                         $('.header').removeClass('header_black')
                   } 
                }
            }
        })
    });

    (function () {
        var ctrl = $('[data-product-number]');

        ctrl.on('click', function () {
            $('.configurator__circle-item').removeClass('configurator__circle-item_active');
            $(this).addClass('configurator__circle-item_active');
        });
    })();
//hamburger
    (function () {
        var menuBtn = $('[data-js-action="toggle-menu"]');
        menuBtn.on('click', function () {
            $('.hamburger').toggleClass('is-active');
            $('.hamburger_mobile').toggleClass('is-active');
            $('.hamburger-menu').toggleClass('show');
            $('.hamburger-menu').toggleClass('hide');
            $('.header__btn').toggleClass('show');
            $('.header__logo').toggleClass('show'); 
            $('.header__auth-link').toggleClass('show'); 
            $('.header__ctrl-item-icon').toggleClass('show');
            $('.hamburger__text').css('color', '#fff'); 
        $('a').on('click', function (e) {
            $('.hamburger').removeClass('is-active');
            $('.hamburger-menu').removeClass('show');
            $('.hamburger-menu').addClass('hide');
            $('.header__btn').removeClass('show');
            $('.header__logo').removeClass('show'); 
            $('.header__auth-link').removeClass('show'); 
            $('.header__ctrl-item-icon').removeClass('show');

        });
        if ($('.hamburger-menu').hasClass('show')) {
            $('body').css('overflow', 'hidden')
        } else {
            $('body').css('overflow', 'visible')
        }  
            
        });
    })();
    
   
    
    
 
//cursor
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

        $(window).on('load, resize',windowSize);
       
        $('.product__list__link').click(function () {
            $(this).toggleClass('active');
            $('.product__list__link').not($(this)).removeClass('active');
            $('.product__input--hidden').val($(this).val())
        });
        $('.expenses__group__item-food__item').click(function () {
            $(this).children('button').toggleClass('active');
            $(this).children('input').val($(this).children('button').val())
            
        });
        $('.packaging__item').click(function () {
            $(this).children('button').toggleClass('active');
            $(this).children('input').val($(this).children('button').val())
        });
       
        
        
        $('.range').change(function () {
            $(this).parent().next().children().children().removeClass('active');
        });

        $('.packaging__range').change(function () {
            $(this).parent().next().children().removeClass('active');
        });

        $('.color').change(function () {
            $(this).parent().next().children().removeClass('active');
        });

        $('.expenses__group__item-label').click(function (e){
            e.preventDefault();
            $(this).children($('.checbox_fake')).toggleClass('active');
        });
        $('.range-wrapper__label').click(function (e){
            e.preventDefault();
            $(this).children($('.checbox_fake')).toggleClass('active');
        });

        // AVG PRICE
        $('.milk__avg').click(() => {
            $('.milk__output').text(55 + ' ' + '₽');
            $('.milk').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+55+'%, #fbcb8d '+55+'%, #000 25%, #000 100%)'});
            $('.milk').val(55);
        });
        $('.cream__avg').click(() => {
            $('.cream__output').text(33 + ' ' + '₽');
            $('.cream').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+33+'%, #fbcb8d '+33+'%, #000 25%, #000 100%)'});
            $('.cream').val(33);
        });

        $('.micro__avg').click(() => {
            $('.micro__output').text(10 + ' ' + '₽');
            $('.micro').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+10+'%, #fbcb8d '+10+'%, #000 25%, #000 100%)'});
            $('.micro').val(10);
        });
        
        $('.packaging__avg').click(() => {
            $('.packaging__range__output').text(40 + ' ' + '₽');
            $('.packaging__range').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+40+'%, #fbcb8d '+40+'%, #000 25%, #000 100%)'});
            $('.packaging__range').val(40);
        });

        $('.label__avg').click(() => {
            $('.label__output').text(66 + ' ' + '₽');
            $('.label').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+66+'%, #fbcb8d '+66+'%, #000 25%, #000 100%)'});
            $('.label').val(66);
        });

        $('.color__avg').click(() => {
            $('.color__output').text(45 + ' ' + '₽');
            $('.color').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+45+'%, #fbcb8d '+45+'%, #000 25%, #000 100%)'});
            $('.color').val(45);
        });

        $('.costs__avg').click(() => {
            $('.costs__output').text(45 + ' ' + '₽');
            $('.costs').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+45+'%, #fbcb8d '+45+'%, #000 25%, #000 100%)'});
            $('.costs').val(45);
        });
    
});
// animation
function resetWow() {

    $('wow').each(function (item) {

        $(item).removeClass('animated').removeAttr('style');
    });
}

let wow = new WOW(
    {
      mobile: false
    }
  );

  new WOW().init();

// price
  function range() {
    let valMilk = $('.milk').val();
    let valCream= $('.cream').val();
    let valMicro = $('.micro').val();
    let valPackaging = $('.packaging__range').val();
    let valLabel = $('.label').val();
    let valColor = $('.color').val();
    let valCosts = $('.costs').val();

    $('.milk').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+valMilk+'%, #fbcb8d '+valMilk+'%, #000 25%, #000 100%)'});
    $('.cream').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+valCream+'%, #fbcb8d '+valCream+'%, #000 25%, #000 100%)'});
    $('.micro').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+valMicro+'%, #fbcb8d '+valMicro+'%, #000 25%, #000 100%)'});
    $('.packaging__range').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+valPackaging+'%, #fbcb8d '+valPackaging+'%, #000 25%, #000 100%)'});
    $('.label').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+valLabel+'%, #fbcb8d '+valLabel+'%, #000 25%, #000 100%)'});
    $('.color').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+valColor+'%, #fbcb8d '+valColor+'%, #000 25%, #000 100%)'});
    $('.costs').css({'background': '-webkit-linear-gradient(left, #fbcb8d '+valCosts+'%, #fbcb8d '+valCosts+'%, #000 25%, #000 100%)'});
    
    
    $('.milk__output').text($('.milk').val() + ' ' + '₽');
    $('.cream__output').text($('.cream').val() + ' ' + '₽');
    $('.micro__output').text($('.micro').val() + ' ' + '₽');
    $('.packaging__range__output').text($('.packaging__range').val() + ' ' + '₽');
    $('.label__output').text($('.label').val() + ' ' + '₽');
    $('.color__output').text($('.color').val() + ' ' + '₽');
    $('.costs__output').text($('.costs').val() + ' ' + '₽');
}


