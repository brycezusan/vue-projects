<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main class="max-w-5xl mx-auto w-5/6 xl:w-full py-10">
    <RouterView />
  </main>
</template>
