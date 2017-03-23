//function autoplay() {
//	$('.slider').slider('next');
//	setTimeout(autoplay, 3000);
//};
$(document).ready(function() {
    $('.slider').slider({interval: 3000, height: 600});
	//$('.carousel.carousel-slider').carousel({fullWidth: true, startHeight: '600px'});
	//setTimeout(autoplay, 3000);
});