const concurrently = require("concurrently");
const path = require("path");
const { result } = concurrently([
  {
    command: "pnpm build",
    name: "solid-shell",
    cwd: path.resolve(__dirname, "solid-shell"),
  },
  {
    command: "pnpm build",
    name: "solid-about",
    cwd: path.resolve(__dirname, "solid-about"),
  },
  {
    command: "pnpm build",
    name: "angular-contact",
    cwd: path.resolve(__dirname, "angular-contact"),
  },
  {
    command: "pnpm build",
    name: "react-home",
    cwd: path.resolve(__dirname, "react-home"),
  },
  {
    command: "pnpm build",
    name: "svelte-product",
    cwd: path.resolve(__dirname, "svelte-product"),
  },
  {
    command: "pnpm build",
    name: "vue-cart",
    cwd: path.resolve(__dirname, "vue-cart"),
  },
]);
result.then(
  () => console.log("******* Build all projects successed *******"),
  (err) => console.error(err)
);
