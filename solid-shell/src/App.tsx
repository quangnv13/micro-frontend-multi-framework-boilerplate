import { A, Route, Routes } from "@solidjs/router";
import { Component, createSignal, lazy, onCleanup } from "solid-js";
import { baseConfig } from "./config";
import windowStore from "../../share/store/store";
import { tap } from "rxjs";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

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
const SolidHome = lazy(() => import("./web-components/solid-home"));

const App: Component = () => {
  return (
    <div class="pt-[150px] bg-[#f5f5f5]">
      <img
        width="100%"
        class="object-contain absolute top-[118px]"
        src={baseConfig.resolveImagePath("background/home-bg.png")}
      />
      <Header></Header>
      <div class="w-[1200px] mx-auto">
        <Routes>
          <Route path="/" component={SolidHome}></Route>
          <Route path="/product" component={SvelteProduct}></Route>
          <Route path="/cart" component={VueCart}></Route>
          <Route path="/contact" component={AngularContact}></Route>
          <Route path="/about" component={SolidAbout}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
