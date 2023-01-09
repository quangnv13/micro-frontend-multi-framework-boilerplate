let packageManager = process.env.PM || "npm";
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pms = ["npm", "pnpm", "yarn"];

export const pmRead = (callback) => {
  readline.question(
    "What is package manager you using?\n npm \n pnpm \n yarn \n=>",
    (name) => {
      if (!pms.includes(name)) {
        throw Error(
          `Your package manager input is invalid. ${name} please check and try again!`
        );
      }
      packageManager = name;

      readline.close();
      callback();
    }
  );
};
