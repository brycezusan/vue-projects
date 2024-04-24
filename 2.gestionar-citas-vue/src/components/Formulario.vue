<script setup>
import { reactive, ref, watch } from "vue";

const props = defineProps({
  cita: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["add-cita"]);

const dataCita = reactive({
  idCita: null,
  empleado: "",
  solicitante: "",
  asunto: "",
  detalles: "",
  fecha: "",
});

watch(
  props.cita,
  () => {
    if (props.cita.idCita) {
      Object.assign(dataCita, props.cita);
    }
  },
  {
    deep: true,
  }
);

const error = ref("");

const handleSubmit = () => {
  if (Object.values(dataCita).includes("")) {
    console.log("error");
    error.value = "Todos los campos son Obligatorios";
  } else {
    error.value = "";
    const cita = { ...dataCita};
    emit("add-cita", cita);
    clearCita();
  }
};

const clearCita = () => {
  Object.assign(dataCita, {
    empleado: "",
    solicitante: "",
    asunto: "",
    detalles: "",
    fecha: "",
    idCita:null,
  });
};
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    class="text-slate-900 text-lg space-y-2 bg-white shadow rounded-md p-6"
  >
    <p
      v-if="error"
      class="text-center py-2 text-red-600 font-bold bg-red-200 w-full"
    >
      {{ error }}
    </p>
    <legend class="text-center text-2xl font-semibold">
      Ingrese sus datos
    </legend>
    <div class="flex flex-col gap-1">
      <label for="empleado" class="font-bold">Nombre de Empleado</label>
      <input
        class="py-2 px-3 rounded-md border border-gray-200"
        type="text"
        placeholder="Empleado:Cesar"
        id="empleado"
        name="empleado"
        @input="(e) => (dataCita.empleado = e.target.value)"
        :value="dataCita.empleado"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label for="solicitante" class="font-bold">Nombre de Solicitante</label>
      <input
        class="py-2 px-3 rounded-md border border-gray-200"
        type="text"
        placeholder="Solicitante:Cesar"
        id="solicitante"
        name="solicitante"
        @input="(e) => (dataCita.solicitante = e.target.value)"
        :value="dataCita.solicitante"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="fecha" class="font-bold">Fecha de cita</label>
      <input
        class="py-2 px-3 rounded-md border border-gray-200"
        type="date"
        id="fecha"
        name="fecha"
        @input="(e) => (dataCita.fecha = e.target.value)"
        :value="dataCita.fecha"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label for="asunto" class="font-bold">Asunto de cita</label>
      <input
        class="py-2 px-3 rounded-md border border-gray-200"
        type="text"
        placeholder="Asunto:regular pagos"
        id="asunto"
        name="asunto"
        @input="(e) => (dataCita.asunto = e.target.value)"
        :value="dataCita.asunto"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label for="detalles" class="font-bold">Detalles de cita</label>
      <textarea
        id="detalles"
        cols="20"
        rows="5"
        class="resize-none border border-gray-200 rounded-md p-5"
        name="detalles"
        @input="(e) => (dataCita.detalles = e.target.value)"
        :value="dataCita.detalles"
      />
    </div>
    <div class="flex justify-center">
      <input
        class="py-2 w-2/3 text-white bg-blue-600 uppercase font-bold rounded hover:bg-blue-400 cursor-pointer transition-colors"
        type="submit"
        :value="dataCita.idCita  ? 'Actualizar Cita' : 'Registrar Cita'"
      />
    </div>
  </form>
</template>
