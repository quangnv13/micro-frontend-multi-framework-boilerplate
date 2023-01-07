import { Component, createSignal, onCleanup } from "solid-js";
import { baseConfig } from "./config";
import windowStore from "../../share/store/store";
import styles from "./index.css?inline";
import { tap } from "rxjs";

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
      <style>{styles}</style>
      <div class="w-screen flex items-center justify-center my-20 gap-10">
        <a href="https://www.solidjs.com/" target="_blank">
          <img
            src={baseConfig.resolveImagePath("solid.png")}
            class="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
            alt="Solid logo"
          />
        </a>
        <a href="https://vitejs.dev/" target="_blank">
          <img
            src={baseConfig.resolveImagePath("vite.svg")}
            class="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
            alt="Vite logo"
          />
        </a>
      </div>
      <div class="w-screen mt-10 items-center flex justify-center gap-4">
        <button
          class="border-2 p-2 rounded-md hover:border-blue-800 transition"
          onClick={() => windowStore.increaseCounter()}
        >
          Increase
        </button>
        <button
          class="border-2 p-2 rounded-md hover:border-blue-800 transition"
          onClick={() => windowStore.decreaseCounter()}
        >
          Decrease
        </button>
        <p> {counter()}</p>
      </div>
    </>
  );
};

export default App;
