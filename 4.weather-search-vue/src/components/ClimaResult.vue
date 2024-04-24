<script setup>  

  const props = defineProps({
    ciudad:{
      type:String
    },
    weather:{
      type:Object,
      required:true
    }
  })

</script>


<template>
   <section
      class="bg-white shadow max-w-md mx-auto w-full text-lg p-4"
    >
      <div>
        <p class="text-center font-bold text-3xl capitalize">
          {{ ciudad }}
        </p>
        <div>
          <p class="text-2xl text-center">
            Temperatura : <span>{{ (weather.temp - 273.15).toFixed(0) }}</span>
          </p>
          <div class="flex justify-evenly">
            <p>
              Temperatura Max :
              <span>{{ (weather.temp_max - 273.15).toFixed(0) }}</span>
            </p>
            <p>
              Temperatura Min:
              <span>{{ (weather.temp_min - 273.15).toFixed(0) }}</span>
            </p>
          </div>
          <p class="text-center">Humedad: {{ weather.humidity }}%</p>
        </div>
      </div>
    </section>
</template>

