$(function(){



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

	$(document).ready(
		function () {
			$('.popup-btnTwo').on('click', function (event) {
				event.preventDefault();
				$('.popupTwo').fadeIn();
			});
			$('.popupTwo-close').on('click', function (event) {
				event.preventDefault();
				$('.popupTwo').fadeOut();
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
	

});



   
$('.add').click(function () {
	$(this).prev().val(+$(this).prev().val() + 1);
});
$('.sub').click(function () {
	if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});