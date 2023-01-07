# ReactJS - Micro frontend app

## Setup:

- See **./src/index.tsx** i wrapped **ReactDOM.createRoot** into a class extends **HTMLElement** for define **CustomElementConstructor** and pass the class to `customElements.define` for register web component.

## State management:

- In constructor of web component class i define **counterUpdater** for update state from global state. Because if i use **Rxjs** inner React App it will memory leak by rerender.
- In **connectedCallback** function i subscribe **windowStore.counter$** observable.
- In **disconnectedCallback** function i unsubscribe **windowStore.counter$** observable for avoid memory leak.
