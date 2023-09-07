<script setup>
import FirstRow from "../components/FirstRow.vue";
import SecondRow from "../components/SecondRow.vue";
import ThirdRow from "../components/ThirdRow.vue";
import Charts from "../components/Charts.vue";
</script>

<template>
  <main>
    <FirstRow />
    <SecondRow />
    <Charts />
    <ThirdRow />
  </main>
</template>

<style scoped>
main {
  color: var(--dark-text);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: calc(100vh - 7rem);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
