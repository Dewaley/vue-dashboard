<script setup>
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  SquaresPlusIcon,
  ArrowsPointingOutIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";
import { defineProps } from "vue";

const props = defineProps(["toggle"]);
</script>

<template>
  <nav>
    <div class="left-side">
      <Bars3Icon class="icon" />
      <form @submit.prevent="">
        <MagnifyingGlassIcon class="icon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          class="search"
        />
      </form>
      a
    </div>
    <div class="right-side">
      <SquaresPlusIcon class="icon" />
      <ArrowsPointingOutIcon class="icon" @click="toggle" />
      <span class="bell"><BellIcon class="icon" /></span>
      <span class="acc-details"></span>
      <Cog6ToothIcon class="icon" />
    </div>
  </nav>
</template>

<style scoped>
.icon {
  color: var(--dark-text);
  height: 3rem;
}
</style>
