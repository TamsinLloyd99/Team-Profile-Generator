const Manager = require("./lib/Manager");//exported manager info
const Engineer = require("./lib/Engineer");//exported engineer info
const Intern = require("./lib/Intern");//exported intern info
const inquirer = require("inquirer");//used for prompting the user for input
const path = require("path");//used for handling file paths and file operations
const fs = require("fs");//used for handling file paths and file operations

const OUTPUT_DIR = path.resolve(__dirname, "output");//These lines define the output directory
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");//export of page HTML layout
const { get } = require("http");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's id!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }   
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager);
        addEmployee();
    });

}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's id!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's github!");
                    return false;
                }   
            }
        }
    ])
    .then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new engineer(name, id, email, github);
        team.push(engineer);
        addEmployee();
    });
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's id!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ])
    .then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        addEmployee();
    });
}