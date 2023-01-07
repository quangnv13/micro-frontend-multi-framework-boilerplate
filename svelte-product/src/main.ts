import './app.css';
import styles from './app.css?inline';
import App from './App.svelte';

class Product extends HTMLElement {
  root: HTMLElement;

  constructor() {
    super();
    this.root = document.createElement('div');
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    this.root.prepend(styleTag);

    new App({
      target: this.root,
    });
  }

  connectedCallback() {
    this.appendChild(this.root);
  }
}

customElements.define('svelte-product-ce', Product);
