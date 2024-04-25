import { onMounted, reactive } from "vue";
import { getData } from "@/services";

export default function useLoadData(id) {
 

  const formdata = reactive({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    estado: true,
  });

  onMounted(async () => {
    try {
      const data = await getData(id);
      (formdata.nombre = data.nombre),
        (formdata.apellidos = data.apellidos),
        (formdata.email = data.email),
        (formdata.telefono = data.telefono),
        (formdata.empresa = data.empresa),
        (formdata.cargo = data.cargo);
    } catch (error) {
      console.log(error);
    }
  });
  return {
    formdata,router ,route
  };
}
