const cliProgress = require("cli-progress");
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);

module.exports = progressBar;
