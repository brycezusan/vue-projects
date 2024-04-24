<script setup>
const props = defineProps({
  results: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="py-10">
    <h2 class="my-5 text-center text-3xl font-semibold">Cotizacion</h2>
    <div class="flex items-center justify-evenly">
      <img
        :src="'https://www.cryptocompare.com/' + results.IMAGEURL"
        alt="imagen cripto"
        class="h-24 w-24"
      />
      <div class="space-y-2 text-lg">
        <p class="font-medium">
          El precio es de :
          <span class="font-semibold">{{ results.PRICE }}</span>
        </p>
        <p class="font-medium">
          El precio más alto :
          <span class="font-semibold">{{ results.HIGHDAY }}</span>
        </p>
        <p class="font-medium">
          El precio más bajo :
          <span class="font-semibold">{{ results.LOWDAY }}</span>
        </p>
        <p class="font-medium">
          Variacion del dia:
          <span class="font-semibold">{{ results.CHANGEPCTDAY }}%</span>
        </p>
        <p class="font-medium">
          Ultima Actualización :
          <span class="font-semibold">{{ results.LASTUPDATE }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
