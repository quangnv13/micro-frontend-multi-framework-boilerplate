import("react_home/web-components");

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "react-home-ce": any;
    }
  }
}

const ReactHome = () => {
  return <react-home-ce></react-home-ce>;
};

export default ReactHome;
