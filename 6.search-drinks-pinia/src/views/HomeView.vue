<script setup>
import { useDrinkStore } from "@/stores/drinks";
import Titulo from "@/components/UI/Titulo.vue";
import Bebida from "@/components/Bebida.vue";
import Pagination from "@/components/UI/Pagination.vue";
import { usePaginateStore } from "@/stores/paginate";


const store = useDrinkStore();
const data = usePaginateStore() 
</script>

<template>
  <Titulo>{{
    store.isEmptyData ? "Realice su Busqueda" : "Lista de Bebidas"
  }}</Titulo>

  <p v-if="store.isEmptyData" class="text-center text-2xl text-red-500 py-10" >Busque sus recetas preferidas en el formulario </p>

  <section
    v-else
    class="my-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
  >
    <Bebida v-for="bebida in data.data" :bebida="bebida" />
  </section>

  <Pagination v-if="!store.isEmptyData"/>
</template>


