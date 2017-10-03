var work = {
    jobs: [{
            employer: "BMW",
            title: "Warehouse Manager",
            location: "Seclin",
            dates: "Feb - Mar 2015"
        },
        {
            employer: "SNEF",
            title: "Telecom Manager",
            location: "Douai",
            dates: "Apr - Sep 2016"
        },
        {
            employer: "Hummus Bros",
            title: "Digital Communication",
            location: "London",
            dates: "Jan - May 2016"
        },
        {
            employer: "Deltador",
            title: "Android Developper ",
            location: "Villeneuve d'Ascq",
            dates: "Jul - Dec 2017"
        }
    ]
};

var bio = {
    name: "Alexis Malzieu",
    age: 20,
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


$("#header").append(HTMLheaderName.replace("%data%", bio.name));


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

for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(
        "%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace(
        "%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(
        formattedEmployerTitle);

}
