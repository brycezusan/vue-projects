import { getDrinksByParams, getDrinkById } from "@/services";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useDrinkStore = defineStore("drinks", () => {
  // * States -> ref , reactive
  const bebidas = ref([]);
  const bebida = ref({});
  const loading = ref(false);

  // * Actions - Function
  async function getBebidas(busqueda) {
    bebidas.value = [];
    try {
      loading.value = true;
      const { drinks } = await getDrinksByParams(busqueda);
      bebidas.value = drinks;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }

  async function getBebidaById(id) {
    bebida.value = {};
    try {
      loading.value = true;
      const { drinks } = await getDrinkById(id);
      bebida.value = drinks[0];
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }

  // * Getters - Computed(()=>)
  const isEmptyData = computed(() => {
    return bebidas.value.length === 0;
  });


  return {
    bebidas,
    bebida,
    loading,
    isEmptyData,
    getBebidas,
    getBebidaById,
  };
});
