$(document).ready(function() {

	var menu = $('.main');
	var origOffsetY = menu.offset().top;

	function scroll() {
		if ($(window).scrollTop() >= origOffsetY + 100) {
			$('.menu').addClass('sticky');
		} else {
			$('.menu').removeClass('sticky');
		}
	}
	document.onscroll = scroll;

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

	function anim(name, type) {
		$(name).css('opacity', 0);
		$(name).waypoint(function() {
			var typ = "animated " + type;
			$(name).addClass(typ);
		}, { offset: '70%' });
	}

	anim('.plus h1', 'fadeInDown');
	anim('.work h1', 'fadeInDown');
	anim('.rate h1', 'fadeInDown');
	anim('.watch h1', 'fadeInDown');
	anim('.a-ges h1', 'fadeInDown');
	anim('.watch .platforms', 'fadeInDown');
	anim('.rate .rate-anim', 'fadeIn');
	anim('.watch li', 'fadeInLeft');
	anim('.watch .btn', 'fadeInLeft');
	anim('.a-ges .some-as', 'fadeInLeft');
	anim('.a-ges .btn', 'fadeInLeft');

	$('.text h1').addClass('animated fadeInDown');
	$('.text .desc').addClass('animated fadeInDown');
	$('.text .btn').addClass('animated fadeIn');

});

