<script setup>
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  SquaresPlusIcon,
  ArrowsPointingOutIcon,
  BellIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
// import { profilePic } from "../assets/images/profilepic.webp";
import { defineProps } from "vue";

const props = defineProps(["toggle"]);
</script>

<template>
  <nav>
    <div class="fragments">
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
    </div>
    <div class="fragments">
      <SquaresPlusIcon class="icon" />
      <ArrowsPointingOutIcon class="icon" @click="toggle" />
      <span class="bell"><BellIcon class="icon" /></span>
      <div class="acc-details">
        <img src="../assets/images/profilepic.webp" alt="" class="acc-pic" />
        <span>Henry</span>
        <ChevronDownIcon class="icon" />
      </div>
      <Cog6ToothIcon class="icon" />
    </div>
  </nav>
</template>

<style scoped>
.icon {
  height: 2.5rem;
  cursor: pointer;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--dark-text);
  padding: 2rem;
  background: var(--nav-bg);
}
.acc-pic {
  object-fit: cover;
  height: 3rem;
  border-radius: 50%;
}
.fragments,
.acc-details {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.fragments form {
  display: flex;
  align-items: center;
  height: 3rem;
  background: var(--card-bg);
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  padding: 0 1rem;
  gap: 1rem;
}
.fragments form .icon {
  height: 1.5rem;
}
.fragments form .search {
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  outline: none;
}
.acc-details .icon {
  height: 1rem;
}
.acc-details {
    cursor: pointer;
}
</style>
