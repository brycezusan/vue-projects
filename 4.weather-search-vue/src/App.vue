<script setup>
import Alerta from "./components/Alerta.vue";
import Spinner from "./components/Spinner.vue";
import NoData from "./components/NoData.vue";
import useClima from "./composables/useClima";
import ClimaResult from "./components/ClimaResult.vue";

const {
  loading,
  alerta,
  busqueda,
  isWeaterData,
  countries,
  obtenerClima,
  weater,
  noValues,
} = useClima();

const handleSubmit = () => {
  if (Object.values(busqueda).includes("")) {
    return (alerta.value = "Campos Obligatorios");
  }
  obtenerClima(busqueda);
  alerta.value = "";
};
</script>

<template>
  <header class="text-center py-10">
    <h1
      class="font-semibold text-4xl bg-white/40 inline-block p-2 shadow text-white"
    >
      Buscador de Clima <span class="text-blue-800">VUE</span>
    </h1>
  </header>

  <main class="grid gap-10">
    <form
      @submit.prevent="handleSubmit"
      class="space-y-2 text-lg max-w-md mx-auto bg-white p-6 rounded shadow w-full"
    >
      <legend class="text-center text-blue-600 font-bold text-2xl">
        Ingreso de datos
      </legend>
      <div class="flex flex-col gap-1">
        <label class="font-bold text-xl" for="ciudad">Ciudad</label>
        <input
          class="border border-gray-300 px-3 py-2 rounded shadow"
          type="text"
          placeholder="Lima, Cartagena , Buenos Aires..."
          id="ciudad"
          v-model="busqueda.ciudad"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label class="font-bold text-xl" for="pais">Pais</label>
        <select
          class="py-2 text-center border border-gray-200 rounded-md shadow"
          id="pais"
          v-model="busqueda.pais"
        >
          <option value="">--- Seleccione ---</option>
          <option v-for="countrie in countries" :value="countrie.codigo">
            {{ countrie.nombre }}
          </option>
        </select>
      </div>

      <Alerta v-if="alerta">{{ alerta }}</Alerta>

      <div class="flex justify-center">
        <input
          class="py-2 px-8 bg-blue-500 hover:bg-blue-400 cursor-pointer text-white font-semibold uppercase"
          type="submit"
          value="busqueda"
        />
      </div>
      <Spinner v-if="loading" />
    </form>

    <NoData v-if="noValues"/>
    
    <ClimaResult v-if="isWeaterData" :ciudad="busqueda.ciudad" :weather="weater"/>
  </main>
</template>
