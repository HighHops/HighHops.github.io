$(function(){
	$(document).ready(
		function () {
			$('.popup-btn').on('click', function (event) {
				event.preventDefault();
				$('.popup').fadeIn();
			});
			$('.popup-close').on('click', function (event) {
				event.preventDefault();
				$('.popup').fadeOut();
			});
		}
	);
	
	$('.toogle-menu').on('click', function (event) {
		event.preventDefault();
		$('.dropdown-content').toggleClass('open');
	});

	$('.accordion__head').on('click', function () {
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});

	$('.item-slider').slick({
		fade: true,
		arrows: false,
		asNavFor: '.item-slider2'

	});
	$('.item-slider2').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToShow: 5,
		asNavFor: '.item-slider',
		focusOnSelect: true,
		 responsive: [
			{
				breakpoint: 1140,
				settings: {
					slidesToShow: 7
				}
			},
			 {
				 breakpoint: 800,
				 settings: {
					 slidesToShow: 4
				 }
			 },
			 {
				breakpoint: 710,
				settings: {
					slidesToShow: 5
				}
			 },
			 {
				 breakpoint: 350,
				 settings: {
					 slidesToShow: 3
				 }
			 }
	
		]
	});

	const inner = document.querySelector('.tabs__label__hover');

	inner.addEventListener('mouseover', event => {
		inner.parentNode.style.cssText = `
        border: 1px solid #feed7a
		`
		inner.addEventListener('mouseleave', event => {
			inner.parentNode.style.cssText = `
        border: 1px solid #fff
		`

		});	
		
	});



});


   


