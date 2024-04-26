<script setup>
import {RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";
import Notification from "@/components/UI/Notification.vue";


</script>

<template>
  <Header />
  <main class="max-w-7xl mx-auto w-5/6 xl:w-full py-12">
    <RouterView />
  </main>
  <Modal />
  <Notification />
</template>

<style>
.header {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 50vh;
}
</style>
