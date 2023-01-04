import App from "./App";
import { render } from "solid-js/web";
import "./index.css";
import { Router } from "@solidjs/router";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")!
);
