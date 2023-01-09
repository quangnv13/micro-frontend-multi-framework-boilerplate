const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pms = ["npm", "pnpm", "yarn"];

const pmRead = (callback) => {
  readline.question(
    "What is package manager you using?\n npm \n pnpm \n yarn \n=>",
    (pmName) => {
      let packageManager = "npm";

      if (!pms.includes(pmName)) {
        throw Error(
          `Your package manager input is invalid. ${pmName} please check and try again!`
        );
      }
      packageManager = pmName;

      readline.close();
      callback(pmName);
    }
  );
};

module.exports = pmRead;
