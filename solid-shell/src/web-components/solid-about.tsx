import("solid_about/web-components");

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "solid-about-ce": any;
    }
  }
}

const SolidAbout = () => {
  return <solid-about-ce></solid-about-ce>;
};

export default SolidAbout;
