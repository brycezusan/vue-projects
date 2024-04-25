<script setup>
import { useRouter } from "vue-router"
import TituloVue from "@/components/ui/Titulo.vue";
import { createNewRegister } from "@/services";


const router = useRouter()

const handleSubmit = async(data)=>{
  data.estado = true
  createNewRegister(data)
  router.push({name:"home"})
}

</script>

<template>
  <TituloVue>Agregar Nuevo Cliente</TituloVue>

  <div class="mx-auto w-5/6 lg:w-1/2 mt-10 shadow bg-white p-8">
    <legend class="text-center text-2xl font-bold text-blue-700">
      Ingrese sus Datos
    </legend>

    <FormKit 
      @submit="handleSubmit"
      type="form" submit-label="Registrar Cliente" incomplete-message="No se pudo enviar ,Revise sus campos"
    >
      
      <FormKit
        type="text"
        label="Nombre"
        name="nombre"
        placeholder="Name: Luisa Carmen"
        validation="required"
        :validation-messages="{ required: 'Nombre es Obligatorio' }"
      />
      <FormKit
        type="text"
        label="Apellidos"
        name="apellidos"
        placeholder="Name: Camacho Rojas"
        validation="required"
        :validation-messages="{ required: 'Apellido es Obligatorio' }"
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
      />

      <FormKit
        type="text"
        label="Telefono"
        name="telefono"
        placeholder="Phone: xxx-xxx-xxxx"
        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        :validation-messages="{ matches: 'Fomato no valido' }"
        help="455-355-4599"
      />

      <FormKit type="text" label="Empresa" name="empresa" placeholder="Empresa: Tkapacito" />

      <FormKit type="text" label="Cargo" name="cargo"laceholder="Cargo: Tech Lead Front" />
    </FormKit>
  </div>
</template>
