import("vue_cart/web-components");

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "vue-cart-ce": any;
    }
  }
}

const VueCart = () => {
  return <vue-cart-ce></vue-cart-ce>;
};

export default VueCart;
