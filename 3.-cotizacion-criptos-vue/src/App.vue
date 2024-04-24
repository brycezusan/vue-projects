<script setup>
import Header from "./components/Header.vue";
import Formulario from "./components/Formulario.vue";
import Cotizacion from "./components/Cotizacion.vue";
import Spinner from "./components/Spinner.vue";
import { useCriptos } from "./composables";

const {
  cotizarCriptos,
  criptoCurrencies,
  currencies,
  isResults,
  result,
  cargando,
} = useCriptos();


</script>

<template>
  <Header />
  <section class="mx-auto max-w-xl rounded-md bg-white p-8 text-lg shadow">

    <Formulario
      :currencies="currencies"
      :criptoCurrencies="criptoCurrencies"
      @cotizar-criptos = "cotizarCriptos"
    />

    <Spinner v-if="cargando" />

    <Cotizacion v-if="isResults" :results="result" />
  </section>
</template>
