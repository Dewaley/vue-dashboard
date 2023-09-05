<script setup>
import { ref } from "vue";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";

const state = ref(1);

const setState = (a) => {
  state.value = a;
};
</script>

<template>
  <div>
    <div class="tasks card">
      <h1>Tasks</h1>
      <div class="selectables">
        <span :class="{ active: state === 1 }" @click="setState(1)">
          In Process
        </span>
        <span :class="{ active: state === 2 }" @click="setState(2)">
          Upcoming
        </span>
      </div>
      <ul>
        <li>
          <div class="fragment">
            <input type="checkbox" name="" id="" />
            <div>
              <h3>Saas Dashboard</h3>
              <p>Assigned to Mark</p>
            </div>
          </div>
          <div class="fragment">
            <PencilSquareIcon class="icon" />
            <TrashIcon class="icon" />
          </div>
        </li>
        <li>
          <div class="fragment">
            <input type="checkbox" name="" id="" />
            <div>
              <h3>Saas Dashboard</h3>
              <p>Assigned to Mark</p>
            </div>
          </div>
          <div class="fragment">
            <PencilSquareIcon class="icon" />
            <TrashIcon class="icon" />
          </div>
        </li>
        <li>
          <div class="fragment">
            <input type="checkbox" name="" id="" />
            <div>
              <h3>Saas Dashboard</h3>
              <p>Assigned to Mark</p>
            </div>
          </div>
          <div class="fragment">
            <PencilSquareIcon class="icon" />
            <TrashIcon class="icon" />
          </div>
        </li>
        <li>
          <div class="fragment">
            <input type="checkbox" name="" id="" />
            <div>
              <h3>Saas Dashboard</h3>
              <p>Assigned to Mark</p>
            </div>
          </div>
          <div class="fragment">
            <PencilSquareIcon class="icon" />
            <TrashIcon class="icon" />
          </div>
        </li>
        <li>
          <div class="fragment">
            <input type="checkbox" name="" id="" />
            <div>
              <h3>Saas Dashboard</h3>
              <p>Assigned to Mark</p>
            </div>
          </div>
          <div class="fragment">
            <PencilSquareIcon class="icon" />
            <TrashIcon class="icon" />
          </div>
        </li>
        <li>
          <div class="fragment">
            <input type="checkbox" name="" id="" />
            <div>
              <h3>Saas Dashboard</h3>
              <p>Assigned to Mark</p>
            </div>
          </div>
          <div class="fragment">
            <PencilSquareIcon class="icon" />
            <TrashIcon class="icon" />
          </div>
        </li>
        <li>
          <div class="fragment">
            <input type="checkbox" name="" id="" />
            <div>
              <h3>Saas Dashboard</h3>
              <p>Assigned to Mark</p>
            </div>
          </div>
          <div class="fragment">
            <PencilSquareIcon class="icon" />
            <TrashIcon class="icon" />
          </div>
        </li>
      </ul>
      <button>Add new task</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--card-bg);
  padding: 2rem;
}
.tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 40rem;
}
.tasks .selectables {
  display: flex;
}
.tasks ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 30rem;
  overflow-y: scroll;
}
.tasks ul li {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid var(--divide-bg);
}
.tasks ul li .icon {
  height: 1.5rem;
}
.tasks ul li .fragment {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}
.tasks .selectables {
  background-color: var(--divide-bg);
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.tasks .selectables span {
  padding: 1rem 1.5rem;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
}
.tasks .selectables .active {
  background-color: var(--bright-blue);
  color: var(--bright-text);
}
.tasks button {
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-radius: 5px;
  background-color: var(--bright-blue);
  color: var(--bright-text);
}
.tasks button:hover {
  background-color: var(--dark-blue);
}
</style>
