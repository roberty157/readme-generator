const inquirer = require('inquirer');

const generateMarkdown = require('./util/generateMarkdown');
//https://gist.github.com/rachelhyman/b1f109155c9dafffe618

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions=['What is your project title?',
                'How would you describe your project?',
                'How do you install this project?',
                'What is the usage information?',
                'What are the contribution guidelines?',
                'What are the test instructions?',
                'What is the license?',
                'What is your GitHub username?',
                'What is your email address?'];

// TODO: Create a function to write README file
function writeToFile(fileName,data){
  const fs = require('fs');
  /*
  fs.writeFile('README.md', Text,
    (error)=>{
        !!error ? console.log(error) : console.log("Success!");
    })
  */
  const Text = generateMarkdown.generateMarkdown(data);
  fs.writeFile(fileName, Text,
  (error)=>{
      !!error ? console.log(error) : console.log("Success!");
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type:'input',
      message: questions[0],
      name:'title'
    },
    {
      type:'input',
      message: questions[1],
      name:'description'
    },
    /*
    {
      type: 'input',
      message: question[2],
      name: ''
    }
    {
      type: 'input',
      message: question[3],
      name: ''
    }
    {
      type: 'input',
      message: question[4],
      name: ''
    },

    */
    {
      type:'input',
      message: questions[2],
      name:'installation'
    },
    {
      type:'input',
      message: questions[3],
      name:'usage'
    },
    {
      type:'input',
      message: questions[4],
      name:'contribution'
    },
    {
      type:'input',
      message: questions[5],
      name:'test'
    },
    {
      type:'list',
      message: questions[6],
      name: 'license',
      choices: ['Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License',
      'The Unlicense'
      ]
    },
    /*
    ,{
      type: 'input',
      message: question[6],
      name: ''
    }
    */
    {
      type: 'input',
      message: questions[7],
      name: 'github'
    },
    
    {
      type: 'input',
      message: questions[8],
      name: 'email'
    }
    
    
  ])
  .then((response)=>{
    writeToFile('README.md', response);
  })
}

// Function call to initialize app
init();

//{ name:'', link:''},
/*
const LicenseLinks = [
    { name: 'Apache License 2.0', link: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' },
    { name:'GNU General Public License v3.0', link:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
    { name:'MIT License', link:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
    { name:'BSD 2-Clause "Simplified" License', link:'[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
    { name:'BSD 3-Clause "New" or "Revised" License', link:'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
    { name:'Boost Software License 1.0', link:'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
    { name:'Creative Commons Zero v1.0 Universal', link:'[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'},
    { name:'Eclipse Public License 2.0', link:'[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},
    { name:'GNU Affero General Public License v3.0', link:'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'},
    { name:'GNU General Public License v2.0', link:'[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'},
    { name:'GNU Lesser General Public License v2.1', link:'[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'},
    { name:'Mozilla Public License 2.0', link:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},
    { name:'The Unlicense', link:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'}
]
*/

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
/*
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    [![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
    [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
    [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
    [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
    [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
*/
/*
'github.com/roberty157'
*/
//username
//email address

/*
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
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
        type: 'list',
        message: 'enter test instructions',
        name: 'tests',
        choices: ['Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License',
                'The Unlicense'
                ]
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
    
  ])
  .then((response) =>{
    
    console.log(typeof response.tests);
    let testChoice = response.tests;
    let pos = LicenseLinks.map(function(e) { return e.name; }).indexOf(testChoice);
    let link = LicenseLinks[pos].link;
    console.log(link);
    
    const Text = `# ${response.title} # 
    \n${link}
    \n## Table of Contents ##
    \n## Description ## 
    \n${response.description}
    \n## Installation ##
    \n## Usage ##
    \n## Contributing ##
    \n## Tests ##
    \n## License ##
    \n${testChoice}
    \n## Questions ##`;
    
    writeToFile('README.md',response);
  }
  );
  */