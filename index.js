const fs = require("fs");
const inquirer = require("inquirer");
const createReadMe = require("./utils/createreadme");
const questions = require("./utils/questions");

//intialising app
const init = () => {
  inquirer.prompt(questions).then((response) => {
    console.log("Creating Professional README.md File...");
    fs.writeFile("./ReadME.md", createReadMe(response), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Congratulations!!! READMe file is now created!");
      }
    });
  });
};
init();
