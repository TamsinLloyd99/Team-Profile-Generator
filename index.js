const Manager = require("./lib/Manager.js");//exported manager info
const Engineer = require("./lib/Engineer.js");//exported engineer info
const Intern = require("./lib/Intern.js");//exported intern info
const inquirer = require("inquirer");//used for prompting the user for input
const path = require("path");//used for handling file paths and file operations
const fs = require("fs");//used for handling file paths and file operations

const OUTPUT_DIR = path.resolve(__dirname, "output");//These lines define the output directory
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");//export of page HTML layout
const { get } = require("http");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// function mainApp() {
    

const team = [];


const addManager = () => {
    console.log("Adding Manager...");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
            validate: nameInput => {//checks whether the user's input is valid
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
    ])//a new Manager object is created with the provided details.
    .then(managerInput => {
        console.log("Manager input received:", managerInput);
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager);//the Manager object is added to the team array.
        addEmployee();
    });

}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }
    ])
    .then(menuChoice => {
        switch (menuChoice.menu) {
            case "Add an engineer":
                addEngineer();
                break;
            case "Add an intern":
                addIntern();
                break;
            case "Finish building the team":
                generateHTML(team);
                break;
        }
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
        const engineer = new Engineer(name, id, email, github);
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
addManager();



//Call the render function (provided for you) and pass in an array containing all employee objects;
//The render function will generate and return a block of HTML including templated divs for each employee!


function generateHTML(team) {
    const teamHTML = render(team);
    fs.writeFile(outputPath, teamHTML, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Successfully created team.html!")
    });
}


