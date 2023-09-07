<script setup>
import {
  WalletIcon,
  TagIcon,
  ArrowsRightLeftIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserIcon,
  CalendarDaysIcon,
  DocumentIcon,
  RocketLaunchIcon,
} from "@heroicons/vue/24/outline";
import { useHamburgerStore } from "../components/stores/HamburgerStore";
import { storeToRefs } from "pinia";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const store = useHamburgerStore();
const sidebar = ref(null);
const { hamburger } = storeToRefs(store);

onClickOutside(sidebar, (e) => {
  if (hamburger) {
    hamburger.value = true;
  }
});
</script>

<template>
  <div class="sidebar" :class="{ closed: hamburger }" ref="sidebar">
    <div class="logo">
      <img
        v-if="!hamburger"
        src="../assets/images/logoBig.png"
        alt=""
        class="big-logo"
      />
      <img v-else src="../assets/images/logo.svg" alt="" class="small-logo" />
    </div>
    <nav class="deets">
      <h3>APPS {{ hamburger }}</h3>
      <ul>
        <li>
          <router-link to="">
            <WalletIcon class="icon" />
            Wallet
          </router-link>
        </li>
        <li>
          <router-link to="">
            <TagIcon class="icon" />
            Buy/Sell
          </router-link>
        </li>
        <li>
          <router-link to="">
            <ArrowsRightLeftIcon class="icon" />
            Buy/Sell
          </router-link>
        </li>
        <li>
          <router-link to="">
            <CurrencyDollarIcon class="icon" />
            Lending
          </router-link>
        </li>
        <li>
          <router-link to="">
            <ShoppingCartIcon class="icon" />
            Orders
          </router-link>
        </li>
        <li>
          <router-link to="">
            <UserIcon class="icon" />
            KYC Application
          </router-link>
        </li>
        <li>
          <router-link to="">
            <CalendarDaysIcon class="icon" />
            Calendar
          </router-link>
        </li>
        <li>
          <router-link to="">
            <DocumentIcon class="icon" />
            File Manager
          </router-link>
        </li>
        <li>
          <router-link to="">
            <RocketLaunchIcon class="icon" />
            ICO Landing
          </router-link>
        </li>
      </ul>
    </nav>
    <nav class="closed-deets">
      <ul>
        <li>
          <router-link to="">
            <WalletIcon class="icon" />
            <span class="content">Wallet</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <TagIcon class="icon" />
            <span class="content">Buy/Sell</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <ArrowsRightLeftIcon class="icon" />
            <span class="content">Exchange</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <CurrencyDollarIcon class="icon" />
            <span class="content">Lending</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <ShoppingCartIcon class="icon" />
            <span class="content">Orders</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <UserIcon class="icon" />
            <span class="content">KYC Application</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <CalendarDaysIcon class="icon" />
            <span class="content">Calendar</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <DocumentIcon class="icon" />
            <span class="content">File Manager</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <RocketLaunchIcon class="icon" />
            <span class="content">ICO Landing</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 30rem;
  position: fixed;
  top: 0;
  height: 100dvh;
  overflow-y: scroll;
  overflow-x: visible;
  background-color: var(--card-bg);
  color: var(--dark-text);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 1000;
}
.logo {
  min-height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.closed-deets {
  display: none;
}
.big-logo,
.small-logo {
  height: 2.5rem;
}
ul a {
  text-decoration: none;
  color: var(--dark-text);
}
.sidebar .deets {
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 3rem;
  max-width: auto;
}
.deets ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar .icon {
  height: 1.75rem;
}

.deets ul li a {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 1.25rem;
  font-weight: 500;
  transition: 0.35s color ease-in;
}

.deets ul li a:hover {
  color: white;
  transition: 0.35s color ease-in;
}
.closed.sidebar {
  width: 7rem;
  height: 100dvh;
  gap: 0rem;
  position: relative;
  overflow-y: scroll;
  overflow-x: visible !important;
}
.closed.sidebar::-webkit-scrollbar {
  display: none;
}
.closed.sidebar .deets {
  display: none;
}
.closed.sidebar .closed-deets {
  display: block;
  background-color: var(--dark-mode-items);
  overflow-x: visible !important;
  /* background-color: red; */
}

.closed.sidebar .closed-deets ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: visible !important;
}

.closed.sidebar .closed-deets ul li {
  width: 100%;
  overflow-x: visible !important;
  position: relative;
}

.closed.sidebar .closed-deets ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  height: 6rem;
  overflow-x: visible !important;
}

.closed.sidebar .closed-deets ul li a:hover {
  background-color: #262b3c;
  color: var(--dark-mode-gray-700);
}

.closed.sidebar .closed-deets .content {
  display: none;
  background-color: #262b3c;
  color: var(--dark-mode-gray-700);
  position: absolute;
  top: 0;
  right: -5rem;
  white-space: nowrap;
  z-index: 1000;
}
/* .closed.sidebar .closed-deets ul li a .content {
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  right: -16rem;
  top: 0;
  width: 15rem;
  height: 6rem;
} */
</style>
