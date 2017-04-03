function get_web_model(member){
	var model = "";
	model += '<div class="team-member"><div class="card center-align">';
	model += '<div class="card-content">';
	model += '<div class="team-member-bg brown lighten-2"></div>';
	model += '<img src="'+member.image+'" class="circle responsive-img materialboxed" data-caption="'+member.name+'">';
	model += '<h6><b>'+member.name+'</b></h6>';
	model += '<div class="team-member-info">'
	model += member.position+'<br/><br/>';
	model += member.email+'<br/>';
	model += member.mobile+'<br/>';
	model += '<div class="row">';
	model += '<a href="'+member.linkedin+'" rel="nofollow"><img src="images/social_media_logos/logo_linkedin.png" id="social-media" alt="linkedin logo"></a>';
	model += '<a href="'+member.facebook+'" rel="nofollow"><img src="images/social_media_logos/logo_fb.png" id="social-media" alt="fb logo"></a>'
	model += '</div></div></div></div>';
	return model;
}

function get_managing_model(member){
	var model = "";
	model += '<div class="team-member"><div class="card center-align">';
	model += '<div class="card-content">';
	model += '<div class="team-member-bg brown lighten-2"></div>';
	model += '<img src="'+member.image+'" class="circle responsive-img materialboxed" data-caption="'+member.name+'">';
	model += '<h6><b>'+member.name+'</b></h6>';
	model += '<div class="team-member-info">'
	model += '<br/>'+member.email+'<br/>';
	model += member.mobile+'<br/>';
	model += '<div class="row">';
	model += '<a href="'+member.linkedin+'" rel="nofollow"><img src="images/social_media_logos/logo_linkedin.png" id="social-media" alt="linkedin logo"></a>';
	model += '<a href="'+member.facebook+'" rel="nofollow"><img src="images/social_media_logos/logo_fb.png" id="social-media" alt="fb logo"></a>'
	model += '</div></div></div></div>';
	return model;
}

function load_members(){
	var gallery_container = document.getElementById("gallery");
	// Core members
	var gallery_row;
	gallery_container.innerHTML += '<h3 class="label">Managing Director</h3>';
	gallery_container.innerHTML += '<div id="core-gallery-row"></div>';
	gallery_row = document.getElementById('core-gallery-row');
	for(var i=0;i<core_members.length;i++){
	  var member = core_members[i];
	  gallery_row.innerHTML += '<div class="gallery" style="display: table; margin: 0 auto;" id="core-member-'+i+'"></div>';
	  var member_container = document.getElementById('core-member-'+i);
	  member_container.innerHTML += get_managing_model(member);
	}
	// Tech Members
	gallery_container.innerHTML += '<h3 class="label">Website Developer Team</h3>';
	gallery_container.innerHTML += '<div  id="tech-gallery-row"></div>';
	gallery_row = document.getElementById('tech-gallery-row');
	for(var i=0;i<tech_members.length;i++){
	  var member = tech_members[i];
	  gallery_row.innerHTML += '<div class="gallery" id="tech-member-'+i+'"></div>';
	  var member_container = document.getElementById('tech-member-'+i);
	  member_container.innerHTML += get_web_model(member);
	}
	gallery_container.innerHTML += '<div class="center button-container"><a class="prev-core btn-floating btn-large waves-effect waves-light brown lighten-2"><i class="material-icons">chevron_left</i></a>';
	gallery_container.innerHTML += '<a class="next-core btn-floating btn-large waves-effect waves-light brown lighten-2"><i class="material-icons">chevron_right</i></a></div>';
}

function initializeTeamMembers() {
	$('.next').on('click', goToNextMember);
	$('.prev').on('click', goToPreviousMember);
	$('.next-core').on('click', goToNextCore);
	$('.prev-core').on('click', goToPrevCore);
	nextMember = 4;
	prevMember = tech_members.length-1;
	var ids = "#core-member-";
	for(i = 0; i < core_members.length; i++) {
		$(ids+i).on('click', function(e){
			if($(e.target).is('img')){
				e.preventDefault();
				return;
			}
			displayMemberInfo.bind(this).call();
		});
	}
	ids = "#tech-member-";
	for(i = 0; i < tech_members.length; i++) {
		$(ids+i).on('click', function(e){
			if($(e.target).is('img')){
				e.preventDefault();
				return;
			}
			displayMemberInfo.bind(this).call();
		});
	}
}

function displayMemberInfo() {
	var card = document.createElement('div');
	card.className = 'expandable-card';
	var w = $(this).find('.card-content').width();
	var h = $(this).find('.card-content').height();
	var t = $(this).find('.team-member-bg').offset().top;
	t -= $(window).scrollTop();
	cardTop = t;
	var l = $(this).find('.team-member-bg').offset().left;
	cardLeft = l;
	var htmlc = '<div class="expandable-card-contents center">' + $(this).find('.card-content').html() + '</div>';

	$('body').append(card);
	$('.expandable-card').append(htmlc);
	$('.expandable-card-contents').css({
		margin: '10px 10px 0 0', 
		position: 'fixed',
		height: h,
		width: w,
		top: t,
		left: l,
		backgroundColor: '#fff'
	});
	setTimeout(function(e){
	$(function() {
		$('.expandable-card').css({			
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100vw',
			height: '100vh',
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
			zIndex: 2
		});
		$('.expandable-card-contents').css({
			position: 'fixed',
			height: '60vh',
			width: '70vw',
			left: '15vw',
			top: '20vh',
			zIndex: 2
		});
		setTimeout(function(){
			$('.expandable-card').find('.team-member-info').css('display', 'inherit');
		}, 300);
	});
	}, 10);
	$('.expandable-card').on('click', closeMember);
}

function closeMember() {
	$(function() {
		$('.expandable-card').find('.team-member-info').css('display', 'none');
		var h = $('.card-content').height();
		var w = $('.card-content').width();
		$('.expandable-card-contents').css({
			position: 'fixed',
			height: h,
			width: w,
			top: cardTop,
			left: cardLeft
		});
		setTimeout(function(){
			$('.expandable-card-contents').remove();
			$('.expandable-card').remove();
		}, 400);
	});
}

function goToNextMember() {
	$('#tech-gallery-row').animate({scrollLeft: $('#tech-gallery-row').scrollLeft() + $('.team-member').width() + 10}, 500);
}

function goToPreviousMember() {
	$('#tech-gallery-row').animate({scrollLeft: ($('#tech-gallery-row').scrollLeft() - $('.team-member').width() - 10)}, 500);
}

function goToNextCore() {
	$('#tech-gallery-row').animate({scrollLeft: $('#tech-gallery-row').scrollLeft() + $('.team-member').width() + 10}, 500);
}

function goToPrevCore() {
	$('#tech-gallery-row').animate({scrollLeft: ($('#tech-gallery-row').scrollLeft() - $('.team-member').width() - 10)}, 500);
}

var core_members = [
    {
        "name": "Naveen Bansal",
        "mobile": "+91",
        "email": "@.com",
        "facebook": "https://www.facebook.com/navin.bansal.9484",
        "linkedin":  "https://in.linkedin.com/",
        "image": "images/team/team_naveen.jpg"
    }
]

var tech_members = [
	{
        "name": "Salman Shah",
        "position": "Web and App Developer",
        "mobile": "+91 88618 97183",
        "email": "sbs.191197@gmail.com",
        "facebook": "https://www.facebook.com/salman.shah.92775",
        "linkedin": "https://www.linkedin.com/in/sbshah97",
        "image": "images/team/team_salman.jpg"
    },
    {
        "name": "Hrishi Hiraskar",
        "position": "Web and App Developer",
        "mobile": "+91 8147298166",
        "email": "hrishihiraskar@gmail.com",
        "facebook": "https://www.facebook.com/hrishi.hiraskar7",
        "linkedin":  "https://www.linkedin.com/in/hrishi-hiraskar",
        "image": "images/team/team_hrishi.jpg"
    },
    {
        "name": "Utkarsh Patil",
        "position": "Web Intern",
        "mobile": "+91 90087 91852",
        "email": "utkarshp2305@gmail.com",
        "facebook": "https://www.facebook.com/utkarsh.patil.9659",
        "linkedin": "http://www.linkedin.com/",
        "image": "images/team/team_utkarsh.png"
    },
    {
        "name": "Sunitha Selvan",
        "position": "Web Intern",
        "mobile": "+91 ",
        "email": "@.com",
        "facebook": "https://www.facebook.com/selvan.suni",
        "linkedin":  "https://in.linkedin.com/",
        "image": "images/team/team_sunitha.jpg"

    }
]