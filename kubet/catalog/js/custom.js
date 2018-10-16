$(function () {

	$(document).ready(
		function () {
			$('.things__text').niceScroll({
				cursorcolor: '#242424',
				cursoropacitymin: '1',
				background: "#eae8e9"
			});
		}
	);

	$('.styler').styler();

	$('.accordion__head').on('click', function () {
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
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



	$('.tabs a').click(function () {
		$(this).parents('.tab-wrap').find('.tab-count').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		$('.paginator__slider').slick('setPosition');
	});	



	class Pagination {

		constructor(dotsSelector) {
			this.dotsSelector = dotsSelector;

			this.maxLinks = 5;
			this.maxOffset = Math.ceil(this.maxLinks / 2);

			document.querySelector(this.dotsSelector).innerHTML = '';
		}

		generate(currentSlide, countSlides) {

			this.currentSlide = currentSlide + 1;
			this.countSlides = countSlides;

			this.offset_left = this.currentSlide > this.maxOffset;
			this.offset_right = this.currentSlide <= this.countSlides - this.maxOffset;

			if (this.countSlides > this.maxLinks) {

				if (this.currentSlide <= Math.floor(this.countSlides / 2)) {
					this.generateLeftPosition();
				} else if (this.currentSlide > Math.floor(this.countSlides / 2)) {
					this.generateRightPosition();
				}

			} else {
				this.generateDefault();
			}

		}

		generateDot(i, text, className = false, current = false) {

			var dot = document.createElement('li');

			if (className) {
				dot.classList.add(className);
			}

			if (i != '' && this.currentSlide == i) {
				dot.classList.add('active');
			}

			dot.id = i - 1;
			dot.innerText = text;

			document.querySelector(this.dotsSelector).appendChild(dot);
		}

		generateLeftPosition() {

			if (this.currentSlide != 1) {
				for (var i = this.currentSlide - 1; i < this.currentSlide - 1 + this.maxOffset; i++) {
					this.generateDot(i, i, 'dot');
				}
				this.generateDot('', '...');
				this.generateDot(this.countSlides, this.countSlides, 'dot');
			} else {
				for (var i = this.currentSlide; i < this.currentSlide + this.maxOffset; i++) {
					this.generateDot(i, i, 'dot');
				}
				this.generateDot('', '...');
				this.generateDot(this.countSlides, this.countSlides, 'dot');
			}

		}

		generateRightPosition() {

			if (this.currentSlide != this.countSlides) {
				this.generateDot(1, 1, 'dot');
				this.generateDot('', '...');
				for (var i = this.currentSlide - 1; i < this.currentSlide - 1 + this.maxOffset; i++) {
					this.generateDot(i, i, 'dot');
				}

			} else {

				this.generateDot(1, 1, 'dot');
				this.generateDot('', '...');
				for (var i = this.countSlides + 1 - this.maxOffset; i <= this.countSlides; i++) {
					this.generateDot(i, i, 'dot');
				}
			}

		}

		generateDefault() {

			for (var i = 1; i < this.countSlides + 1; i++) {
				this.generateDot(i, i, 'dot');
			}

		}

	}

	function addListeners() {

		var dots = document.querySelectorAll('.dot');
		dots.forEach(function (el) {
			el.addEventListener('click', function () {
				$('.paginator__slider').slick('slickGoTo', el.id);
			});
		});

	}

	$('.paginator__slider').on('init', function (event, slick) {

		var pag = new Pagination('#dots');
		pag.generate(slick.currentSlide, slick.slideCount);

		addListeners();

	});

	$('.paginator__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

		var pag = new Pagination('#dots');
		pag.generate(nextSlide, slick.slideCount);

		addListeners();


	});

	$('#slider2').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '#slider'
	});

	$('#slider').slick({
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		arrows: true,
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


});


