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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function() {
	$('.collapsible').collapsible();
	$('#nav-location-type').append(capitalizeFirstLetter(GetURLParameter('type')) + ' Projects');
	var project_name = GetURLParameter('project').replace(/([A-Z])/g, ' $1').trim();
	project_name = project_name.replace(/[^0-9](?=[0-9])/g, '$& ')
	$('#nav-location-project').append(project_name);
	$('#project-name').append(project_name);
	var type, index;
	if (GetURLParameter('type') == 'ongoing') {
		type = "ongoing";
		for (var i = 0; i < ongoing_projects.length; i++) {
			if (ongoing_projects[i].name.replace(/\s/g,'').localeCompare(GetURLParameter('project')) == 0) {
				break;
			}
		}
		index = i;
		$('#project-company').append(ongoing_projects[i].company);
	}
	else if (GetURLParameter('type') == 'upcoming') {
		type = "upcoming";
		for (var i = 0; i < upcoming_projects.length; i++) {
			if (upcoming_projects[i].name.replace(/\s/g,'').localeCompare(GetURLParameter('project')) == 0) {
				break;
			}
		}
		index = i;
		$('#project-company').append(upcoming_projects[i].company);
	}
	else {
		type = "completed";
		for (var i = 0; i < completed_projects.length; i++) {
			if (completed_projects[i].name.replace(/\s/g,'').localeCompare(GetURLParameter('project')) == 0) {
				break;
			}
		}
		index = i;
		$('#project-company').append(completed_projects[i].company);
	}
	if (type == "ongoing") {
		$('#project-image').attr('src', ongoing_projects[index].image);
		$("#location").append(ongoing_projects[index].location);
		$("#details-header").append(ongoing_projects[index].towers);
		$("#details-body").append(ongoing_projects[index].towers_content);
		$("#details-para").append(ongoing_projects[index].details_content);
		$("#iframe-maps").append(ongoing_projects[index].maps);
	}
	else if (type == "upcoming") {
		$('#project-image').attr('src', upcoming_projects[index].image);
		$("#location").append(upcoming_projects[index].location);
		$("#details-header").append(upcoming_projects[index].towers);
		$("#details-body").append(upcoming_projects[index].towers_content);
		$("#details-para").append(upcoming_projects[index].details_content);
		$("#iframe-maps").append(upcoming_projects[index].maps);
	}
	else {
		$('#project-image').attr('src', completed_projects[index].image);
		$("#location").append(completed_projects[index].location);
		$("#details-header").append(completed_projects[index].towers);
		$("#details-body").append(completed_projects[index].towers_content);
		$("#details-para").append(completed_projects[index].details_content);
		$("#iframe-maps").append(completed_projects[index].maps);
	}
});

var ongoing_projects = [
	{
		"name": "Landscape Garden",
		"company": "Landscape Ventures",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/Landscape Garden/image.jpg",
		"space": "35 residential",
		"location": "PIN Code 12345<br>Pale, Ambernath - East",
		"towers": "<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Ashtavinayak Avenue Phase 1",
		"company": "Ashtavinayak Infrastructure",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "35 residential",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
]
var upcoming_projects = [
	{
		"name": "Ashtavinayak Avenue Phase 2",
		"company": "Ashtavinayak Infrastructure",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Raj Homes",
		"company": "Raj Homes and Infracon",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/Raj Homes/image.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Rattan Raj Lifespaces Phase 1",
		"company": "Rattan Raj Lifespaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Rattan Raj Lifespaces Phase 2",
		"company": "Rattan Raj Lifespaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Amrut Laxmi City Project 1",
		"company": "Amrut Laxmi Developers",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Amrut Laxmi City Project 2",
		"company": "Amrut Laxmi Developers",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Indraprasth Phase 1",
		"company": "Raj Firstspaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Indraprasth Phase 2",
		"company": "Raj Firstspaces",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Raj Estate",
		"company": "Raj Elitestate",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Royal Flora Phase 2",
		"company": "Raj Buildcon and Infrasturcture",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Project 1",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Project 2",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Project 3",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Project 4",
		"company": "Ishwar Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
]
var completed_projects = [
	{
		"name": "Vrundavan Residency",
		"company": "Shree Swami Narayan Builders and Developers",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Sarang Apartment",
		"company": "Rapid Infratech Pvt. Ltd.",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Geeta Sadan",
		"company": "Shree Balaji Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Shreeram Complex",
		"company": "Shreeram Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Landscape Heights",
		"company": "Landscape Realty",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/Landscape Heights/image.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Raj Residency Wing A",
		"company": "Raj Constructions",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Raj Residency Wing B",
		"company": "Raj Constructions",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Classic Arcade",
		"company": "Classic Constructions",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Orchid Woods",
		"company": "Rapid Infratech Pvt. Ltd.",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
	{
		"name": "Jainam Residency",
		"company": "Shree Sahajanan Enterprises",
		"description": "Stunning 2 Towers of G+7 & S+7 storey with all ultra modern amenities, surrounded by beautiful landscapes.",
		"image": "images/projects/dummy1/pic.jpg",
		"space": "1 BHK / 1 BHK & 2 BHK with Terrace Flats",
		"location":"PIN Code 12345<br>Pale, Ambernath - East",
		"towers":"<i class='material-icons'>business</i>2 Towers of Stilt+9 &amp; G+7 storey",
		"towers_content": "1 BHK / 1 BHK &amp; 2 BHK with Terrace Flats<br>1 BHK : 511 - 849 ( Area in sq.ft.)<br>2 BHK : 853 - 1196( Area in sq.ft.)<br>3,151 / Sq. Ft.<br>Possession : December 2019",
		"details_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>",
		"maps": '<iframe class="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d971.8411034580713!2d74.79735904343302!3d13.01245036666774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1493511761733" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},
]