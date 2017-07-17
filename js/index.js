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
	$('.materialboxed').materialbox();
	setInterval(function(){
		$('.lpslider li:nth-child(1)').removeClass('active');
		$('.lpslider li:nth-child(2)').removeClass('active');
		$('.lpslider li:nth-child(' + slider+1 + ')').addClass('active');
		slider = (slider+1)%2;
	}, 500);
	$('.slider').slider();
	$('.parallax').parallax();
	$(".button-collapse").sideNav();
	$("#ongoing-section-0").on('click', function(e){
		type="ongoing";
		displayProjectInfo.bind(this).call();
	});
	$("#ongoing-section-1").on('click', function(e){
		type="ongoing";
		displayProjectInfo.bind(this).call();
	});
	$("#ongoing-section-3").on('click', function(e){
		type="ongoing";
		displayProjectInfo.bind(this).call();
	});
}

function displayProjectInfo(index) {
	id = $(this).attr('id');
	index = id.substr(id.lastIndexOf('-') + 1);
	switch(type){
		case "ongoing":
			project = ongoing_projects[index];
			break;
		case "upcoming":
			project = upcoming_projects[index];
			break;
		case "completed":
			project = completed_projects[index];
			break;
	}
	
	var body = document.createElement('div');
	body.className = 'project-details';
	var contents = document.createElement('div');
	contents.className = "project-details-content";
	var close_b = document.createElement('i');
	close_b.className = "material-icons close-button";
	close_b.innerHTML = "arrow_back";
	// Image
	imgw = $(this).find('img').width();
	imgh = $(this).find('img').height();
	imgt = $(this).find('img').offset().top - $(window).scrollTop();
	imgl = $(this).find('img').offset().left;
	imgLeft = imgl;
	imgTop = imgt;
	var bg_color;
	var img = document.createElement('img');
	img.src = $(this).find('img').attr('src');
	console.log(img.src);
	img.className = "project-img";
	img.addEventListener('load', function(){
		var vibrant = new Vibrant(img);
		var swatches = vibrant.swatches();
		bg_color = swatches['Vibrant'].getHex();
	});
	// Card
	cardw = $(this).width();
	cardh = $(this).height();
	cardt = $(this).offset().top - $(window).scrollTop();
	cardl = $(this).offset().left;
	cardTop = cardt;
	cardLeft = cardl;
	var card = document.createElement('div');
	card.className = "project-card";
	var card_temp = document.createElement('div');
	card_temp.className = "project-card-temp";
	// Card contents
	container = document.createElement('div');
	container.className = "container card-content";
	heading = document.createElement('h3');
	heading.className = "project-card-title";
	heading.innerHTML = project.name;
	details = document.createElement('div');
	details.className = "project-card-details container";
	detail_cont = "<h5 class=\"brown-text light\">PROJECT DETAILS</h5><hr style=\"margin-bottom: 15px;\"><center><div class=\"slickmain\"></div></center><center><div class=\"slickimg\"></div></center><ul class=\"collapsible\" data-collapsible=\"accordion\"><li><div class=\"collapsible-header\"><div style=\"float: left;\" id=\"details-header\"></div><div style=\"float: right;\"><i class=\"material-icons\">import_export</i></div></div><div class=\"collapsible-body\"><span id=\"details-body\"></span></div></li><li><div class=\"collapsible-header\"><div style=\"float: left;\"><i class=\"material-icons\">card_giftcard</i>Offers</div><div style=\"float: right;\"><i class=\"material-icons\">import_export</i></div></div><div class=\"collapsible-body\"><span>Contact Sales for offers</span></div></li></ul><br><center><div id=\"fpl\"></div></center><p class=\"brown-text para\" id=\"details-para\"></p><h5 class=\"brown-text light center\" style=\"padding-top: 20px; padding-bottom: 20px;\"><span class=\"underline\">FEATURES</span></h5><div class=\"row\" id=\"project-features\"></div><h5 class=\"brown-text light center\" style=\"padding-top: 20px; padding-bottom: 20px;\"><span class=\"underline\">AMENITIES</span></h5><div class=\"row\"><div class=\"col s12 m4 l4\" id=\"first-row\"></div><div class=\"col s12 m4 l4\" id=\"second-row\"></div><div class=\"col s12 m4 l4\" id=\"third-row\"></div></div><h5 class=\"brown-text light center\" style=\"padding-top: 20px; padding-bottom: 20px;\"><span class=\"underline\">PROJECT LOCATION</span></h5><div class=\"center\" id=\"iframe-maps\"></div><p class=\"brown-text para\" style=\"font-size: 15px; text-align: center;\" id=\"location\"></p>";
	// card_temp = card;
	$('body').append(body);
	$('.project-details').append(contents);
	$('.project-details').append(close_b);

	$('.project-details-content').append(img);
	$('.project-details-content').append(card_temp);
	
	$('.project-img').css({
		width: imgw,
		height: imgh,
		top: imgt,
		left: imgl,
		position: 'fixed'
	});
	$('.project-card-temp').css({
		width: cardw,
		minHeight: cardh,
		top: cardt,
		left: cardl,
		position: 'fixed',
		backgroundColor: '#fff'
	});
	$('body').css({
		overflow: 'hidden'
	});
	$('.header-fixed').css('opacity', '0');
	setTimeout(function() {
		$(function() {
			$('.project-details').css({			
				position: 'fixed',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				backgroundColor: bg_color,
				zIndex: 120,
				overflowX: 'auto',
				overflowY: 'scroll'
			});
			$('.project-card-temp').css({
				position: 'absolute',
				minHeight: '100vh',
				height: 'auto',
				width: '90vw',
				left: '5vw',
				top: '30vh',
				backgroundColor: '#fff'
			});
			$('.project-img').css({
				position: 'absolute',
				height: imgh,
				width: imgw,
				left: '10vw',
				top: '10vh',
				zIndex: 3
			});
			
		});
	}, 10);

	setTimeout(function() {
		$('.project-details-content').append(card);
		$('.project-card-temp').remove();
		$('.project-card').append(container);
		$('.card-content').append(heading);
		$('.card-content').append(details); 
		$('.project-card-details').html(detail_cont);
		var first_row_handle = document.getElementById("first-row");
		var second_row_handle = document.getElementById("second-row");
		var third_row_handle = document.getElementById("third-row");
		$('#location').append(project.location);
		$("#details-header").append(project.towers);
		$("#details-body").append(project.towers_content);
		$("#details-para").append(project.details_content);
		$("#iframe-maps").append(project.maps);
		if(project.fplans > 0){
			//"<a class=\"waves-effect waves-light btn\" href=\"javascript:;\" id=\"floor-plan-button\">View Floor Plans</a>"
			var anchortag = document.createElement('a');
			anchortag.className += "waves-effect waves-light btn";
			anchortag['href'] = "javascript:;";
			anchortag['id'] = 'floor-plan-button';
			anchortag.innerHTML += "view floor plans";
			var fpobj = [];
			var fpimgobj;
			var img_source = "images/projects/" + project.name + "/Floor Plans/";
			for(var i = 1; i <= project.fplans; i++){
				fpimgobj = {src: img_source + i + ".jpg"};
				fpobj.push(fpimgobj);
			}
			var floorplandiv = document.getElementById("fpl");
			floorplandiv.appendChild(anchortag);
			$("#floor-plan-button").on('click', function() {
				$.fancybox.open(
					fpobj,{
						loop: true,
						hash: "floor-plan-button"
					});
			});
		} else {
			$('#fpl').append('No floor plans available for this project');
		}
		l_amenities = project["amenities"].length;
		distribute = Math.floor(l_amenities / 3);
		x_traverse = distribute;
		y_traverse = distribute;
		z_traverse = distribute;
		if ((l_amenities % 3) == 1) {
			x_traverse += 1;
		}
		else if ((l_amenities % 3) == 2) {
			x_traverse += 1;
			y_traverse += 1;
		}
		for (var x = 0; x < x_traverse; x++) {
			first_row_handle.innerHTML += '<div class="row"><div class="col s3 m3 l3"><i class="material-icons right red-text">done</i></div><div class="col s9 m9 l9 left-align">' + project["amenities"][x] + '</div></div>';
		}
		for (var y = 0; y < y_traverse; y++) {
			second_row_handle.innerHTML += '<div class="row"><div class="col s3 m3 l3"><i class="material-icons right red-text">done</i></div><div class="col s9 m9 l9 left-align">' + project["amenities"][y + x] + '</div></div>';
		}
		for (var z = 0; z < z_traverse; z++) {
			third_row_handle.innerHTML += '<div class="row"><div class="col s3 m3 l3"><i class="material-icons right red-text">done</i></div><div class="col s9 m9 l9 left-align">' + project["amenities"][z + y + x] + '</div></div>';
		}
		source = "images/projects/" + project.name + "/";
		var imageobjects = [];
		var imgobj;
		if(project.images > 1){
			for(var i = 1; i <= project.images; i++){
				imgobj = { src : source + i + '.jpg' };
				imageobjects.push(imgobj);
			}
		}
		source = "images/projects/" + project.name + "/";
		if(project.images > 1){
			for(var i = 1; i <= project.images; i++){
				img = document.createElement('img');
				img.src = source + i + '.jpg';
				div_slickmain = document.createElement('div');
				div_slickmain.appendChild(img);
				$('.slickmain').append(div_slickmain);
				img2 = document.createElement('img');
				img2.src = source + i + '.jpg';
				img2['height'] = 130;
				img2['width'] = 210;
				div_slickimg = document.createElement('div');
				div_slickimg.appendChild(img2);
				$('.slickimg').append(div_slickimg);
			}
		}
		if (project.images > 6)
		{
			number = 5;
		}
		else if (project.images > 4)
		{
			number = 3;
		}
		else
		{
			number = 1;
		}
		$(document).ready(function(){
			$('.slickmain').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.slickimg'
			});
			$('.slickimg').slick({
				slidesToShow: number,
				slidesToScroll: 1,
				time: 300,
				asNavFor: '.slickmain',
				centerMode: true,
				autoplay: true,
				prevArrow:"<span class='prev'><i class='slick-prev material-icons slickarr' style='font-size: 60px;'>&#xE314;</i></span>",
				nextArrow:"<span class='next'><i class='slick-next material-icons slickarr' style='font-size: 60px;'>&#xE315;</i></span>",
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
		    });
		});
		$('.slick-next').click();
		var feat = document.getElementById('project-features');
		var list_feat = [
			'<img src="https://png.icons8.com/park-bench/win10/48" title="Park Bench" width="48" height="48">&nbsp;&nbsp;Landscape Garden',
			'<img src="https://png.icons8.com/security-checked/win8/48" title="Security Checked" width="48" height="48">&nbsp;&nbsp;Security System Installed',
			'<img src="https://png.icons8.com/dumbbell/win8/48" title="Dumbbell" width="48" height="48">&nbsp;&nbsp;Gymnasium / Club House',
			'<img src="https://png.icons8.com/hotel-check-in-filled/ios7/50" title="Hotel Check In Filled" width="50" height="50">&nbsp;&nbsp;Designer Entrance Lobby',
			'<img src="https://png.icons8.com/playground/android/48" title="Playground" width="48" height="48">&nbsp;&nbsp;Children\' Play Area',
			'<img src="https://png.icons8.com/electricity/android/48" title="Electricity" width="48" height="48">&nbsp;&nbsp;Power Backup for Elevators'
		];
		for (var x = 0; x < project.features.length; x++)
		{
			var div_feat = document.createElement('div');
			div_feat.className = 'col s12 m12 l3 offset-l2 brown-text';
			div_feat.innerHTML += list_feat[project.features[x] - 1];
			feat.appendChild(div_feat);
		}
	}, 300);
	setTimeout(function(){
		$('.collapsible').collapsible();
		h = 3100;
		$('.project-card-details').css('display', 'inherit');
		$('.project-card-title').css('display', 'inherit');
		$('.project-card').css({
			position: 'absolute',
			height: h,
			width: '90vw',
			left: '5vw',
			top: '30vh',
			backgroundColor: '#fff'
		});
		/*setInterval(function(){
			$('.project-gallery').animate({scrollLeft: $('.project-gallery').scrollLeft() + $('.project-gallery').find('img').width()}, 500);
		}, 3000);*/
		$('.close-button').on('click', closeInfo);
	}, 300);
}

function closeInfo() {
	$(function(){
		$('.project-card-title').css('display', 'none');
		$('.project-card-details').css('display', 'none');
		$('.project-details').css('backgroundColor', 'rgba(0, 0, 0, 0)')
		h = $('.hoverable').height();
		w = $('.hoverable').width();

		$('.project-img').css({
			position: 'absolute',
			top: imgTop,
			left: imgLeft
		});
		$('.project-card').css({
			position: 'absolute',
			left: cardLeft,
			top: cardTop,
			width: w,
			height: h
		});
		setTimeout(function(){
			$('.project-details-content').remove();
			$('.project-details').remove();
			$('body').css('overflow','auto');
			$('.header-fixed').css('opacity', '1');
		}, 300);
	});
}