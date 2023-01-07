<script lang="ts">
  import { tap } from "rxjs";
  import { baseConfig } from "./config";
  import windowStore from "../../share/store/store";
  import { onDestroy, onMount } from "svelte";

  let counter = 0;
  const storeSubscription = windowStore.counter$
    .pipe(tap((c) => (counter = c)))
    .subscribe();

  onDestroy(() => {
    storeSubscription.unsubscribe();
  });
</script>

<div class="w-screen flex items-center justify-center my-20 gap-10">
  <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
    <img
      src={baseConfig.resolveImagePath("svelte.svg")}
      class="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
      alt="Svelte logo"
    />
  </a>
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
    <img
      src={baseConfig.resolveImagePath("vite.svg")}
      class="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
      alt="Vite logo"
    />
  </a>
</div>
<div class="w-screen mt-10 items-center flex justify-center gap-4">
  <button
    class="border-2 p-2 rounded-md hover:border-blue-800 transition"
    on:click={() => windowStore.increaseCounter()}
  >
    Increase
  </button>
  <button
    class="border-2 p-2 rounded-md hover:border-blue-800 transition"
    on:click={() => windowStore.decreaseCounter()}
  >
    Decrease
  </button>
  <p>{counter}</p>
</div>
