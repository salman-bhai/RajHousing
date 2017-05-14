var scrolling = false;

function toggleScroll(){
	scrolling = !scrolling;
}

$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()-$('.header').height()) {
       $('.header').addClass('header-fixed').addClass('orange').addClass('z-depth-1')
    }
    else {
       $('.header').removeClass('header-fixed').removeClass('orange').removeClass('z-depth-1');
    }

    // TODO: Implement autoscroll

 //    if($(window).scrollTop() > 0 && $(window).scrollTop() <= 10 && !scrolling){
 //    	toggleScroll();
	// 	$('html, body').animate({scrollTop: $(window).height()}, 300, function(){toggleScroll();});
	// }
 //    else if($(window).scrollTop() < $(window).height() && $(window).scrollTop() > $(window).height()-10 && !scrolling){
 //    	toggleScroll();
	// 	$('html, body').animate({scrollTop: 0}, 300, function(){toggleScroll();});
	// }

    if($(window).scrollTop() >= $('.why-us').offset().top - $('.why-us').height()){
	    $('.why-us .count-data').each(function(){
			increement($(this));
		});
	}

});

function increement(element){
	var limit = parseInt(element.attr('data-count')),
	    c     = parseInt(element.html());
	if(c<limit){
		element.html(c+1);
		setTimeout(function(){increement(element);}, 5);
	}
}


function init(){
	var slider = 0;
	setInterval(function(){
		$('.lpslider li:nth-child(1)').removeClass('active');
		$('.lpslider li:nth-child(2)').removeClass('active');
		$('.lpslider li:nth-child(' + slider+1 + ')').addClass('active');
		slider = (slider+1)%2;
	}, 500);
	$('.slider').slider();
	$('.parallax').parallax();
}