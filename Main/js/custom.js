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

	$('.slider-cards').slick({
		prevArrow: $('.prev2'),
		nextArrow: $('.next2'),
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4
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
	

		

	
});

   


