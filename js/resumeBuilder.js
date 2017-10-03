var work = {
    jobs: [
        {
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
    skills: ["awesomeness", "CompSci", "Lazyness"],
    contact: {
        mobile: "0123456789",
        email: "alexis.malzieu@gmail.com",
        github: "amalzieu",
        location: "Lille"
    }
};

var education = {
    schools: [
        {
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




if (bio.skills.length > 0) {

    $("header").append(HTMLskillsStart.replace("%data", bio.name));
    var formattedSkils;

    for (var i = 0; i < bio.skills.lenth; i++) {

        formattedSkils = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkils);

    }


}
