$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()-$('.header').height()) {
       $('.header').addClass('header-fixed').addClass('orange').addClass('z-depth-1')
    }
    else {
       $('.header').removeClass('header-fixed').removeClass('orange').removeClass('z-depth-1');
    }
});