// Initialize variables.
var skills = ["programming", "HTML", "CSS", "JS", "teaching", "translation", "event planning"];
var bio = {
    "name": "Derrick Wells",
    "role": "Full-Stack Web Developer",
    "contacts": {
        "mobile": "+81-80-3167-3825",
        "email": "me@dwellsdev.com",
        "github": "dwellsdev",
        "location": "Seattle"
    },
    "welcomeMessage": "Hey! My name is Derrick and I like to make things on the web!",
    "skills": skills,
    "bioPic": "images/me.jpg"
}
var education = {
    "schools": [{
        "name": "University of Kansas",
        "location": "Lawrence, KS, USA",
        "degree": "Bachelor of Arts",
        "majors": "Japanese",
        "dates": "June 2010 - May 2014",
        "url": "http://www.ku.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree (Independent Study)",
        "school": "Udacity",
        "date": "June 2016",
        "url": "#"
    }],
    "display": function() {}
}

var work = {
    "jobs": [{
        "employer": "JET Programme",
        "title": "Coordinator for International Relations",
        "dates": "July 2014 - July 2016",
        "location": "Kochi Prefecture, Japan",
        "url": "http://jetprogramme.org/en/",
        "description": "Acted as an interpreter and cultural adviser for international trade deals, gave speeches in Japanese and English, interpreted for government-organized events, translated various official documents into both Japanese and English for local governments and businesses, gave lectures and presentations about foreign languages and cultures in Japanese, and planned cultural exchange events, including holiday parties, day camp events, and workshops. Additionally taught English at local schools once a month and conducted an adult English conversation class once a week."
    }, {
        "employer": "Freelance",
        "title": "Translator and Interpreter",
        "dates": "September 2012 - July 2014",
        "location": "Tokyo, Japan",
        "url": "http://www.linkedin.com/in/dwells40010",
        "description": "Translated Japanese World War II-era government documents, technical documents, and technical literature related to aviation for a large research project. Volunteered to translate and interpret for university events, as well as for minor medical and legal issues, both in the United States and Japan."
    }, {
        "employer": "Harte-Hanks Direct Marketing",
        "title": "Project Lead (2007-2009) Operations Supervisor (2009-2010)",
        "dates": "August 2007 - September 2010",
        "location": "Shawnee, Kansas, USA",
        "url": "http://www.hartehanks.com/",
        "description": "Managed team of 30+, handled hiring, termination, disciplinary action, conflict resolution, and quality assurance evaluations. Additionally scheduled agents and coordinated with workforce management to ensure proper coverage during peak hours of production. Provided technical assistance as needed with agent tools."
    }],
    "display": function() {}
}

var projects = [{
        "title": "Portfolio",
        "dates": "May 2016",
        "description": "HTML/CSS project for Udacity's Front-End Web Developer Nanodegree.",
        "image": "images/port.jpg",
        "url": "#"
    }, {
        "title": "Resume",
        "dates": "June 2016",
        "description": "JavaScript project for Udacity's Front-End Web Developer Nanodegree.",
        "image": "images/resume.jpg",
        "url": "#"
    }

];

// Formatted variables.
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills;



// Append data to page.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedMessage);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

}
if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer;
    var formattedTitle;
    var formattedDates;
    var formattedLocation;
    var formattedDescription;
    for (var i = 0; i < work.jobs.length; i++) {
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        formattedEmployer = formattedEmployer.replace("#", work.jobs[i].url);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $("#workExperience").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    }

}
if (projects.length > 0) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle;
    var formattedProjectDates;
    var formattedProjectDesciption;
    var formattedProjectImage;
    for (var i = 0; i < projects.length; i++) {
        formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        formattedProjectTitle = formattedProjectTitle.replace("#", projects[i].url);
        formattedProjectDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        formattedProjectDesciption = HTMLprojectDescription.replace("%data%", projects[i].description);
        formattedProjectImage = HTMLprojectImage.replace("%data%", projects[i].image);
        $("#projects").append(formattedProjectTitle + formattedProjectDates + formattedProjectDesciption + formattedProjectImage);
    }
}
if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName;
    var formattedCity;
    var formattedDegree;
    var formattedMajor;
    var formattedSchoolDate;
    for (var i = 0; i < education.schools.length; i++) {
        formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        formattedSchoolName = formattedSchoolName.replace("#", education.schools[i].url);
        formattedCity = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $("#education").append(formattedSchoolName + formattedDegree + formattedSchoolDate + formattedCity + formattedMajor);
    }
}

$("#mapDiv").append(googleMap);
