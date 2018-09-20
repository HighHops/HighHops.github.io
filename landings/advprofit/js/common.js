$(document).ready(function() {

	function heightDet() {
		$(".main").css("height", $(window).height());
	};
	heightDet();
	$(window).resize(function() {
		heightDet();
	});

	$('.hamburger').click(function(){
		element = $('.menu .mobile-menu');
		display = element.css('display');
		if(display == 'none')
			$('.menu .mobile-menu').slideDown(400);
		if(display == 'block')
			$('.menu .mobile-menu').slideUp(400);
	});

	$('.menu .mobile-menu a').click(function(){
		$('.menu .mobile-menu').slideUp(400);
	});



$('.text h1').addClass('animated fadeInDown');
$('.text .desc').addClass('animated fadeInDown');
$('.text .btn').addClass('animated fadeIn');

$(".ways-pay h1").animated("fadeInDown", "fadeOutUp");
$(".plus h1").animated("fadeInDown", "fadeOutUp");
$(".work h1").animated("fadeInDown", "fadeOutUp");
$(".watch h1").animated("fadeInDown", "fadeOutUp");

$(".ways-pay .item").animated("flipInY", "flipOutY");

$(".plus .btn").animated("fadeInLeft", "fadeOutLeft");

$(".watch li").animated("fadeInRight", "fadeOutRight");
$(".watch .btn").animated("fadeInRight", "fadeOutRight");
});

