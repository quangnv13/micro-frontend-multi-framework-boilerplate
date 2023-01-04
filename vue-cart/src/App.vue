<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { configuationBase } from "../../share/utils/functions";

const baseConfig = configuationBase("vue-cart");
</script>

<script lang="ts">
import styles from "./style.css?inline";
import windowStore from "../../share/store/store";
import { tap } from "rxjs";

let counterSubscription = windowStore.createSubscription();

export default defineComponent({
  styles: [styles],
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    counterSubscription = windowStore.counter$
      .pipe(tap((c) => (this.counter = c)))
      .subscribe();
  },
  beforeDestroy() {
    counterSubscription.unsubscribe();
  },
  methods: {
    increase() {
      windowStore.increaseCounter();
    },
    decrease() {
      windowStore.decreaseCounter();
    },
  },
});
</script>

<template>
  <div class="w-screen flex items-center justify-center my-20 gap-10">
    <a href="https://vitejs.dev" target="_blank">
      <img
        v-bind:src="baseConfig.resolveImagePath('vite.svg')"
        class="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
        alt="Vite logo"
      />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img
        v-bind:src="baseConfig.resolveImagePath('vue.svg')"
        class="w-40 h-40 hover:rotate-180 transition-transform duration-1000"
        alt="Vue logo"
      />
    </a>
  </div>
  <div class="w-screen mt-10 items-center gap-3 flex justify-center">
    <button
      class="border-2 p-2 rounded-md hover:border-green-700 transition"
      @click="increase()"
    >
      Increase
    </button>
    <button
      class="border-2 p-2 rounded-md hover:border-green-700 transition"
      @click="decrease()"
    >
      Decrease
    </button>
    <p>{{ counter }}</p>
  </div>
</template>
