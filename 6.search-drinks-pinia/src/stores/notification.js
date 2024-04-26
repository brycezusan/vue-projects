import { ref } from "vue";
import { defineStore } from "pinia";


export const useNotification = defineStore('notification',()=>{
  const show = ref(false);
  const mensaje = ref("")

  function showNotification(){
    show.value = true
  }

  function $reset(){
    mensaje.value = ""
    show.value = false
  }

  return {show , mensaje , $reset , showNotification}
  
})