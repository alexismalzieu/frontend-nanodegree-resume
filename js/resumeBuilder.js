var work = {
    jobs: [{
            employer: "BMW",
            title: "Warehouse Manager",
            location: "Seclin",
            dates: "Feb - Mar 2015",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            employer: "SNEF",
            title: "Telecom Manager",
            location: "Douai",
            dates: "Apr - Sep 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            employer: "Hummus Bros",
            title: "Digital Communication",
            location: "London",
            dates: "Jan - May 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            employer: "Deltador",
            title: "Android Developper ",
            location: "Villeneuve d'Ascq",
            dates: "Jul - Dec 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
};

var bio = {
    name: "Alexis Malzieu",
    role: "Computer Science Student",
    age: 20,
    picture: "images/bear.jpg",
    phrase: " Lorem ipsum dolor sit amet,...",
    skills: ["Awesomeness", "Strongness", "Intelligence", "Handsome"],
    contact: {
        mobile: "0123456789",
        email: "alexis.malzieu@gmail.com",
        github: "amalzieu",
        location: "Lille"
    }
};

var education = {
    schools: [{
            name: "Lycée Marguerite de Flandes",
            location: "Gondecourt",
            dates: "2010- 2014"
        },
        {
            name: "Telecom Lille",
            location: "Villeneuve d'Ascq",
            dates: "2014- 2019"
        }
    ]
};

//Header
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.phrase));


//Contact

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));


//Bio: Skills
if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    var formattedSkils;

    formattedSkils = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkils);

    formattedSkils = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkils);

    formattedSkils = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkils);

    formattedSkils = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkils);
}


//Job: Titles
var job
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(
        "%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace(
        "%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(
        formattedEmployerTitle);


    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description))
}

$(document).click(function (loc) {
    console.log(loc.pageX, loc.pageY)
});
