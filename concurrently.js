const concurrently = require("concurrently");
const path = require("path");
const { result } = concurrently([
  {
    command: "pnpm start",
    name: "assets-server",
    cwd: path.resolve(__dirname, "share/assets"),
  },
  {
    command: "pnpm serve",
    name: "solid-shell",
    cwd: path.resolve(__dirname, "solid-shell"),
  },
  {
    command: "pnpm serve",
    name: "solid-about",
    cwd: path.resolve(__dirname, "solid-about"),
  },
  {
    command: "pnpm start",
    name: "angular-contact",
    cwd: path.resolve(__dirname, "angular-contact"),
  },
  {
    command: "pnpm serve",
    name: "react-home",
    cwd: path.resolve(__dirname, "react-home"),
  },
  {
    command: "pnpm serve",
    name: "svelte-product",
    cwd: path.resolve(__dirname, "svelte-product"),
  },
  {
    command: "pnpm serve",
    name: "vue-cart",
    cwd: path.resolve(__dirname, "vue-cart"),
  },
]);
result.then(
  () => console.log("******* Start all projects successed *******"),
  (err) => console.error(err)
);
