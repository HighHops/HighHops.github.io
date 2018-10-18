$(function () {

	$('.things__text').niceScroll({
		cursorcolor: '#242424',
		cursoropacitymin: '1',
		background: "#eae8e9"
	});


	$('.styler').styler();
	
	$('.tabs a').click(function () {
		$(this).parents('.tab-wrap').find('.tab-count').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		$('.paginator__slider').slick('setPosition');
	});	
	

	var slider = $("#slider-range2");

	var a = function () {
		if (slider.slider("instance")) {
			slider.slider('value', 1);
			console.log('set value');
		} else {
			console.log('ERROR: cannot set value prior to initialization');
		}
	}

	var b = function () {
		slider.slider();
		console.log('initialized');
	}

	a();
	b();
	a();


	$('#slider2').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		dotsClass: "my-dots2",
		asNavFor: '#slider'
	});

	$('#slider').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		arrows: true,
		dots: true,
		dotsClass: "my-dots2",
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '#slider2'
	});


	$('.stock-slider').slick({
		prevArrow: $('.stock-slider__prev'),
		nextArrow: $('.stock-slider__next'),
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		dotsClass: "my-dots",
		autoplaySpeed: 5000,
	});

	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 100000,
		values: [0, 100000],
		slide: function (event, ui) {
			$("#amount").val(ui.values[0]);
			$("#amount2").val(ui.values[1]);
		}
	});
	$("#slider-range2").slider({
		range: true,
		min: 0,
		max: 100000,
		values: [0, 100000],
		slide: function (event, ui) {
			$("#amount-mobile").val(ui.values[0]);
			$("#amount-mobile2").val(ui.values[1]);
		}
	});

	$("#amount-mobile").val($("#slider-range2").slider("values", 0));
	$("#amount-mobile2").val($("#slider-range2").slider("values", 1));

	$("#amount").val($("#slider-range").slider("values", 0));
	$("#amount2").val($("#slider-range").slider("values", 1));



	
	$('.toogle-menu').on('click', function (event) {
		event.preventDefault();
		$('.dropdown-content').toggleClass('open');
	});
	$('.sidebar__title').on('click', function (event) {
		event.preventDefault();
		$('.filter').toggleClass('open');
	});
	$('.sidebar__title').on('click', function (event) {
		event.preventDefault();
		$('.sidebar__title-img').toggleClass('open');
	});



	$('.popup-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});
	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});

	$('.accordion__head').on('click', function () {
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});


	
});


