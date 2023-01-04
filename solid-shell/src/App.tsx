import { A, Route, Routes } from "@solidjs/router";
import { Component, createSignal, lazy, onCleanup } from "solid-js";
import { baseConfig } from "./config";
import windowStore from "../../share/store/store";
import { tap } from "rxjs";

const menus: { name: string; url: string }[] = [
  { name: "Home", url: "/" },
  { name: "Product", url: "/product" },
  { name: "Cart", url: "/cart" },
  { name: "Contact", url: "/contact" },
  { name: "About", url: "/about" },
];

const ReactHome = lazy(() => import("./web-components/react-home"));
const SvelteProduct = lazy(() => import("./web-components/svelte-product"));
const VueCart = lazy(() => import("./web-components/vue-cart"));
const AngularContact = lazy(() => import("./web-components/angular-contact"));
const SolidAbout = lazy(() => import("./web-components/solid-about"));

const App: Component = () => {
  const [counter, setCounter] = createSignal(0);
  const storeSubscription = windowStore.counter$
    .pipe(tap(setCounter))
    .subscribe();
  onCleanup(() => {
    storeSubscription.unsubscribe();
  });
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://solidjs.com/"
            target="_blank"
            class="flex items-center"
          >
            <img
              src={baseConfig.resolveImagePath("solid-about/solid.png")}
              class="h-6 mr-3 sm:h-9"
              alt="Shell Application"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Shell Application
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menus.map((menu) => (
                <li>
                  <A
                    end
                    href={menu.url}
                    class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0"
                  >
                    {menu.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div class="mx-10">
        <div class="flex gap-5 border rounded-md p-2">
          <button
            class="p-2 bg-green-700 text-white rounded-md hover:opacity-80"
            onClick={() => windowStore.increaseCounter()}
          >
            Increase
          </button>
          <button
            class="p-2 bg-green-700 text-white rounded-md hover:opacity-80"
            onClick={() => windowStore.decreaseCounter()}
          >
            Decrease
          </button>
          <p class="text-5xl text-purple-900 font-bold">
            Current counter: {counter()}
          </p>
        </div>
        <Routes>
          <Route path="/" component={ReactHome}></Route>
          <Route path="/product" component={SvelteProduct}></Route>
          <Route path="/cart" component={VueCart}></Route>
          <Route path="/contact" component={AngularContact}></Route>
          <Route path="/about" component={SolidAbout}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
