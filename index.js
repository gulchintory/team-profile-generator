
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const templateHelper = require("./src/templateHelper.js");
const { writeFile } = require('fs').promises;

teams = [];

const init = () => {

function generateTeam () {
  inquirer.prompt([{
    type: "list",
    message: "Select employee role",
    name: "selectEmployee",
    choices: ["Manager", "Engineer", "Intern", "None"]
  }]).then((userChoice) => {

    if (userChoice.selectEmployee === "Manager") {
      inquirer.prompt ([
         {
          type: "input",
          name: "managerName",
          message: "What is name?"
        },
    
        {
          type: "input",
          name: "managerId",
          message: "What is id?"
        },
    
        {
          type: "input",
          name: "managerEmail",
          message: "What is email?"
        },
    
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is office number?"
        }
    
      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teams.push(manager);
        generateTeam();
      });
    }
    else if (userChoice.selectEmployee === "Engineer") {
      inquirer.prompt([
      
        {
          type: "input",
          name: "engineerName",
          message: "What is name?"
        },
  
        {
          type: "input",
          name: "engineerId",
          message: "What is id?" 
        },
  
        {
          type: "input",
          name: "engineerEmail",
          message: "What is email?"
        },
  
        {
          type: "input",
          name: "engineerGithub",
          message: "What is GitHub?"
        }
  
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teams.push(engineer);
        generateTeam();
      });
    }
    else if (userChoice.selectEmployee === "Intern") {
      inquirer.prompt([
    
        {
          type: "input",
          name: "internName",
          message: "What is name?"
        },
    
        {
          type: "input",
          name: "internId",
          message: "What is id?" 
        },
    
        {
          type: "input",
          name: "internEmail",
          message: "What is email?"
        },
    
        {
          type: "input",
          name: "internSchool",
          message: "What is school name?"
        }
    
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teams.push(intern);
        generateTeam();
      });
    }
    else {
      writeFile('dist/index.html', templateHelper(teams));
    }
  })
}

generateTeam();

}

init();