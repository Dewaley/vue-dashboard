<script setup>
import { ref, computed } from "vue";
import {
  PencilSquareIcon,
  TrashIcon,
  HandThumbUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/vue/24/outline";

const state = ref(1);

const setState = (a) => {
  state.value = a;
};
</script>

<template>
  <div class="main">
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
            <PencilSquareIcon class="icon edit" />
            <TrashIcon class="icon del" />
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
            <PencilSquareIcon class="icon edit" />
            <TrashIcon class="icon del" />
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
            <PencilSquareIcon class="icon edit" />
            <TrashIcon class="icon del" />
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
            <PencilSquareIcon class="icon edit" />
            <TrashIcon class="icon del" />
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
            <PencilSquareIcon class="icon edit" />
            <TrashIcon class="icon del" />
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
            <PencilSquareIcon class="icon edit" />
            <TrashIcon class="icon del" />
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
            <PencilSquareIcon class="icon edit" />
            <TrashIcon class="icon del" />
          </div>
        </li>
      </ul>
      <button>Add new task</button>
    </div>
    <div class="popular-posts card">
      <h3>Popular post</h3>
      <table>
        <tr>
          <th>Posts</th>
          <th>Likes</th>
          <th>Comments</th>
        </tr>
        <tr>
          <td>
            <div class="contain">
              <img src="../assets/images/img1.jpg" alt="" />
              <div>
                <h3>Beautiful Day with Friends</h3>
                <p>10 Nov, 2020</p>
              </div>
            </div>
          </td>
          <td>
            <div class="contain"><HandThumbUpIcon class="icon" />324</div>
          </td>
          <td>
            <div class="contain">
              <ChatBubbleOvalLeftEllipsisIcon class="icon" />500
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="contain">
              <img src="../assets/images/img1.jpg" alt="" />
              <div>
                <h3>Beautiful Day with Friends</h3>
                <p>10 Nov, 2020</p>
              </div>
            </div>
          </td>
          <td>
            <div class="contain"><HandThumbUpIcon class="icon" />324</div>
          </td>
          <td>
            <div class="contain">
              <ChatBubbleOvalLeftEllipsisIcon class="icon" />500
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="contain">
              <img src="../assets/images/img1.jpg" alt="" />
              <div>
                <h3>Beautiful Day with Friends</h3>
                <p>10 Nov, 2020</p>
              </div>
            </div>
          </td>
          <td>
            <div class="contain"><HandThumbUpIcon class="icon" />324</div>
          </td>
          <td>
            <div class="contain">
              <ChatBubbleOvalLeftEllipsisIcon class="icon" />500
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}
.card {
  background-color: var(--card-bg);
  padding: 2rem;
}
.popular-posts {
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  overflow-x: scroll;
}
.popular-posts h3 {
  color: var(--bright-text);
  font-size: 1.25rem;
}
.popular-posts table {
  width: 100%;
}
th {
  text-align: left;
  padding: 1rem;
  font-size: 1.2rem;
}
td,
th {
  border-bottom: 2px solid var(--divide-bg);
}
td .contain {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
td img {
  height: 6rem;
  width: 8rem;
  object-fit: cover;
}
td .icon {
  height: 1.5rem;
}
.tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.tasks .selectables {
  display: flex;
  margin-top: 1rem;
}
.tasks ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 30rem;
  overflow-y: scroll;
  margin-top: 1rem;
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
.tasks ul li .fragment .edit {
  color: var(--green-text);
  cursor: pointer;
}
.tasks ul li .fragment .del {
  color: red;
  cursor: pointer;
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
  margin-top: 2rem;
}
.tasks button:hover {
  background-color: var(--dark-blue);
}
@media screen and (max-width: 1024px) {
  .main {
    grid-template-columns: 1fr;
  }
}
</style>
