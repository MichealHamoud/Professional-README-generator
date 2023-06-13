const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want to name your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "What does this app do?",
  },
  {
    type: "input",
    name: "installation",
    message: "How does one install your app?",
  },
  {
    type: "input",
    name: "image",
    message:
      "Add a representative image of your app(provide the path of the image).",
  },
  {
    type: "input",
    name: "usage",
    message: "How does one use your app?",
  },
  {
    type: "checkbox",
    name: "licenseIcon",
    message: "Under what license you would like to make this app to others?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "acknowledge",
    message:
      "Do you want to acknowledge any person, organisation? . (Use GitHub usernames if possible)",
  },
  {
    type: "input",
    name: "test",
    message: "Any tests for your app?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How to contribute to the project?",
  },
  {
    type: "input",
    name: "author",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "license",
    message: "Describe license for using your app?",
  },
];

module.exports = questions;
