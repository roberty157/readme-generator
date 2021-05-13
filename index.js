const inquirer = require('inquirer');

//project title
//description, installation instructions
//usage information, contribution guidelines
//test instructions

//license
//options
/*
    Apache License 2.0
    GNU General Public License v3.0
    MIT License
    BSD 2-Clause "Simplified" License
    BSD 3-Clause "New" or "Revised" License
    Boost Software License 1.0
    Creative Commons Zero v1.0 Universal
    Eclipse Public License 2.0
    GNU Affero General Public License v3.0
    GNU General Public License v2.0
    GNU Lesser General Public License v2.1
    Mozilla Public License 2.0
    The Unlicense
*/
//username
//email address
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },

    /*
    {
      type: 'input',
      message: 'enter description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'enter installation instructions:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'enter contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'enter test instructions',
        name: 'tests',
    },
    {
        type: 'list-input',
        message: 'enter test instructions',
        name: 'tests',
        choices: ['']
    },
    {
        type: 'input',
        message: 'enter GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'enter email address',
        name: 'email',
    },
    */
  ])
  .then((response) =>{
    const fs = require('fs');
    const Text = `#${response.title}
                 `;
    /*
    https://www.linkedin.com/in/robert-yeam-64b512171/
    https://github.com/roberty157
    */
    fs.writeFile('README.md', Text,
    (error)=>{
        !!error ? console.log(error) : console.log("Success!");
    })
    
    }
    );