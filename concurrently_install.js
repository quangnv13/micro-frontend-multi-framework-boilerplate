const concurrently = require("concurrently");
const path = require("path");
const pmRead = require("./pm");
pmRead((packageManager) => {
  const { result } = concurrently([
    {
      command: `${packageManager} install`,
      name: "assets-server",
      cwd: path.resolve(__dirname, "share/assets"),
    },
    {
      command: `${packageManager} install`,
      name: "solid-shell",
      cwd: path.resolve(__dirname, "solid-shell"),
    },
    {
      command: `${packageManager} install`,
      name: "solid-about",
      cwd: path.resolve(__dirname, "solid-about"),
    },
    {
      command: `${packageManager} install`,
      name: "angular-contact",
      cwd: path.resolve(__dirname, "angular-contact"),
    },
    {
      command: `${packageManager} install`,
      name: "react-home",
      cwd: path.resolve(__dirname, "react-home"),
    },
    {
      command: `${packageManager} install`,
      name: "svelte-product",
      cwd: path.resolve(__dirname, "svelte-product"),
    },
    {
      command: `${packageManager} install`,
      name: "vue-cart",
      cwd: path.resolve(__dirname, "vue-cart"),
    },
  ]);
  result.then(
    () =>
      console.log(
        "******* Install all dependencies of all projects successed *******"
      ),
    (err) => console.error(err)
  );
});
