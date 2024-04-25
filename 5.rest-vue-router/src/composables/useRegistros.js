import { computed, onMounted, ref } from "vue";
import { deleteRegister, getRegistros, updateStateById } from "@/services";

export default function useRegistros() {
  
  const registers = ref([]);

  const obtenerRegistros = async () => {
    const registros = await getRegistros();
    registers.value = registros;
  };

  onMounted(() => {
    obtenerRegistros();
  });

  const updateState = async (data) => {
    const { id, estado } = data;

    try {
      await updateStateById(id, { estado: !estado });
      const index = registers.value.findIndex((item) => item.id === id);
      registers.value[index].estado = !estado;
    } catch (error) {
      console.log(error);
    }
  };

  const removeRegister = async (id) => {
    try {
      await deleteRegister(id);
      registers.value = registers.value.filter((item) => item.id !== id);
    } catch (error) {
      console.log(error);
    }
  };
  const isData = computed(() => {
    return registers.value?.length > 0;
  });

  return { registers, updateState, removeRegister, isData };
}
