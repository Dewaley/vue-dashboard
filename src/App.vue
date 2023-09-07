<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import { ref } from "vue";
import { useFullscreen } from "@vueuse/core";
import { useHamburgerStore } from "./components/stores/HamburgerStore";
import { storeToRefs } from "pinia";

const el = (ref < HTMLElement) | (null > null);
const { toggle } = useFullscreen();

const store = useHamburgerStore();

const { hamburger } = storeToRefs(store);
</script>

<template>
  <div ref="el" class="all">
    <Sidebar />
    <div class="main-layout" :class="{ closed: hamburger }">
      <Navbar :toggle="toggle" />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.all {
  display: flex;
  overflow-x: hidden;
  height: 100%;
}
.main-layout {
  width: calc(100%);
}
.closed.main-layout {
  width: calc(100% - 7rem);
}
</style>
