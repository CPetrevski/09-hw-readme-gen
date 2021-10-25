const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt(
    [
        {
            type: "input",
            message: "Please enter a project Title:",
            name: "title",
            validate: (value) => { if (value){ return true} else {return "Please enter a value"}},
        },
        {
            type: "input",
            message: "Please enter a description for the project:",
            name: "description",
            validate: (value) => { if (value){ return true} else {return "Please enter a value"}},
        },
        {
            type: "input",
            message: "Please enter Installation Instructions:",
            name: "installation",
            validate: (value) => { if (value){ return true} else {return "Please enter a value"}},
        },
        {
            type: "list",
            message: "Please choose a licence for the project:",
            name: "licence",
            choices: [
                "MIT",
                "GPL",
                "APACHE",
                "GNU",
                "N/A"
            ],
            validate: (value) => { if (value){ return true} else {return "Please enter a value"}},
        },
        {
            type: "input",
            message: "Please enter any contributors:",
            name: "contribute",
            validate: (value) => { if (value){ return true} else {return "Please enter a value"}},
        },
        { 
            type: "input",
            message: "Please enter your GitHub Username:", 
            name: "git",
            validate: (value) => { if (value){ return true} else {return "Please enter a value"}},
        },
        {
            type: "input",
            message: "Please enter your email address:",
            name: "email",
            validate: (value) => { if (value){ return true} else {return "Please enter a value"}},
        }
    ]
).then(({
    title,
    description,
    installation,
    licence,
    contribute,
    git,
    email,
}) => {
     const template = 
     `
     # ${title}

     ## Table of Contents
     # [Description](#description)
     # [Installation](#installation)
     # [Licence](#licence)

     ## Description
     ${description}

     ## Installation
     ${installation}

     ## Demo
     Please attach a demo here

     ## Licence
     ${licence}

     ## Contribution
     ${contribute}

     ## Github
     ${git}

     ## Email
     ${email}`;

     createNewFile(title, template);
}
);

function createNewFile(fileName, template) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.md`, template, (err) => {
        if(err) {
            console.log(err);
            return;
        } else {
        console.log("Your Readme has been generated.")
        }

    });
}

