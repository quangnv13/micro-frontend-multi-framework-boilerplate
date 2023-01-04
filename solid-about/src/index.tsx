import App from "./App";

import { customElement, hot } from "solid-element";
import "./index.css";

customElement("solid-about-ce", {}, App);

hot(module, "solid-about-ce");
