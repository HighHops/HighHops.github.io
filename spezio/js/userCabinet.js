
'use strict';

/*AOS.init({
    mirror: true
});*/
$('document').ready(function () {
    
    $('.user__offers__item').on('click', function(e) {
        e.preventDefault();
    })
    //data filter 
    $('.user__orders__titles__item-data').on('click', function () {
        $(this).toggleClass('active');
    });
   //rating 
   $('.rating__input').on('click', function ( ) {
    //    
        let ratingValue = $(this).val();
        $(this).prevAll('span').text(ratingValue);
   });
   // tabs 

   $('.user__tabs-trggier__item').on('click', function (e) {
        e.preventDefault();

       let tabsLinks = $('.user__tabs-trggier__item');
       let tabsContent = $('.user__tabs-content__item');
       let thisTabLink = $(this);

       $(tabsLinks).not(thisTabLink).removeClass('user__tabs-trggier__item--active');
       $(tabsContent).removeClass('user__tabs-content__item--active');

       $(this).addClass('user__tabs-trggier__item--active');
       $(thisTabLink.attr('href')).addClass('user__tabs-content__item--active')
   });
   // user info spoilers 
   $('.user__info__spoiler__title').on('click', function () {
        let thisTitle = $(this) 
        $(thisTitle).toggleClass('active');
        $(thisTitle).next().slideToggle();
        $(thisTitle).parent().toggleClass('active');
   });
   // user info sub spoilers
   $('.user__info__subspoiler__title').on('click', function () {
        let thisTitle = $(this) 
        $(thisTitle).toggleClass('active');
        $(thisTitle).next().slideToggle();
   });

    //    user orders spoiler 

   $('.user__orders-spoilers__item-title').on('click', function () {
       let thisTitle = $(this)
       $(thisTitle).parent().toggleClass('active');
       $(thisTitle).toggleClass('active');
       $(this).next().slideToggle();
       
       
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


