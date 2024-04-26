import { ref } from "vue";
import { defineStore } from "pinia";

export const useModal = defineStore("modal", () => {

  const isOpen = ref(false);

  function closeModal() {
    isOpen.value = false;
  }
  function openModal() {
    isOpen.value = true;
  }

  return {
    isOpen ,
    closeModal,
    openModal
  }
});
