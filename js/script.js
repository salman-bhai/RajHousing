function init() {
	$(document).ready(function() {
		$('#header').load('header.html');
		$('#footer').load('footer.html');
		$('.materialboxed').materialbox();
		$('.slider').slider({interval: 3000, height: 570});
	});
}