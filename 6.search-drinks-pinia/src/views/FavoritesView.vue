<script setup>
import Bebida from '@/components/Bebida.vue';
import Titulo from '@/components/UI/Titulo.vue';
import { useFavorites } from '@/stores/favorites';

const store = useFavorites()

</script>

<template>
  <Titulo>{{store.isEmptyFavorites ? 'Sin Recetas Favoritas' : 'Recetas Favoritas'}}</Titulo>

  <p v-if="store.isEmptyFavorites" class="text-center text-2xl text-red-500 py-10" >Busque sus recetas preferidas </p>
  <section
    v-else
    class="my-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
  >
   <Bebida v-for="bebida in store.favorites" :bebida="bebida" />
  </section>
</template>

