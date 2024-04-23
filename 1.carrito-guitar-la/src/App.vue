<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Guitarra from "./components/Guitarra.vue";
import { db } from "./data/index";

const guitarras = ref(db);
const guitarra = reactive({
  id: 4,
  nombre: "VAI",
  imagen: "guitarra_04",
  descripcion:
    "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
  precio: 299,
});
const cart = ref([]);

const guardarStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(cart.value));
};

watch(
  cart,
  () => {
    guardarStorage();
  },
  {
    deep: true,
  }
);

onMounted(() => {
  const carritoStorage = localStorage.getItem("carrito");
  if (carritoStorage) {
    cart.value = JSON.parse(carritoStorage);
  }
});

const agregarCarrito = (guitar) => {
  const { id } = guitar;
  const isItemAdd = cart.value.findIndex((item) => item.id === id);

  if (isItemAdd >= 0) {
    cart.value[isItemAdd].cantidad++;
  } else {
    guitar.cantidad = 1;
    cart.value.push(guitar);
  }
};

const addAmmountItem = (id) => {
  const index = cart.value.findIndex((item) => item.id === id);
  if (cart.value[index].cantidad >= 5) return;
  cart.value[index].cantidad++;
};

const reduceQuantityItem = (id) => {
  const index = cart.value.findIndex((item) => item.id === id);
  if (cart.value[index].cantidad <= 1) return;
  cart.value[index].cantidad--;
};

const removeItemInCart = (id) => {
  cart.value = cart.value.filter((item) => item.id !== id);
};

const clearCart = () => (cart.value = []);
</script>
<template>
  <Header
    :cart="cart"
    :guitar="guitarra"
    @add-ammount="addAmmountItem"
    @reduce-quantity="reduceQuantityItem"
    @add-cart="agregarCarrito"
    @remove-item="removeItemInCart"
    @clear-cart="clearCart"
  />

  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>

    <div class="row mt-5">
      <Guitarra
        v-for="guitarra in guitarras"
        :guitarra="guitarra"
        @add-cart="agregarCarrito"
      />
    </div>
  </main>

  <Footer />
</template>
