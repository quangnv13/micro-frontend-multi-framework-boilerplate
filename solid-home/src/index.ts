import App from './App';
import { render } from 'solid-js/web';
class Home extends HTMLElement {
  root: HTMLElement;
  constructor() {
    super();
    this.root = document.createElement('div');
    render(() => App, this.root);
  }

  connectedCallback() {
    this.appendChild(this.root);
  }
}

customElements.define('solid-home-ce', Home);
