const inquirer = require("inquirer");

const pms = ["pnpm", "yarn", "npm"];

async function runTask(callback) {
  const prompt = await inquirer.createPromptModule();
  const pmAnswer = await prompt([
    {
      name: "pm",
      message: "What is your package manager would like to use?",
      type: "list",
      choices: pms,
    },
  ]);
  const pm = pmAnswer["pm"];
  callback(pm);
}

module.exports = runTask;
