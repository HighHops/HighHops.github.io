$(function () {

  $('.stock-slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.stock-slider__btn'),
    infinite: true,
    dots: true,
    dotsClass: "my-dots",
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.reviews-slider').slick({
    prevArrow: $('.prev3'),
    nextArrow: $('.next3'),
    infinite: true,
    dots: true,
    dotsClass: "my-dots2",
    slidesToShow: 1,
    slidesToScroll: 1
  });

  (function () {
    if (window.matchMedia('(min-width: 767px)').matches) {

      $('.slider-cards').on('init afterChange reInit  ', function (event, slick, currentSlide, nextSlide) {
        var $this = $(this);
        var slides = $this.find('.slider-cards__item');
        var lastSlides = $this.find('.slick-active');

        $this.removeClass('is-active');
        slides.removeClass('slider-cards__item_last-left slider-cards__item_last-right');
        $(lastSlides[0]).addClass('slider-cards__item_last-left');
        $(lastSlides[3]).addClass('slider-cards__item_last-right');
        slides.css('opacity', 0);
      });

      $('.slider-cards').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var $this = $(this);
        var slides = $this.find('.slider-cards__item');
        var lastSlides = $this.find('.slick-active');

        $this.addClass('is-active');

        slides.css('opacity', 1);

      });
    }
  })();

  $('.slider-cards').slick({
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    infinite: true,
    dots: true,
    dotsClass: "my-dots2",
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
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


  $('.seo-info').niceScroll({
    cursorcolor: '#242424',
    cursoropacitymin: '1',
    background: "#eae8e9"
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



   

