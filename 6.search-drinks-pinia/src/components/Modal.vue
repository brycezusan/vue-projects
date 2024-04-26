d<script setup>
import { useModal } from "@/stores/modal";
import { useDrinkStore } from "@/stores/drinks";
import Spinner from "./UI/Spinner.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { useFavorites } from "@/stores/favorites";
import { computed } from "vue";

const store = useModal();
const bebidas = useDrinkStore();
const favorites =useFavorites();

const generateMeassureIngredient = () => {
  const contenedor = document.createElement("div");

  for (let index = 1; index < 10; index++) {
    if (bebidas.bebida[`strIngredient${index}`]) {
      const ingredient = bebidas.bebida[`strIngredient${index}`];
      const meassure = bebidas.bebida[`strMeasure${index}`];

      const parrafo = document.createElement("p");
      parrafo.classList.add("text-lg");
      parrafo.textContent = `${ingredient} - ${meassure}`;

      contenedor.appendChild(parrafo);
    }
  }

  return contenedor;
};

const existe = computed(()=>{
  return favorites.existFavorite(bebidas.bebida.idDrink)
})
</script>
<template>
  <TransitionRoot appear :show="store.isOpen" as="template">
    <Dialog as="div" @close="store.closeModal" class="relative z-10">
      <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
      >
      <div class="fixed inset-0 bg-black/25" />
    </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :class="[bebidas.loading ? 'bg-blue-100' : 'bg-white']"
              class="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all"
            >
              <Spinner v-if="bebidas.loading"/>

              <DialogTitle
                as="h3"
                class="text-xl text-amber-500 font-medium leading-6 pb-4 text-center"
              >
                {{ bebidas.bebida.strDrink }}
              </DialogTitle>
              <img :src="bebidas.bebida.strDrinkThumb" alt="bebida detalle" />
              <div class="mt-2">
                <DialogTitle
                as="h3"
                class="text-xl text-blue-500 font-medium leading-6 pb-4 text-center"
              >
                Instrucciones
              </DialogTitle>
                <p class="text-lg text-gray-500 text-center">
                  {{ bebidas.bebida.strInstructions }}
                </p>
              </div>
              <DialogTitle
                as="h3"
                class="text-xl text-slate-800 font-medium leading-6 py-4 text-center"
              >
                Ingredientes y Cantidades
              </DialogTitle>

              <div v-html="generateMeassureIngredient().outerHTML"></div>
              <div class="mt-4 flex gap-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  @click="store.closeModal"
                >
                  Cerrar
                </button>
                <button
                
                  type="button"
                  :class="[existe ? 'bg-orange-100 text-orange-900 hover:bg-orange-200 focus-visible:ring-orange-500' : 'bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500']"
                  class="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                  @click="()=>{
                    store.closeModal()
                    favorites.addFavorites(bebidas.bebida.idDrink)
                  }"
                >
                  {{existe ? 'Remover de Favoritos' : 'Agregar Favoritos'}}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
