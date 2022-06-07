// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
const questions = [
   "Name Your Project",
   "Briefly Describe Your Project:",
   "Please provide installation instructions",
   "Provide usage instructions:",
   "Choose a License",
   "Provide contribution guidelines for this project",
   "Include relevant test instructions",
   "List aknowledgements and collaborators:",
   "Enter GitHub Username:",
   "Enter eamil address:",
   "Enter full name for the copyright"

];
const licenses = [
    'MIT',
    'Apache-2.0',
    'GPL-3.0',
    'LGPL-3.0',
    'BSD-3-Clause',
    'GPL-2.0'
];


// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", JSON.stringify(data), (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "ReadMe Generated"
            });
        });
    });
};
    
// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: licenses
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[8]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[9]
        },
        {
            type: 'input',
            name: 'fullName',
            message: questions[10]
        }
    ])
}
// Function call to initialize app
init()
    .then((data) => {
        return generateMarkdown(data);
    })
    .then((markdown) => {
        return writeToFile(markdown);
    })
    .catch((err) => {
        console.log(err);
    });

//license will be a list