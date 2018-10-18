$(function(){

	$('.basket__main__btn1').on('click', function (event) {
		event.preventDefault();
		$('.basket__btn1').addClass('unactive');
		$('.basket__more1').addClass('active');
	});

	$('.basket__main__btn2').on('click', function (event) {
		event.preventDefault();
		$('.basket__btn2').addClass('unactive');
		$('.basket__more2').addClass('active');
	});
	$('.basket__main__btn3').on('click', function (event) {
		event.preventDefault();
		$('.basket__btn3').addClass('unactive');
		$('.basket__more3').addClass('active');
	});

	
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


	$('#item-slider').slick({
		fade: true,
		arrows: false,
		asNavFor: '#item-slider2'

	});
	$('#item-slider2').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToShow: 5,
		asNavFor: '#item-slider',
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
	$('#item-slider3').slick({
		fade: true,
		arrows: false,
		asNavFor: '#item-slider4'

	});
	$('#item-slider4').slick({
		prevArrow: $('.prev2'),
		nextArrow: $('.next2'),
		slidesToShow: 5,
		asNavFor: '#item-slider3',
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
	$('#item-slider5').slick({
		fade: true,
		arrows: false,
		asNavFor: '#item-slider6'

	});
	$('#item-slider6').slick({
		prevArrow: $('.prev3'),
		nextArrow: $('.next3'),
		slidesToShow: 5,
		asNavFor: '#item-slider5',
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



	$('.accordion__head').on('click', function () {
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});



});


