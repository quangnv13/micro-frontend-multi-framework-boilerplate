import("svelte_product/web-components");

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "svelte-product-ce": any;
    }
  }
}

const SvelteProduct = () => {
  return <svelte-product-ce></svelte-product-ce>;
};

export default SvelteProduct;
