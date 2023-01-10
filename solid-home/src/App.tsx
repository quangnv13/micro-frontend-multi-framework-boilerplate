import { Component } from "solid-js";
import HotCategory from "./components/HotCategory";
import HotEvent from "./components/HotEvent";
import styles from "./index.css?inline";

const App: Component = () => {
  return (
    <>
      <style>{styles}</style>
      <HotEvent></HotEvent>
      <div class="w-full h-2"></div>
      <HotCategory></HotCategory>
    </>
  );
};

export default App;
