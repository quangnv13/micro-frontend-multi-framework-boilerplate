import App from "./App";

import { customElement, hot } from "solid-element";
import "./index.css";

customElement("solid-home-ce", {}, App);

hot(module, "solid-home-ce");
