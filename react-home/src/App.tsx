import { PropsWithChildren, useState } from "react";
import appStyles from "./App.css?inline";
import styles from "./index.css?inline";
import { baseConfig } from "./config";
import windowStore from "../../share/store/store";

function App({
  counterUpdater,
}: {
  counterUpdater: { setValue: (value: number) => void };
}) {
  const [counter, setCounter] = useState(0);
  counterUpdater.setValue = setCounter;
  return (
    <>
      <style>{styles}</style>
      <style>{appStyles}</style>
      <div className="w-screen flex items-center justify-center my-20 gap-10">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={baseConfig.resolveImagePath("vite.svg")}
            className="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={baseConfig.resolveImagePath("react.svg")}
            className="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
            alt="React logo"
          />
        </a>
      </div>
      <div className="w-screen mt-10 flex items-center gap-3 justify-center">
        <button
          className="border-2 p-2 rounded-md hover:border-blue-700 transition"
          onClick={() => windowStore.increaseCounter()}
        >
          Increase
        </button>
        <button
          className="border-2 p-2 rounded-md hover:border-blue-700 transition"
          onClick={() => windowStore.decreaseCounter()}
        >
          Decrease
        </button>
        <p>{counter}</p>
      </div>
    </>
  );
}

export default App;
