import { computed, onMounted, ref } from "vue";
import { monedas } from "../data";
import { getCriptos, getCriptoQuote } from "../services";

export const useCriptos =()=> {
  const criptoCurrencies = ref([]);
  const currencies = ref(monedas);
  const cargando = ref(false);
  const result = ref({});

  onMounted(() => {
    const obtenerCriptoMonedas = async () => {
      const { Data } = await getCriptos();
      criptoCurrencies.value = Data;
    };

    obtenerCriptoMonedas();
  });

  const cotizarCriptos = async (datos) => {
    result.value = {};
    try {
      cargando.value = true;
      const resultado = await getCriptoQuote(datos);
      result.value = resultado;
    } catch (error) {
      console.log(error);
    } finally {
      cargando.value = false;
    }
  };

  const isResults = computed(() => {
    return Object.keys(result.value).length > 0;
  });
  return { criptoCurrencies, currencies, result, isResults , cargando ,cotizarCriptos };
}
