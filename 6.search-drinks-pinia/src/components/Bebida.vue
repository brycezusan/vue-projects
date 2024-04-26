<script setup>
import { useDrinkStore } from '@/stores/drinks';
import { useModal } from '@/stores/modal';

const props = defineProps({
  bebida:{
    type:Object,
    required:true
  }
})

const store = useDrinkStore()
const modal = useModal()

const handleClick = async(id)=>{
  await store.getBebidaById(id)
  modal.openModal()
}

</script>

<template>
   <article
      class="border shadow rounded-md overflow-hidden"
    > 
      <div class="overflow-hidden">
        <img class="w-full blur-[1px] hover:blur-0 hover:rotate-3 hover:scale-110 transition-transform " :src="bebida.strDrinkThumb" :alt="'bebida' + bebida.strDrink" />
      </div>
      <div class="p-4 space-y-4">
        <h2 class="font-semibold text-amber-600 text-center text-xl truncate">
          {{ bebida.strDrink }}
        </h2>
        <button
          @click="handleClick(bebida.idDrink)"
          class="block rounded w-full py-2 bg-amber-400 hover:tracking-widest transition-all text-white font-semibold"
        >
          Ver Detalles
        </button>
      </div>
    </article>
</template>
