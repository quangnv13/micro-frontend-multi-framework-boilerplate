<svelte:options tag="svelte-product-ce" />

<script lang="ts">
  import "../app.css";
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>
