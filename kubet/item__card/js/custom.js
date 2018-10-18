$(function(){

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


	$('.popup-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});
	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});

	$('.basket__main__btn').on('click', function (event) {
		event.preventDefault();
		$('.basket__btn').addClass('unactive');
		$('.basket__more').addClass('active');
	});
	
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

});















