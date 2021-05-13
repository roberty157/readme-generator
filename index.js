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
    /*
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
    const Text = `# ${response.title} # 
    \n## Table of Contents ##
    \n## Description ## 
    \n${response.description}
    \n## Installation ##
    \n## Usage ##
    \n## Contributing ##
    \n## Tests ##
    \n## License ##
    \n## Questions ##`;
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