import { defineCustomElement } from "vue";
import "./style.css";
import App from "./App.vue";

const vueCartCe = defineCustomElement(App);

customElements.define("vue-cart-ce", vueCartCe);
