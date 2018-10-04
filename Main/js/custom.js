$(function(){

	$(document).ready(
		function () {
			$('.seo-info').niceScroll({
				cursorcolor: '#242424',
				cursoropacitymin: '1',
				background: "#eae8e9"
			});
		}
	);

	$(document).ready(
		function () {
			$('.popup-btn').on( 'click', function (event) {
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


	$('.slider-cards').slick({
		prevArrow: $('.prev2'),
		nextArrow: $('.next2'),
		infinite: true,
		dots: true,
		dotsClass: "my-dots2",
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1210,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToScroll: 1,
					slidesToShow: 1
				}
			}
		]
	});

	$('.stock-slider').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.stock-slider__btn'),
		infinite: true,
		dots: true,
		dotsClass: "my-dots",
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.reviews-slider').slick({
		prevArrow: $('.prev3'),
		nextArrow: $('.next3'),
		infinite: true,
		dots: true,
		dotsClass: "my-dots2",
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.accordion__head').on('click', function () {
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});
	

});



   


