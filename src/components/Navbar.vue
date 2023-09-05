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
      <form @submit.prevent="" class="big-search">
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
      <MagnifyingGlassIcon class="icon search-icon" />
      <SquaresPlusIcon class="icon" />
      <ArrowsPointingOutIcon class="icon" @click="toggle" />
      <span class="bell">
        <BellIcon class="icon" />
        <p class="notif">6</p>
      </span>
      <div class="acc-details">
        <img src="../assets/images/profilepic.webp" alt="" class="acc-pic" />
        <span>Henry</span>
        <ChevronDownIcon class="icon" />
      </div>
      <Cog6ToothIcon class="icon setting" />
    </div>
  </nav>
</template>

<style scoped>
.icon {
  height: 2rem;
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
.fragments .big-search {
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
.fragments .big-search .icon {
  height: 1.5rem;
}
.fragments .big-search .search {
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
.bell {
  position: relative;
}
.bell .icon {
  height: 2rem;
}
.notif {
  position: absolute;
  top: -0.75rem;
  right: 0;
  height: 1.5rem;
  width: 1.5rem;
  background: teal;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bell .icon {
  animation: swing 2s infinite;
}
@keyframes swing {
  0% {
    scale: 1.1;
    transform: rotate(0deg);
  }
  12.5% {
    scale: 1.1;
    transform: rotate(15deg);
  }
  25% {
    scale: 1.1;
    transform: rotate(-15deg);
  }
  37.5% {
    scale: 1.1;
    transform: rotate(15deg);
  }
  50% {
    scale: 1.1;
    transform: rotate(-15deg);
  }
  62.5% {
    scale: 1.1;
    transform: rotate(15deg);
  }
  75% {
    scale: 1.1;
    transform: rotate(-15deg);
  }
  100% {
    scale: 1;
    transform: rotate(0deg);
  }
}
.setting {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.search-icon {
  display: none;
}
@media screen and (max-width: 760px) {
  .big-search {
    display: none !important;
  }
  .search-icon {
    display: initial;
  }
}
@media screen and (max-width:360px) {
  .acc-details span, .acc-details .icon {
    display: none;
  }
}
</style>
