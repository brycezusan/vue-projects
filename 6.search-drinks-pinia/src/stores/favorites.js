import { defineStore } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useDrinkStore } from "./drinks";
import { useNotification } from "./notification";

export const useFavorites = defineStore("favorites", () => {
  // * State
  const favorites = ref([]);
  const drinks = useDrinkStore();
  const notification = useNotification()

  const guardarStorage = ()=>{
    localStorage.setItem('favoritos',JSON.stringify(favorites.value))
  }

  watch(favorites,()=>{
    guardarStorage()
  })

  onMounted(()=>{
    const favoriteStorage  =localStorage.getItem("favoritos")
    if(favoriteStorage){
      favorites.value = JSON.parse(favoriteStorage)
    }
  })

  // * Actions
  function addFavorites(id) {
    if (existFavorite(id)) {
      favorites.value = favorites.value.filter((item) => item.idDrink !== id);
      notification.mensaje = 'Removiendo de Favoritos'
    } else {
      favorites.value = [...favorites.value, drinks.bebida];
      notification.mensaje = 'Guardando en Favoritos'

    }
    notification.showNotification()
    setTimeout(() => {
     notification.$reset()
    }, 2000);
  }

  function existFavorite(id) {
    return favorites.value.some((item) => item.idDrink === id);
  }

  // * Getters
  const isEmptyFavorites = computed(() => {
    return favorites.value.length === 0;
  });

  return {
    favorites,
    isEmptyFavorites,
    existFavorite,
    addFavorites,
  };
});
