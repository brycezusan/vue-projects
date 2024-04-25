<script setup>
import { useRoute, useRouter } from "vue-router";
import TituloVue from "@/components/ui/Titulo.vue";
import useLoadData from "@/composables/useLoadData";
import { updateDataRegister } from "../services/index";

const route = useRoute();
const router = useRouter();

const { id } = route.params;
const { formdata } = useLoadData(id);

const handleSubmit = async (data) => {
  updateDataRegister(id, data);
  router.push({ name: "home" });
};
</script>

<template>
  <div class="flex justify-between">
    <TituloVue>Editar Cliente</TituloVue>
    <RouterLink
      to="/"
      class="px-5 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-500 rounded-md"
      >Atras</RouterLink
    >
  </div>

  <div class="mx-auto w-5/6 lg:w-1/2 mt-10 shadow bg-white p-8">
    <legend class="text-center text-2xl font-bold text-blue-700">
      Ingrese sus Datos
    </legend>

    <FormKit
      @submit="handleSubmit"
      type="form"
      submit-label="Actualizar Registro"
      incomplete-message="No se pudo enviar ,Revise sus campos"
      :value="formdata"
    >
      <FormKit
        type="text"
        label="Nombre"
        name="nombre"
        placeholder="Name: Luisa Carmen"
        validation="required"
        :validation-messages="{ required: 'Nombre es Obligatorio' }"
        v-model="formdata.nombre"
      />
      <FormKit
        type="text"
        label="Apellidos"
        name="apellidos"
        placeholder="Name: Camacho Rojas"
        validation="required"
        :validation-messages="{ required: 'Apellido es Obligatorio' }"
        v-model="formdata.apellidos"
      />

      <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="Email: correo@Camacho.Rojas"
        validation="required|email"
        :validation-messages="{
          required: 'Email es Obligatorio',
          email: 'Email Invalido',
        }"
        v-model="formdata.email"
      />

      <FormKit
        type="text"
        label="Telefono"
        name="telefono"
        placeholder="Phone: xxx-xxx-xxxx"
        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        :validation-messages="{ matches: 'Fomato no valido' }"
        help="455-355-4599"
        v-model="formdata.telefono"
      />

      <FormKit
        type="text"
        label="Empresa"
        name="empresa"
        placeholder="Empresa: Tkapacito"
        v-model="formdata.empresa"
      />

      <FormKit
        type="text"
        label="Cargo"
        name="cargo"
        laceholder="Cargo: Tech Lead Front"
        v-model="formdata.cargo"
      />
    </FormKit>
  </div>
</template>
