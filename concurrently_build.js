const concurrently = require("concurrently");
const path = require("path");
const pmRead = require("./pm");
pmRead((packageManager) => {
  const { result } = concurrently([
    {
      command: `${packageManager} install && ${packageManager} build`,
      name: "solid-shell",
      cwd: path.resolve(__dirname, "solid-shell"),
    },
    {
      command: `${packageManager} install && ${packageManager} build`,
      name: "solid-about",
      cwd: path.resolve(__dirname, "solid-about"),
    },
    {
      command: `${packageManager} install && ${packageManager} build`,
      name: "angular-contact",
      cwd: path.resolve(__dirname, "angular-contact"),
    },
    {
      command: `${packageManager} install && ${packageManager} build`,
      name: "react-home",
      cwd: path.resolve(__dirname, "react-home"),
    },
    {
      command: `${packageManager} install && ${packageManager} build`,
      name: "svelte-product",
      cwd: path.resolve(__dirname, "svelte-product"),
    },
    {
      command: `${packageManager} install && ${packageManager} build`,
      name: "vue-cart",
      cwd: path.resolve(__dirname, "vue-cart"),
    },
  ]);
  result.then(
    () => console.log("******* Build all projects successed *******"),
    (err) => console.error(err)
  );
});
