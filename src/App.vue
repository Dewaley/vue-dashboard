<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import { ref } from "vue";
import { useFullscreen } from "@vueuse/core";

const el = (ref < HTMLElement) | (null > null);
const { toggle } = useFullscreen();
</script>

<template>
  <div ref="el">
    <Navbar :toggle="toggle" />
    <RouterView />
  </div>
</template>

<style scoped></style>
