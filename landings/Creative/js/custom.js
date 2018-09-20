$(function(){
const search = document.querySelector('.search');
const body = document.querySelector('body');

search.addEventListener('click', function(e)  {
	e.stopPropagation();
	this.classList.add('search--active');
})

body.addEventListener('click', function () {
	search.classList.remove('search--active');
})

	$('.box-members').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	slidesToShow: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 1
			}
		}
		
	]
	

});

$('.quote').slick({
prevArrow: $('.prev2'),
nextArrow: $('.next2'),
slidesToShow: 1

});

$('.sponsors').slick({
	prevArrow: $('.prev3'),
	nextArrow: $('.next3'),
	centerMode: true,
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 768,
			settings: {
			arrows: false,
			centerMode: true,
			slidesToShow: 4,
			}
		},
		{
			breakpoint: 480,
			settings: {
			arrows: false,
			centerMode: true,
			slidesToShow: 1
			}
		}
	]
});

$("body").on('click', '[href*="#prices"]', function(e){
	var fixed_offset = 100;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();


});
});



   


