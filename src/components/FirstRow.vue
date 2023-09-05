<script setup>
import { Cog6ToothIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="card intro">
    <div>
      <img src="../assets/images/profilepic.webp" alt="" class="profile-pic" />
      <div class="deets">
        <p>Henry Cavill</p>
        <span>UI/UX designer</span>
      </div>
    </div>
    <div class="deets-container">
      <div class="deets">
        <h3>Total projects</h3>
        <p>48</p>
      </div>
      <div class="deets">
        <h3>Projects</h3>
        <p>40</p>
      </div>
      <div class="deets">
        <h3>Clients</h3>
        <p>16</p>
      </div>
    </div>
    <button><Cog6ToothIcon class="setting" />Setting</button>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--card-bg);
  border-radius: 5px;
}
.intro {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.intro div {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.intro div .profile-pic {
  object-fit: cover;
  height: 8rem;
  border: 3.5px solid var(--main-bg);
  border-radius: 50%;
}
.intro button {
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
.intro button:hover {
  background-color: var(--dark-blue);
}
.intro button .setting {
  height: 1.5rem;
}
.intro .deets {
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  font-size: 1.25rem;
}
.intro .deets-container .deets {
  align-items: center;
}
.intro .deets-container {
  gap: 3rem;
}
.intro .deets p {
  font-weight: 600;
  font-size: 1.5rem;
}
.intro .deets h3 {
  font-weight: 400;
}
@media screen and (max-width: 760px) {
  button {
    display: none !important;
  }
  .intro {
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
  }
  .intro .deets-container {
    justify-content: space-between !important;
    width: 100%;
  }
  .intro .deets-container .deets {
    align-items: start;
  }
}
</style>
