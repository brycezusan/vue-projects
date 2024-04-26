import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
import { getCategories } from "@/services";

export const useFormStore = defineStore("formulario", () => {
  const categories = ref([]);
  const error = ref("");
  const busqueda = reactive({
    ingrediente: "",
    categoria: "",
  });

  const obtenerCategorias = async () => {
    const { drinks } = await getCategories();
    categories.value = drinks;
  };

  onMounted(() => {
    obtenerCategorias();
  });



  return { busqueda, error, categories };
});
