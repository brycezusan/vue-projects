<script setup>
import TituloVue from "@/components/ui/Titulo.vue";
import Registro from "@/components/Registro.vue";
import useRegistros from "@/composables/useRegistros"

const {registers, updateState, removeRegister, isData} = useRegistros()

</script>

<template>
  <TituloVue>Listado de Clientes</TituloVue>

  <div v-if="isData" class="flow-root mx-auto mt-10 p-5 bg-white shadow">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                Nombre
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                Empresa
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                Estado
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <Registro
              v-for="registro in registers"
              :registro="registro"
              @update-state="updateState"
              @delete-register="removeRegister"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p v-else class="py-12 text-2xl font-bold text-red-700">
    No tenemos registros aún
  </p>
</template>
