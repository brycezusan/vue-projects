<script setup>
import {RouterLink} from "vue-router"
</script>
<template>
    <header class="bg-slate-800 py-10">
    <div class="max-w-5xl mx-auto w-5/6 lg:w-full flex justify-between">
      <RouterLink class="text-2xl font-semibold text-white">
        REST - CRM
      </RouterLink>

      <nav class="text-lg font-semibold flex gap-8 text-white">
        <RouterLink to="/">Clientes</RouterLink>
        <RouterLink :to="{ name: 'add-client' }">Registrar</RouterLink>
      </nav>
    </div>
  </header>
</template>



