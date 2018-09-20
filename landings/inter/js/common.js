$(document).ready(function() {

    function resize() {
		var header = $('header .desktopMenu');
        var widthHead = $(window).width();
        console.log(widthHead);
		if (widthHead < 1200) {
            $(header).css({'display':'none'});
            $(header).addClass('mobileMenu');
		} else {
            $(header).css({'display':'flex'});
            $(header).removeClass('mobileMenu');
		}
	}
	resize();

	$(window).resize(function() {
        resize();
    });

    $('.hamburger').click(function(){
    	element = $('header .desktopMenu');
    	display = element.css('display');
    	if(display == 'none')
    		$('header .desktopMenu').slideDown(400);
    	else
    		$('header .desktopMenu').slideUp(400);
    });

    $('header .desktopMenu a').click(function(){
    	$('header .desktopMenu').slideUp(400);
    });

    $('.completedProjectsSlider').owlCarousel({
        margin: 0,
        dots: true,
        navText: [$('.am-prev2'),$('.am-next2')],
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            1390:{
                items:1,
                nav: true,
            }
        }
    });

    $('.main-slider').owlCarousel({
        margin: 0,
        dots: false,
        navText: [$('.am-prev'),$('.am-next')],
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            1390:{
                items:1,
                nav: true,
            }
        }
    });

});