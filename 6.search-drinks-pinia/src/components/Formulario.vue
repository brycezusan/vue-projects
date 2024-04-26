<script setup>
import Alerta from "./UI/Alerta.vue";
import Spinner from "./UI/Spinner.vue";
import { useDrinkStore } from "@/stores/drinks";
import { useFormStore } from "@/stores/formulario"
import { usePaginateStore } from "@/stores/paginate";


const formulario = useFormStore()
const paginate = usePaginateStore()
const store = useDrinkStore()

const handleSubmit = async() => {
  if (Object.values(formulario.busqueda).includes("")) {
    return (formulario.error = "Campos Obligatorios");
  }
  formulario.error = "";
  store.getBebidas(formulario.busqueda)
  paginate.currentPage = 1

};
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    :class="[formulario.error && 'border-2  border-yellow-200-500']"
    class="space-y-3 my-10 bg-amber-500 shadow rounded-md md:w-2/3 lg:w-1/3 p-6 text-white"
  >
    <legend class="font-bold text-xl text-center">Ingreso de Datos</legend>
    <div class="flex flex-col gap-1 text-lg">
      <label for="ingrediente" class="font-semibold">Ingrediente</label>
      <input
        class="border border-gray-200 py-2 px-4 rounded-md text-blue-900"
        type="text"
        placeholder="Vodka , Pisco , Piscacho..."
        id="ingrediente"
        v-model="formulario.busqueda.ingrediente"
      />
    </div>
    <div class="flex flex-col gap-1 text-lg">
      <label for="categorias" class="font-semibold">Categorias</label>
      <select
        id="categorias"
        class="py-2 rounded-md text-slate-900 text-center shadow"
        v-model="formulario.busqueda.categoria"
      >
        <option value=""> --- Seleccione ---</option>
        <option v-for="categoria in formulario.categories" :value="categoria.strCategory">{{categoria.strCategory}}</option>
      </select>
    </div>

    <Alerta v-if="formulario.error">{{ formulario.error }}</Alerta>

    <div class="flex justify-center">
      <input
        class="py-2 w-[150px] uppercase bg-white hover:bg-gray-50 rounded-md text-amber-500 hover:tracking-widest cursor-pointer transition-all font-bold"
        type="submit"
        value="Buscar"
      />
    </div>
    <Spinner v-if="store.loading"/>

  </form>
</template>

