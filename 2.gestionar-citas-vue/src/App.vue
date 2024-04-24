<script setup>
import Formulario from "./components/Formulario.vue";
import Cita from "./components/Cita.vue";
import Titulo from "./components/UI/Titulo.vue";
import { onMounted, ref, watch, watchEffect } from "vue";
import { uid } from "uid";


const citas = ref([]);
const cita = ref({});


const guardarStorage = ()=>{
  localStorage.setItem('citas',JSON.stringify(citas.value))
}


watch(citas,()=>{
  guardarStorage()
},{
  deep:true
})

onMounted(()=>{
  const citaStorage = localStorage.getItem("citas")

  if(citaStorage){
    citas.value = JSON.parse(citaStorage)
  }
})

const addCitas = (data) => {

  const index = citas.value.findIndex(
    (registro) => registro.idCita === data.idCita
  );
  if (index >= 0) {
    citas.value[index] = { ...data };
  } else {
    const id = uid();
    const registro = {...data , idCita:id}
    citas.value.push(registro);
  }
};

const removeCita = (id) => {
  citas.value = citas.value.filter((registro) => registro.idCita !== id);
};

const editCita = (id) => {
  const item = citas.value.find((registro) => registro.idCita === id);
  Object.assign(cita.value, { ...item });
};
</script>

<template>
  <Titulo />
  <main
    class="pb-10 max-w-6xl mx-auto w-5/6 lg:w-11/12 xl:w-full grid lg:grid-cols-2 gap-4 lg:gap-10"
  >
    <section>
      <h2 class="text-2xl font-semibold text-gray-800 my-10">
        Creacion de Citas
      </h2>
      <Formulario @add-cita="addCitas" :cita="cita" />
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 my-10">
        Citas Registradas o Pendientes
      </h2>
      <div v-if="citas.length > 0" class="grid gap-2">
        <Cita
          v-for="cita in citas"
          :cita="cita"
          @remove-cita="removeCita"
          @edit-cita="editCita"
        />
      </div>
      <h2 v-else class="text-center text-xl font-bold text-blue-500">
        No tenemos Citas Pendientes o Registradas
      </h2>
    </section>
  </main>
</template>

<style></style>
