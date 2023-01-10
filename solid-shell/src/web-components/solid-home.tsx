import("solid_home/web-components");

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "solid-home-ce": any;
    }
  }
}

const SolidHome = () => {
  return <solid-home-ce></solid-home-ce>;
};

export default SolidHome;
