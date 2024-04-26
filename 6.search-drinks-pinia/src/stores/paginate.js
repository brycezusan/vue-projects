import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";
import { useDrinkStore } from "./drinks";

export const usePaginateStore = defineStore("pagination", () => {
  // const { busqueda } = useFormStore();
  const drinks = useDrinkStore();
  const currentPage = ref(1);
  const postsPerPage = ref(20);
  const data = ref([]);

  const lastPostIndex = computed(() => {
    return currentPage.value * postsPerPage.value;
  });
  const firstPostIndex = computed(() => {
    return lastPostIndex.value - postsPerPage.value;
  });

  function loadData() {
    data.value = drinks.bebidas.slice(
      firstPostIndex.value,
      lastPostIndex.value
    );
    window.scrollTo(0, 450);
  }

  watchEffect(() => {
    drinks.bebidas;
    currentPage.value;
    loadData();
  });

  function setPage(page) {
    currentPage.value = page;
  }

  const totalItems = computed(() => {
    return drinks.bebidas.length;
  });

  return {
    data,
    currentPage,
    postsPerPage,
    lastPostIndex,
    firstPostIndex,
    totalItems,
    setPage,
  };
});
