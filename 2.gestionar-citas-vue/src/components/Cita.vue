<script setup>

 const props = defineProps({
    cita:{
      type:Object,
      required:true
    }
 })

 defineEmits(['remove-cita' ,'edit-cita'])

</script>

<template>
  <div
    class="flex justify-between items-center p-4 bg-white shadow rounded border-gray-500 text-slate-900 font-semibold text-lg"
  >
    <div>
      <p class="font-bold">
        Registro de Cita : <span class="font-normal">{{cita.empleado}}</span>
      </p>
      <p class="font-bold">
        Solicitante : <span class="font-normal">{{cita.solicitante}}</span>
      </p>
      <p class="font-bold">
        Fecha : <span class="font-normal">{{cita.fecha}}</span>
      </p>
      <p class="font-bold">
        Tema de Cita : <span class="font-normal">{{cita.asunto}}</span>
      </p>
      <p class="font-bold">
        Detalles de Cita : <span class="font-normal">{{cita.detalles}}</span>
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <button
        @click="$emit('edit-cita',cita.idCita)"
        class="w-[120px] bg-blue-500 hover:bg-blue-400 px-3 py-1 text-white transition-colors"
      >
        Editar
      </button>
      <button
        @click="$emit('remove-cita',cita.idCita)"
        class="w-[120px] bg-red-500 hover:bg-red-400 px-3 py-1 text-white transition-colors"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>
