// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    const LicenseLinks = [
        { name: 'Apache License 2.0', badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]' },
        { name:'GNU General Public License v3.0', badge:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'},
        { name:'MIT License', badge:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'},
        { name:'BSD 2-Clause "Simplified" License', badge:'[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]'},
        { name:'BSD 3-Clause "New" or "Revised" License', badge:'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'},
        { name:'Boost Software License 1.0', badge:'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'},
        { name:'Creative Commons Zero v1.0 Universal', badge:'[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]'},
        { name:'Eclipse Public License 2.0', badge:'[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'},
        { name:'GNU Affero General Public License v3.0', badge:'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]'},
        { name:'GNU General Public License v2.0', badge:'[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]'},
        { name:'GNU Lesser General Public License v2.1', badge:'[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]'},
        { name:'Mozilla Public License 2.0', badge:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'},
        { name:'The Unlicense', badge:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'}
    ]
    for(let i=0;i<LicenseLinks.length;i++){
        if(LicenseLinks[i].name === license){
            return LicenseLinks[i].badge;
        }
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const LicenseLinks = [
        { name: 'Apache License 2.0', link: 'https://opensource.org/licenses/Apache-2.0' },
        { name:'GNU General Public License v3.0', link:'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'},
        { name:'MIT License', link:'https://opensource.org/licenses/MIT'},
        { name:'BSD 2-Clause "Simplified" License', link:'https://opensource.org/licenses/BSD-2-Clause'},
        { name:'BSD 3-Clause "New" or "Revised" License', link:'https://opensource.org/licenses/BSD-3-Clause'},
        { name:'Boost Software License 1.0', link:'https://www.boost.org/LICENSE_1_0.txt'},
        { name:'Creative Commons Zero v1.0 Universal', link:'http://creativecommons.org/publicdomain/zero/1.0/'},
        { name:'Eclipse Public License 2.0', link:'https://opensource.org/licenses/EPL-1.0'},
        { name:'GNU Affero General Public License v3.0', link:'https://www.gnu.org/licenses/agpl-3.0'},
        { name:'GNU General Public License v2.0', link:'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'},
        { name:'GNU Lesser General Public License v2.1', link:'https://www.gnu.org/licenses/lgpl-3.0'},
        { name:'Mozilla Public License 2.0', link:'https://opensource.org/licenses/MPL-2.0'},
        { name:'The Unlicense', link:'http://unlicense.org/'}
    ]
    for(let i=0;i<LicenseLinks.length;i++){
        if(LicenseLinks[i].name === license){
            return LicenseLinks[i].link;
        }
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLst = ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','Mozilla Public License 2.0','The Unlicense'];
    if(licenseLst.includes(license)){
        let section = `${renderLicenseBadge(license)}(${renderLicenseLink(license)})`;
        return section;
    }else{
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
    //data.title, data.tests, data.description, 
    return `# ${data.title} # 
    \n${renderLicenseSection(data.license)}
    \n## Table of Contents ##
    [Installation](##Installation)
    [Usage](## Usage)
    [License](## License)
    [Contributing](## Contributing)
    [Tests](## Tests)
    [Questions(## Questions)]

    \n${data.description}
    \n## Installation ##
    \n## Usage ##
    \n## Contributing ##
    \n## Tests ##
    \n## License ##
    \n${data.license}
    \n## Questions ##
    `;
}

module.exports = {generateMarkdown,renderLicenseBadge,renderLicenseLink,renderLicenseLink};