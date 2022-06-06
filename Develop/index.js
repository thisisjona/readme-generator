// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license was used',
        choices: [
            'MIT', 'APACHE 2.0', 'BOOST 1.0', 'IBM', 'none'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName,data);
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('README.md', generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();


//license will be a list