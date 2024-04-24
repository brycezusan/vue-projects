<script setup>
import { useForm } from "../composables";
import Alerta from "./Alerta.vue";

const { data, error } = useForm();

const props = defineProps({
  criptoCurrencies: {
    type: Array,
  },
  currencies: {
    type: Array,
  },
});

const emit = defineEmits(['cotizar-criptos'])

const handleSubmit = () => {
  if (Object.values(data).includes("")) {
    return (error.value = "Todos los campos son Obligatorios");
  }
  emit('cotizar-criptos',data)
  error.value = "";
};

</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-3">
    <Alerta v-if="error">{{ error }}</Alerta>
    <div class="flex flex-col gap-1">
      <label for="Moneda" class="font-semibold text-slate-800">Moneda:</label>
      <select
        id="moneda"
        class="rounded-md border border-gray-300 py-1 text-center font-semibold"
        v-model="data.moneda"
      >
        <option value="">--- Seleccione ---</option>
        <option v-for="moneda in currencies" :value="moneda.codigo">
          {{ moneda.texto }}
        </option>
      </select>
    </div>
    <div class="flex flex-col gap-1">
      <label for="cripto" class="font-semibold text-slate-800"
        >CriptoMoneda:</label
      >
      <select
        id="cripto"
        class="rounded-md border border-gray-300 py-1 text-center font-semibold"
        v-model="data.cripto"
      >
        <option value="">--- Seleccione ---</option>
        <option
          v-for="criptos in criptoCurrencies"
          :value="criptos.CoinInfo.Name"
        >
          {{ criptos.CoinInfo.FullName }}
        </option>
      </select>
    </div>
    <div class="flex justify-center">
      <input
        class="cursor-pointer rounded bg-emerald-500 px-12 py-2 font-semibold text-white transition-colors hover:bg-emerald-400"
        type="submit"
        value="Cotizar"
      />
    </div>
  </form>
</template>
