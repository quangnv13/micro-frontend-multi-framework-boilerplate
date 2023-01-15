const chalk = require("chalk");

const errorChalk = chalk.bold.red;
const infoChalk = chalk.blue;
const successChalk = chalk.green;
const warningChalk = chalk.hex("#FFA500");

const logger = {
  error: (...messages) => console.error(errorChalk(messages)),
  info: (...messages) => console.info(infoChalk(messages)),
  success: (...messages) => console.log(successChalk(messages)),
  warn: (...messages) => console.log(warningChalk(messages)),
};

module.exports = logger;
