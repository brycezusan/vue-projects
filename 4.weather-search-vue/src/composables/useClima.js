import { reactive, ref, computed } from "vue";
import {getClimaByParams , getClimaLatLon} from "../services"
import {paises} from "../data"

export default function useClima() {
  const countries = ref(paises);
  const alerta = ref("");
  const busqueda = reactive({
    ciudad: "",
    pais: "",
  });
  const weater = ref({});
  const loading = ref(false);
  const noValues = ref(false);

  const obtenerClima = async (busqueda) => {
    weater.value = {};
    try {
      loading.value = true;
      const data = await getClimaByParams(busqueda);
      if (data.data.length === 0) {
        busqueda.ciudad = "";
        busqueda.pais = "";
        return (noValues.value = true);
      }
      const lat = data.data[0].lat;
      const lon = data.data[0].lon;

      const { data: clima } = await getClimaLatLon(lat, lon);
      weater.value = clima.main;
      noValues.value = false;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const isWeaterData = computed(() => {
    return Object.keys(weater.value).length > 0;
  });

  return {
    countries,
    alerta,
    busqueda,
    obtenerClima,
    weater,
    isWeaterData,
    noValues,
    loading
  };
}
