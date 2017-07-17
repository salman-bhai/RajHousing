function init_projects() {
	load_ongoing_projects();
	load_upcoming_projects();
	load_completed_projects();
}

var cardTop, cardLeft, imgLeft, imgTop, type;

function load_ongoing_projects() {
	var projects_container = document.getElementById("ongoing-projects");
	//projects_container.innerHTML += '<div class="row" style="padding-top: 10px; margin-bottom: 0px;"><div class="col l5 m12 s12"><img src="images/projects/dummy1/pic.jpg" class="materialboxed right" height="250px"></div><div class="col l7 m12 s12"><h5 style="margin-bottom: 0px;"><a href="#!" style="">Jainam Residency Phase II</a></h5><h6 style="margin-top: 0px; font-style: italic; color: #999;">Near Shiv Mandir, Ambernath - East</h6><hr><p style="color: #757575;">Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.</p></div></div>';
	for(var i=0 ; i < ongoing_projects.length ; i++) {
		//console.log(i + 1);
		var project = ongoing_projects[i];
		var parameter = project.name.replace(/\s/g,'');
		projects_container.innerHTML += '<div id="ongoing-section-' + i + '" class="col l4 m12 s12 hoverable section" style="padding-top: 10px; padding-bottom: 10px; margin-bottom: 0px;"></div>';
		var section_container = document.getElementById("ongoing-section-" + i);
		section_container.innerHTML += '<img src="' + project.image + '" class=" image" height="250px" width="270px">';
		section_container.innerHTML += '<div id="ongoing-details-' + i + '" class="text-description"></div>';
		var details_container = document.getElementById("ongoing-details-" + i);
		details_container.innerHTML += '<h5 style="margin-bottom: 0px;">' + project.name + '</h5>';
		details_container.innerHTML += '<h6 style="margin-top: 5px; font-style: italic; color: #999;">' + project.company + '</h6>'
	}
	var ids = "#ongoing-section-";
	for(i = 0; i < upcoming_projects.length; i++) {
		$(ids+i).on('click', function(e){
			type="ongoing";
			displayProjectInfo.bind(this).call();
		});
	}
	//var x = "Total Width: " + screen.width + "px";
	//document.getElementById("ongoing-section-1").innerHTML += x;

}

function load_upcoming_projects() {
	var projects_container = document.getElementById("upcoming-projects");
	//projects_container.innerHTML += '<div class="row" style="padding-top: 10px; margin-bottom: 0px;"><div class="col l5 m12 s12"><img src="images/projects/dummy1/pic.jpg" class="materialboxed right" height="250px"></div><div class="col l7 m12 s12"><h5 style="margin-bottom: 0px;"><a href="#!" style="">Jainam Residency Phase II</a></h5><h6 style="margin-top: 0px; font-style: italic; color: #999;">Near Shiv Mandir, Ambernath - East</h6><hr><p style="color: #757575;">Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.</p></div></div>';
	for(var i=0 ; i < upcoming_projects.length ; i++) {
		//console.log(i + 1);
		var project = upcoming_projects[i];
		var parameter = project.name.replace(/\s/g,'');
		projects_container.innerHTML += '<div id="upcoming-section-' + i + '" class="col l4 m12 s12 hoverable section" style="padding-top: 10px; padding-bottom: 10px; margin-bottom: 0px;"></div>';
		var section_container = document.getElementById("upcoming-section-" + i);
		section_container.innerHTML += '<img src="' + project.image + '" class="image" height="250px">';
		section_container.innerHTML += '<div id="upcoming-details-' + i + '" class="text-description"></div>';
		var details_container = document.getElementById("upcoming-details-" + i);
		details_container.innerHTML += '<h5 style="margin-bottom: 0px;">' + project.name + '</h5>';
		details_container.innerHTML += '<h6 style="margin-top: 5px; font-style: italic; color: #999;">' + project.company + '</h6>'
	}
	var ids = "#upcoming-section-";
	for(i = 0; i < upcoming_projects.length; i++) {
		$(ids+i).on('click', function(e){
			type = "upcoming";
			displayProjectInfo.bind(this).call();
		});
	}
	//var x = "Total Width: " + screen.width + "px";
	//document.getElementById("ongoing-section-1").innerHTML += x;

}

function load_completed_projects() {
	var projects_container = document.getElementById("completed-projects");
	//projects_container.innerHTML += '<div class="row" style="padding-top: 10px; margin-bottom: 0px;"><div class="col l5 m12 s12"><img src="images/projects/dummy1/pic.jpg" class="materialboxed right" height="250px"></div><div class="col l7 m12 s12"><h5 style="margin-bottom: 0px;"><a href="#!" style="">Jainam Residency Phase II</a></h5><h6 style="margin-top: 0px; font-style: italic; color: #999;">Near Shiv Mandir, Ambernath - East</h6><hr><p style="color: #757575;">Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.</p></div></div>';
	for(var i=0 ; i < completed_projects.length ; i++) {
		//console.log(i + 1);
		var project = completed_projects[i];
		var parameter = project.name.replace(/\s/g,'');
		projects_container.innerHTML += '<div id="completed-section-' + i + '" class="col l4 m12 s12 hoverable section" style="padding-top: 10px; padding-bottom: 10px; margin-bottom: 0px;"></div>';
		var section_container = document.getElementById("completed-section-" + i);
		section_container.innerHTML += '<img src="' + project.image + '" class="image" height="250px">';
		section_container.innerHTML += '<div id="completed-details-' + i + '" class="text-description"></div>';
		var details_container = document.getElementById("completed-details-" + i);
		details_container.innerHTML += '<h5 style="margin-bottom: 0px;">' + project.name + '</h5>';
		details_container.innerHTML += '<h6 style="margin-top: 5px; font-style: italic; color: #999;">' + project.company + '</h6>'
	}
	//var x = "Total Width: " + screen.width + "px";
	//document.getElementById("ongoing-section-1").innerHTML += x;
	var ids = "#completed-section-";
	for(i = 0; i < upcoming_projects.length; i++) {
		$(ids+i).on('click', function(e){
			type = "completed";
			displayProjectInfo.bind(this).call();
		});
	}
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
	detail_cont = "<h5 class=\"brown-text light\">PROJECT DETAILS</h5><hr><ul class=\"collapsible\" data-collapsible=\"accordion\"><li><div class=\"collapsible-header\"><div style=\"float: left;\" id=\"details-header\"></div><div style=\"float: right;\"><i class=\"material-icons\">import_export</i></div></div><div class=\"collapsible-body\"><span id=\"details-body\"></span></div></li><li><div class=\"collapsible-header\"><div style=\"float: left;\"><i class=\"material-icons\">folder_open</i>Floor Plans</div><div style=\"float: right;\"><i class=\"material-icons\">import_export</i></div></div><div class=\"collapsible-body\"><div class=\"project-floor-plans\"></div></div></li><li><div class=\"collapsible-header\"><div style=\"float: left;\"><i class=\"material-icons\">card_giftcard</i>Offers</div><div style=\"float: right;\"><i class=\"material-icons\">import_export</i></div></div><div class=\"collapsible-body\"><span>Contact Sales for offers</span></div></li></ul><p class=\"brown-text para\" id=\"details-para\"></p><h5 class=\"brown-text light center\" style=\"padding-top: 20px; padding-bottom: 20px;\"><span class=\"underline\">AMENITIES</span></h5><div class=\"row\"><div class=\"col s12 m4 l4\" id=\"first-row\"></div><div class=\"col s12 m4 l4\" id=\"second-row\"></div><div class=\"col s12 m4 l4\" id=\"third-row\"></div></div><center><div class=\"project-gallery\"></div></center><h5 class=\"brown-text light center\" style=\"padding-top: 20px; padding-bottom: 20px;\"><span class=\"underline\">PROJECT LOCATION</span></h5><div class=\"center\" id=\"iframe-maps\"></div><p class=\"brown-text para\" style=\"font-size: 15px; text-align: center;\" id=\"location\"></p>";
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
		if(project.fplans){
			for(var i = 0; i < project['fplans'].length; i++){
				fp = document.createElement('img');
				fp.className = "floor-plan materialboxed";
				fp.src = project.fplans[i];
				$('.project-floor-plans').append(fp);
			}
		} else {
			$('.project-floor-plans').append('No floor plans available for this project.');
			$('.project-floor-plans').css('overflowX', 'auto');
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
		if(project.images > 1){
			for(var i = 2; i < project.images; i++){
				img = document.createElement('img');
				img.src = source + i + '.jpg';
				$('.project-gallery').append(img);
			}
		}
		
	}, 300);	
	setTimeout(function(){
		$('.collapsible').collapsible();
		h = $('.project-card-details').height() + $('.project-card-title').height() + 220 + 'px';
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
		setInterval(function(){
			$('.project-gallery').animate({scrollLeft: $('.project-gallery').scrollLeft() + $('.project-gallery').find('img').width()}, 500);
		}, 3000);
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