import { reactive, ref } from "vue";

export const useForm = ()=> {
  const data = reactive({
    moneda: "",
    cripto: "",
  });
  const error = ref("");

  
  return {data , error };
}
