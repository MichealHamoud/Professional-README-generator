//To create README.md file
const createReadMe = (data) => {
  return `# ${data.title}
![Github license](https://img.shields.io/badge/license-${data.licenseIcon}-blue)
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Contributors](#contributors)
* [Testing](#tests)
* [License](#license)
* [Questions](#questions)
## Description
${data.description}
## Screenshots
![Alt text](${data.image})
## Installation
${data.installation}
## Usage
${data.usage}
## Tests
${data.test}
## Contribute
${data.contribute}
## Contributors
${data.acknowledge}
## License
${data.license}
## Questions
If you have any questions or suggestions please [contact](mailto:${data.email}?subject=README_file_generator) or visit [github/${data.author}](https://github.com/${data.author})`;
};

module.exports = createReadMe;
