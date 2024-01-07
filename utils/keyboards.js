const { projects } = require("./database.js");

const startKeyboard = [
  ["About 👤", "Projects 🛠️"],
  ["Website 🌐", "Contact 📧"],
  ["Jokes 😄", "Feeling Lucky? 🍀"],
];

const contactsKeyboard = [
  [
    {
      text: "X",
      url: "https://x.com/j0shuaedo",
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/joshuaedo",
    },
  ],
];

const projectsKeyboard = projects.map((project) => [
  {
    text: project.title + ":  " + project.description,
    url: project.href,
  },
]);

module.exports = {
  startKeyboard,
  contactsKeyboard,
  projectsKeyboard,
};
