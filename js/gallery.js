function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
function load_ongoing() {
	var ongoing_handler = document.getElementById("ongoing-section");
	for (var i = 0; i < ongoing_projects.length; i++) {
		ongoing_handler.innerHTML += '<li><div class="collapsible-header" id="ongoing-project-' + i + '"><div class="valign-wrapper" style="height: 80px;"><i class="material-icons">swap_vert</i><div class="row"><div class="col s12 m12 l12"><h5 style="margin-bottom: 0px;">' + ongoing_projects[i].name + '</h5></div><div class="col s12 m12 l12"><h6 style="font-style: italic; margin: 0px;">' + ongoing_projects[i].company + '</h6></div></div></div></div><div class="collapsible-body"><h5>Digital Images</h5><div style="padding-top: 10px;" id="ongoing-digital-images-' + i + '"></div><h5>Actual Site Images</h5><div style="padding-top: 10px;" id="ongoing-site-images-' + i + '"></div></div></li>';
		var digital_images = document.getElementById("ongoing-digital-images-" + i);
		var index = 1;
		while (UrlExists("images/projects/" + ongoing_projects[i].name + "/Digital Images/img" + index + ".jpg")) {
			digital_images.innerHTML += '<a href="images/projects/' + ongoing_projects[i].name + '/Digital Images/img' + index + '.jpg" data-lightbox="ongoing-digital-' + i + '"><img src="images/projects/' + ongoing_projects[i].name + '/Digital Images/img' + index + '.jpg" height="100px"></a>';
			index += 1;
		}
		var site_images = document.getElementById("ongoing-site-images-" + i);
		var index = 1;
		while (UrlExists("images/projects/" + ongoing_projects[i].name + "/Actual Site Images/img" + index + ".jpg")) {
			site_images.innerHTML += '<a href="images/projects/' + ongoing_projects[i].name + '/Actual Site Images/img' + index + '.jpg" data-lightbox="ongoing-site-' + i + '"><img src="images/projects/' + ongoing_projects[i].name + '/Actual Site Images/img' + index + '.jpg" height="100px"></a>';
			index += 1;
		}
	}
}
function load_upcoming() {
	var upcoming_handler = document.getElementById("upcoming-section");
	for (var i = 0; i < upcoming_projects.length; i++) {
		upcoming_handler.innerHTML += '<li><div class="collapsible-header" id="upcoming-project-' + i + '"><div class="valign-wrapper" style="height: 80px;"><i class="material-icons">swap_vert</i><div class="row"><div class="col s12 m12 l12"><h5 style="margin-bottom: 0px;">' + upcoming_projects[i].name + '</h5></div><div class="col s12 m12 l12"><h6 style="font-style: italic; margin: 0px;">' + upcoming_projects[i].company + '</h6></div></div></div></div><div class="collapsible-body"><h5>Digital Images</h5><div style="padding-top: 10px;" id="upcoming-digital-images-' + i + '"></div><h5>Actual Site Images</h5><div style="padding-top: 10px;" id="upcoming-site-images-' + i + '"></div></div></li>';
		var digital_images = document.getElementById("upcoming-digital-images-" + i);
		var index = 1;
		while (UrlExists("images/projects/" + upcoming_projects[i].name + "/Digital Images/img" + index + ".jpg")) {
			digital_images.innerHTML += '<a href="images/projects/' + upcoming_projects[i].name + '/Digital Images/img' + index + '.jpg" data-lightbox="upcoming-digital-' + i + '"><img src="images/projects/' + upcoming_projects[i].name + '/Digital Images/img' + index + '.jpg" height="100px"></a>';
			index += 1;
		}
		var site_images = document.getElementById("upcoming-site-images-" + i);
		var index = 1;
		while (UrlExists("images/projects/" + upcoming_projects[i].name + "/Actual Site Images/img" + index + ".jpg")){
			site_images.innerHTML += '<a href="images/projects/' + upcoming_projects[i].name + '/Actual Site Images/img' + index + '.jpg" data-lightbox="upcoming-site-' + i + '"><img src="images/projects/' + upcoming_projects[i].name + '/Actual Site Images/img' + index + '.jpg" height="100px"></a>';
			index += 1;
		}
	}
}
function load_completed() {
	var completed_handler = document.getElementById("completed-section");
	for (var i = 0; i < completed_projects.length; i++) {
		completed_handler.innerHTML += '<li><div class="collapsible-header" id="completed-project-' + i + '"><div class="valign-wrapper" style="height: 80px;"><i class="material-icons">swap_vert</i><div class="row"><div class="col s12 m12 l12"><h5 style="margin-bottom: 0px;">' + completed_projects[i].name + '</h5></div><div class="col s12 m12 l12"><h6 style="font-style: italic; margin: 0px;">' + completed_projects[i].company + '</h6></div></div></div></div><div class="collapsible-body"><h5>Digital Images</h5><div style="padding-top: 10px;" id="completed-digital-images-' + i + '"></div><h5>Actual Site Images</h5><div style="padding-top: 10px;" id="completed-site-images-' + i + '"></div></div></li>';
		var digital_images = document.getElementById("completed-digital-images-" + i);
		var index = 1;
		while (UrlExists("images/projects/" + completed_projects[i].name + "/Digital Images/img" + index + ".jpg")) {
			digital_images.innerHTML += '<a href="images/projects/' + completed_projects[i].name + '/Digital Images/img' + index + '.jpg" data-lightbox="completed-digital-' + i + '"><img src="images/projects/' + completed_projects[i].name + '/Digital Images/img' + index + '.jpg" height="100px"></a>';
			index += 1;
		}
		var site_images = document.getElementById("completed-site-images-" + i);
		var index = 1;
		while (UrlExists("images/projects/" + completed_projects[i].name + "/Actual Site Images/img" + index + ".jpg")) {
			site_images.innerHTML += '<a href="images/projects/' + completed_projects[i].name + '/Actual Site Images/img' + index + '.jpg" data-lightbox="completed-site-' + i + '"><img src="images/projects/' + completed_projects[i].name + '/Actual Site Images/img' + index + '.jpg" height="100px"></a>';
			index += 1;
		}
	}	
}
function load_active() {
	$( document ).ready(function() {
		var param_1 = GetURLParameter('type');
		var param_2 = GetURLParameter('activate');
		if (param_2 != "none") {
			$('#' + param_1 + '-project-' + param_2).click();
			$('html,body').animate({
				scrollTop: $('#' + param_1 + '-project-' + param_2).offset().top},
				'slow'
			);
		}
	});
}
var ongoing_projects = [
	{
		"name": "Landscape Garden",
		"company": "Landscape Ventures",
	},
	{
		"name": "Ashtavinayak Avenue Phase 1",
		"company": "Ashtavinayak Infrastructure",
	}, 
]
var upcoming_projects = [
	{
		"name": "Ashtavinayak Avenue Phase 2",
		"company": "Ashtavinayak Infrastructure",
	},
	{
		"name": "Raj Homes",
		"company": "Raj Homes and Infracon",
	},
	{
		"name": "Rattan Raj Lifespaces Phase 1",
		"company": "Rattan Raj Lifespaces",
	},
	{
		"name": "Rattan Raj Lifespaces Phase 2",
		"company": "Rattan Raj Lifespaces",
	},
	{
		"name": "Amrut Laxmi City Project 1",
		"company": "Amrut Laxmi Developers",
	},
	{
		"name": "Amrut Laxmi City Project 2",
		"company": "Amrut Laxmi Developers",
	},
	{
		"name": "Indraprasth Phase 1",
		"company": "Raj Firstspaces",
	},
	{
		"name": "Indraprasth Phase 2",
		"company": "Raj Firstspaces",
	},
	{
		"name": "Raj Estate",
		"company": "Raj Elitestate",
	},
	{
		"name": "Royal Flora Phase 2",
		"company": "Raj Buildcon and Infrasturcture",
	},
	{
		"name": "Project 1",
		"company": "Ishwar Enterprises",
	},
	{
		"name": "Project 2",
		"company": "Ishwar Enterprises",
	},
	{
		"name": "Project 3",
		"company": "Ishwar Enterprises",
	},
	{
		"name": "Project 4",
		"company": "Ishwar Enterprises",
	},
]
var completed_projects = [
	{
		"name": "Vrundavan Residency",
		"company": "Shree Swami Narayan Builders and Developers",
	},
	{
		"name": "Sarang Apartment",
		"company": "Rapid Infratech Pvt. Ltd.",
	},
	{
		"name": "Geeta Sadan",
		"company": "Shree Balaji Enterprises",
	},
	{
		"name": "Shreeram Complex",
		"company": "Shreeram Enterprises",
	},
	{
		"name": "Landscape Heights",
		"company": "Landscape Realty",
	},
	{
		"name": "Raj Residency Wing A",
		"company": "Raj Constructions",
	},
	{
		"name": "Raj Residency Wing B",
		"company": "Raj Constructions",
	},
	{
		"name": "Classic Arcade",
		"company": "Classic Constructions",
	},
	{
		"name": "Orchid Woods",
		"company": "Rapid Infratech Pvt. Ltd.",
	},
	{
		"name": "Jainam Residency",
		"company": "Shree Sahajanan Enterprises",
	},
]