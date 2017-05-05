function init_projects() {
	load_ongoing_projects();
	load_upcoming_projects();
	load_completed_projects();
}

function load_ongoing_projects() {
	var projects_container = document.getElementById("ongoing-projects");
	//projects_container.innerHTML += '<div class="row" style="padding-top: 10px; margin-bottom: 0px;"><div class="col l5 m12 s12"><img src="images/projects/dummy1/pic.jpg" class="materialboxed right" height="250px"></div><div class="col l7 m12 s12"><h5 style="margin-bottom: 0px;"><a href="#!" style="">Jainam Residency Phase II</a></h5><h6 style="margin-top: 0px; font-style: italic; color: #999;">Near Shiv Mandir, Ambernath - East</h6><hr><p style="color: #757575;">Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.</p></div></div>';
	for(var i=0 ; i < ongoing_projects.length ; i++) {
		//console.log(i + 1);
		var project = ongoing_projects[i];
		var parameter = project.name.replace(/\s/g,'');
		projects_container.innerHTML += '<div id="ongoing-section-' + i + '" class="row hoverable section" style="padding-top: 10px; padding-bottom: 10px; margin-bottom: 0px;"></div>';
		var section_container = document.getElementById("ongoing-section-" + i);
		section_container.innerHTML += '<div class="col l4 m12 s12"><img src="' + project.image + '" class="materialboxed image" height="250px"></div>';
		section_container.innerHTML += '<div id="ongoing-details-' + i + '" class="col l8 m12 s12 text-description"></div>';
		var details_container = document.getElementById("ongoing-details-" + i);
		details_container.innerHTML += '<h5 style="margin-bottom: 0px;"><a href="project_expand.html?type=ongoing&project=' + parameter + '" style="">' + project.name + '</a></h5>';
		details_container.innerHTML += '<h6 style="margin-top: 5px; font-style: italic; color: #999;">' + project.company + '</h6>'
		details_container.innerHTML += '<hr>';
		details_container.innerHTML += '<p style="color: #757575;">' + project.description + '</p>';
		details_container.innerHTML += '<div class="space">' + project.space + '</div>';
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
		projects_container.innerHTML += '<div id="upcoming-section-' + i + '" class="row hoverable section" style="padding-top: 10px; padding-bottom: 10px; margin-bottom: 0px;"></div>';
		var section_container = document.getElementById("upcoming-section-" + i);
		section_container.innerHTML += '<div class="col l4 m12 s12"><img src="' + project.image + '" class="materialboxed image" height="250px"></div>';
		section_container.innerHTML += '<div id="upcoming-details-' + i + '" class="col l8 m12 s12 text-description"></div>';
		var details_container = document.getElementById("upcoming-details-" + i);
		details_container.innerHTML += '<h5 style="margin-bottom: 0px;"><a href="project_expand.html?type=upcoming&project=' + parameter + '" style="">' + project.name + '</a></h5>';
		details_container.innerHTML += '<h6 style="margin-top: 5px; font-style: italic; color: #999;">' + project.company + '</h6>'
		details_container.innerHTML += '<hr>';
		details_container.innerHTML += '<p style="color: #757575;">' + project.description + '</p>';
		details_container.innerHTML += '<div class="space">' + project.space + '</div>';
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
		projects_container.innerHTML += '<div id="completed-section-' + i + '" class="row hoverable section" style="padding-top: 10px; padding-bottom: 10px; margin-bottom: 0px;"></div>';
		var section_container = document.getElementById("completed-section-" + i);
		section_container.innerHTML += '<div class="col l4 m12 s12"><img src="' + project.image + '" class="materialboxed image" height="250px"></div>';
		section_container.innerHTML += '<div id="completed-details-' + i + '" class="col l8 m12 s12 text-description"></div>';
		var details_container = document.getElementById("completed-details-" + i);
		details_container.innerHTML += '<h5 style="margin-bottom: 0px;"><a href="project_expand.html?type=completed&project=' + parameter + '" style="">' + project.name + '</a></h5>';
		details_container.innerHTML += '<h6 style="margin-top: 5px; font-style: italic; color: #999;">' + project.company + '</h6>'
		details_container.innerHTML += '<hr>';
		details_container.innerHTML += '<p style="color: #757575;">' + project.description + '</p>';
		details_container.innerHTML += '<div class="space">' + project.space + '</div>';
	}
	//var x = "Total Width: " + screen.width + "px";
	//document.getElementById("ongoing-section-1").innerHTML += x;

}

var ongoing_projects = [
	{
		"name": "Landscape Garden",
		"company": "Landscape Ventures",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/Landscape Garden/cover.jpg",
		"space": "35 residential",
	},
	{
		"name": "Ashtavinayak Avenue Phase 1",
		"company": "Ashtavinayak Infrastructure",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "35 residential",
	}, 
]
var upcoming_projects = [
	{
		"name": "Ashtavinayak Avenue Phase 2",
		"company": "Ashtavinayak Infrastructure",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Raj Homes",
		"company": "Raj Homes and Infracon",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/Raj Homes/cover.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Rattan Raj Lifespaces Phase 1",
		"company": "Rattan Raj Lifespaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Rattan Raj Lifespaces Phase 2",
		"company": "Rattan Raj Lifespaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Amrut Laxmi City Project 1",
		"company": "Amrut Laxmi Developers",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Amrut Laxmi City Project 2",
		"company": "Amrut Laxmi Developers",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Indraprasth Phase 1",
		"company": "Raj Firstspaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Indraprasth Phase 2",
		"company": "Raj Firstspaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Raj Estate",
		"company": "Raj Elitestate",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Royal Flora Phase 2",
		"company": "Raj Buildcon and Infrasturcture",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Project 1",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Project 2",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Project 3",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Project 4",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
]
var completed_projects = [
	{
		"name": "Vrundavan Residency",
		"company": "Shree Swami Narayan Builders and Developers",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Sarang Apartment",
		"company": "Rapid Infratech Pvt. Ltd.",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Geeta Sadan",
		"company": "Shree Balaji Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Shreeram Complex",
		"company": "Shreeram Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Landscape Heights",
		"company": "Landscape Realty",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/Landscape Heights/cover.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Raj Residency Wing A",
		"company": "Raj Constructions",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Raj Residency Wing B",
		"company": "Raj Constructions",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Classic Arcade",
		"company": "Classic Constructions",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Orchid Woods",
		"company": "Rapid Infratech Pvt. Ltd.",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
	{
		"name": "Jainam Residency",
		"company": "Shree Sahajanan Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
	},
]
/*
<div class="row" style="padding-top: 10px; margin-bottom: 0px;">
	<div class="col l5 m12 s12"><img src="images/projects/dummy1/pic.jpg" class="materialboxed right" height="250px"></div>
	<div class="col l7 m12 s12">
		<h5 style="margin-bottom: 0px;"><a href="#!" style="">Jainam Residency Phase II</a></h5>
		<h6 style="margin-top: 0px; font-style: italic; color: #999;">Near Shiv Mandir, Ambernath - East</h6>
		<hr>
		<p style="color: #757575;">Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.</p>
	</div>
</div>
*/