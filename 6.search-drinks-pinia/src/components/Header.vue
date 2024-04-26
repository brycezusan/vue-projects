<script setup>
import { computed } from "vue";
import {RouterLink , useRoute} from "vue-router"
import Formulario from "./Formulario.vue";

const route = useRoute()

const isHome = computed(() => {
  return route.path === "/";
});

</script>

<template>
 <header :class="[ isHome && 'header']" class="bg-slate-900 py-12">
    <div class="max-w-7xl mx-auto w-5/6 xl:w-full">
      <nav class="flex justify-between items-center mx-auto">
        <img class="w-40 h-40" src="/img/logo.svg" alt="logo" />
        <div class="text-lg font-semibold flex gap-4">
          <RouterLink :to="{ name: 'home' }" :class="[route.path == '/' ? 'text-amber-300':'text-white']"
            >Inicio</RouterLink
          >
          <RouterLink :to="{ name: 'favorites' }" :class="[route.path === '/favorites' ? 'text-amber-300 ' : 'text-white']"
            >Favoritos</RouterLink
          >
        </div>
      </nav>

     <Formulario v-if="isHome"/>
    </div>
  </header>

</template>

