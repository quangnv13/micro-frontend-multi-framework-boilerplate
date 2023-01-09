const concurrently = require("concurrently");
const path = require("path");
const packageManager = process.env.PM || "npm";
const { result } = concurrently([
  {
    command: `${packageManager} install && ${packageManager} start`,
    name: "assets-server",
    cwd: path.resolve(__dirname, "share/assets"),
  },
  {
    command: `${packageManager} install && ${packageManager} serve`,
    name: "solid-shell",
    cwd: path.resolve(__dirname, "solid-shell"),
  },
  {
    command: `${packageManager} install && ${packageManager} serve`,
    name: "solid-about",
    cwd: path.resolve(__dirname, "solid-about"),
  },
  {
    command: `${packageManager} install && ${packageManager} start`,
    name: "angular-contact",
    cwd: path.resolve(__dirname, "angular-contact"),
  },
  {
    command: `${packageManager} install && ${packageManager} serve`,
    name: "react-home",
    cwd: path.resolve(__dirname, "react-home"),
  },
  {
    command: `${packageManager} install && ${packageManager} serve`,
    name: "svelte-product",
    cwd: path.resolve(__dirname, "svelte-product"),
  },
  {
    command: `${packageManager} install && ${packageManager} serve`,
    name: "vue-cart",
    cwd: path.resolve(__dirname, "vue-cart"),
  },
]);
result.then(
  () => console.log("******* Start all projects successed *******"),
  (err) => console.error(err)
);
