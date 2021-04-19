const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createTeamProfile = require("./src/template");

const teamProfiles = [];

//need talk to TA about how to set up functions to add information 

function managerPrompt() {
    inquirer.prompt([
        {
            type: "text",
            name: "managerName",
            message: "What is the name of your manager?"
        },
        {
            type: "text",
            name: "managerID",
            message: "What is your managers ID number?"
        },
        {
            type: "text",
            name: "managerEmail",
            message: "What is the email address of your manager?"
        },
        {
            type: "text",
            name: "managerOfficeNumber",
            message: "What is the office number of your manager?"
        }
    ])
    .then(function(answers) {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOfficeNumber)
        teamProfiles.push(manager);
        addEmployee();
    })
};


function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Which type of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Finish building team"
            ],
        },
    ])
        .then(function (choices) {
            switch (choices.addEmployee) {
                case "Engineer":
                    engineerPrompt()
                    break;
                case "Intern":
                    internPrompt()
                    break;
                case "Finish building team":
                    finishTeamProfile() //?
        }
    })

};

function engineerPrompt() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of the engineer?",
        },
        {
          type: "input",
          name: "engineerID",
          message: "What is the engineers id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the email address of the engineer?",
        },
        {
          type: "input",
          name: "engineerGit",
          message: "What is the engineers username for Github?",
        },
      ])
      .then(function (answers) {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGit
        );
        teamProfiles.push(engineer);
        addEmployee();
      });
};

function internPrompt() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the intern?",
        },
        {
          type: "input",
          name: "internID",
          message: "What is the interns ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is email address of the intern?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Where does the intern go to school?",
        },
      ])
      .then(function (answers) {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        );
        teamProfile.push(intern);
        addEmployee();
      })
};

//function not working

// const promptInquirer = () => inquirer.prompt(prompt);

// // Function to write HTML file
// const generateProfile = () => {
//         fs.generateProfile(fileName, data, (err) => {
//         if (err) throw err
//         console.log('Team Profile Generated Successfully!')
//     })
// }

// const init = () => {
//   promptInquirer().then((answers) => {
//     const profile = generateProfile(answers);
//     generateProfile("./dist/template.js", markdownFile);
//   });
// };

function finishTeamProfile() {
    console.log(teamProfiles);
    fs.writeFile('./dist/teamProfile.html', createTeamProfile(teamProfiles), err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Profile created!');
    });
};

managerPrompt();