import("angular_contact/web-components");

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "angular-contact-ce": any;
    }
  }
}

const AngularContact = () => {
  return <angular-contact-ce></angular-contact-ce>;
};

export default AngularContact;
