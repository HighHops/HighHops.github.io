$(function () {


	$('.popup-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});
	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});
	
	$('.styler').styler();

	$('.toogle-menu').on('click', function (event) {
		event.preventDefault();
		$('.dropdown-content').toggleClass('open');
	});

	$('#radio4').on('click', function (event) {
		event.preventDefault();
		$('#address').addClass('active');
	});


	$('#radio6').on('click', function (event) {
		event.preventDefault();
		$('#pay__btn').addClass('active');
		$('#next__btn').addClass('unactive');
	});

	$('#radio5').on('click', function (event) {
		event.preventDefault();
		$('#pay__btn').removeClass('active');
		$('#next__btn').removeClass('unactive');
	});
	$('#radio7').on('click', function (event) {
		event.preventDefault();
		$('#pay__btn').removeClass('active');
		$('#next__btn').removeClass('unactive');
	});

	$('#form__phone').on('click', function (event) {
		event.preventDefault();
		$('.tab__next__btn').addClass('valid');
	});

});


$('.tabs a').click(function () {
	$(this).parents('.tab-wrap').find('.tab-count').addClass('hide');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide');
	$(this).parent().addClass('active');
	return false
});

   
