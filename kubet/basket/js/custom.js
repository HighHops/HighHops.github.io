$(function () {


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

	$('.styler').styler();

	$('.toogle-menu').on('click', function (event) {
		event.preventDefault();
		$('.dropdown-content').toggleClass('open');
	});

});

$('#payNow').on('click', function (event) {
	event.preventDefault();
	$('.tab__next__btn').innerHTML = 'Перейти к оплате';
});





$('.tabs a').click(function () {
	$(this).parents('.tab-wrap').find('.tab-count').addClass('hide');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide');
	$(this).parent().addClass('active');
	return false
});

   
