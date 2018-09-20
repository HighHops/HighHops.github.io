$(document).ready(function() {

	var owl_plan = $('.slider-plan').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin: 50,
		nav:false,
		responsive:{
			0:{
				items:1
			}
		}
	});
	var owl_right = $('.slider-right').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin: 50,
		nav:false,
		responsive:{
			0:{
				items:1
			}
		}
	});
	owl_plan.owlCarousel();
	owl_right.owlCarousel();
	$('.next').click(function() {
		owl_plan.trigger('next.owl.carousel');
		owl_right.trigger('next.owl.carousel');
	});
	$('.prev').click(function() {
		owl_plan.trigger('prev.owl.carousel', [300]);
		owl_right.trigger('prev.owl.carousel', [300]);
	});

	var owl = $('.slider_2').owlCarousel({
		loop:true,
		mouseDrag:false,
		margin: 50,
		nav:false,
		responsive:{
			0:{
				items:1
			}
		}
	});
	owl.owlCarousel();
	$('.sl-2-next').click(function() {
		owl.trigger('next.owl.carousel');
	});
	$('.sl-2-prev').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	});

	var owl_partners = $('.partners-carousel').owlCarousel({
		loop:true,
		//center:true,
		mouseDrag:false,
		margin: 0,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:5
			}
		}
	});
	owl_partners.owlCarousel();
	$('.p-next').click(function() {
		owl_partners.trigger('next.owl.carousel');
	});
	$('.p-prev').click(function() {
		owl_partners.trigger('prev.owl.carousel', [300]);
	});

	var owl_reviews = $('.slider-reviews').owlCarousel({
		loop:false,
		mouseDrag:false,
		margin: 70,
		nav:false,
		responsive:{
			0:{
				items:1
			}
		}
	});
	owl_reviews.owlCarousel();
	$('.rev-next').click(function() {
		owl_reviews.trigger('next.owl.carousel');
	});
	$('.rev-prev').click(function() {
		owl_reviews.trigger('prev.owl.carousel', [300]);
	});


	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'js/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});

	var menu = $('.plan');
	var origOffsetY = menu.offset().top;

	function scroll() {
		if ($(window).scrollTop() >= origOffsetY || ($(window).width() < 1200)) {
			$('.head-main').addClass('sticky');
		} else {
			$('.head-main').removeClass('sticky');
		}
	}
	scroll();
	document.onscroll = scroll;
	$(window).resize(function() {
    scroll();
  });
	
	$('.go_to').click( function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 83.49}, 900);
		}
		return false;
	});

    var element = $('.more-info-pack');
    element.on('click', function(){
    	display = $(this).parent('.top-part').parent('.some-pack').find('.bottom-part').css('display');
    	if(display == 'none') {
    		$('.bottom-part').slideUp(400);
    		$('.more-info-pack svg').removeClass('rotate');
    		$('.more-info-pack p').html('подробнее');
    		$(this).parent('.top-part').parent('.some-pack').find('.bottom-part').slideDown(400);
    		$(this).parent('.top-part').parent('.some-pack').find('svg').addClass('rotate');
    		$(this).parent('.top-part').parent('.some-pack').find('.more-info-pack p').html('свернуть');
    	}

    	if(display == 'block') {
    		$(this).parent('.top-part').parent('.some-pack').find('.bottom-part').slideUp(400);
    		$(this).parent('.top-part').parent('.some-pack').find('svg').removeClass('rotate');
    		$(this).parent('.top-part').parent('.some-pack').find('.more-info-pack p').html('подробнее');
    	}
    });

    $('.help-text').mouseover(function() {
    	$('.help-block svg path').addClass('svg-hr');
    });
    $('.help-text').mouseout(function() {
    	$('.help-block svg path').removeClass('svg-hr');
    });

  });
function stats_before(block_id, new_class, that) {
	var id = "#" + block_id + " .g-line";
	var btn = "#" + block_id + " .btn-2"
	$(id).removeClass(new_class);
	$(btn).removeClass("active");
	$(that).addClass('active');
}
function stats_after(block_id, new_class, that) {
	var id = "#" + block_id + " .g-line";
	var btn = "#" + block_id + " .btn-2"
	$(id).addClass(new_class);
	$(btn).removeClass("active");
	$(that).addClass('active');
}

$('.hamburger').click(function(){
	element = $('.mobile-menu');
	display = element.css('display');
	if(display == 'none')
		$('.mobile-menu').slideDown(400);
	if(display == 'block')
		$('.mobile-menu').slideUp(400);
});

$('.mobile-menu a').click(function(){
	$('.mobile-menu').slideUp(400);
});

function show_popap (id_popap) {
	var id = "#" + id_popap;
	$(id).addClass("active");
	$('body').addClass("no_scroll");
}

function hide_popap () {
	$('.popap').removeClass("active");
	$('body').removeClass("no_scroll");
}