<script setup>
import {
  ClipboardDocumentListIcon,
  ArchiveBoxArrowDownIcon,
  TagIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="row-container">
    <div class="welcome-box">
      <div class="fragment top">
        <span class="">
          <h3>Welcome back!</h3>
          <p>Saas Dashboard</p>
        </span>
        <ul class="">
          <li>&#x2022; 7+ layouts</li>
          <li>&#x2022; Multiple apps</li>
        </ul>
      </div>
      <div class="fragment img-container">
        <img src="../assets/images/woman.png" alt="" class="woman" />
      </div>
    </div>
    <div class="analysis">
      <div class="fragment">
        <div class="top">
          <ClipboardDocumentListIcon class="icon" />
          <h3>Orders</h3>
        </div>
        <div class="bottom">
          <div class="record-number">
            <h3>1,545</h3>
            <ChevronUpIcon class="icon" />
          </div>
          <div class="record-details">
            <span class="stat">+ 0.3%</span>
            <span class="detail">From previous period</span>
          </div>
        </div>
      </div>
      <div class="fragment">
        <div class="top">
          <ArchiveBoxArrowDownIcon class="icon" />
          <h3>Revenue</h3>
        </div>
        <div class="bottom">
          <div class="record-number">
            <h3>$ 28,452</h3>
            <ChevronUpIcon class="icon" />
          </div>
          <div class="record-details">
            <span class="stat">+ 0.3%</span>
            <span class="detail">From previous period</span>
          </div>
        </div>
      </div>
      <div class="fragment">
        <div class="top">
          <TagIcon class="icon" />
          <h3>Average price</h3>
        </div>
        <div class="bottom">
          <div class="record-number">
            <h3>$ 16.70</h3>
            <ChevronUpIcon class="icon" />
          </div>
          <div class="record-details">
            <span class="stat orange">0%</span>
            <span class="detail">From previous period</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
.row-container {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  /* width: calc(100vw - 3rem); */
}
.closed.main-layout .row-container {
  flex-direction: row;
}
.closed.main-layout .welcome-box {
  background-color: var(--mid-blue);
  padding: 2rem 2rem 0;
  display: flex;
  height: 18rem;
  border-radius: 5px;
  color: var(--blue-text);
  overflow: hidden;
  width: 30%;
}
.welcome-box {
  background-color: var(--mid-blue);
  padding: 2rem 2rem 0;
  display: flex;
  height: 30rem;
  border-radius: 5px;
  color: var(--blue-text);
  overflow: hidden;
  justify-content: space-between;
  width: 100%;
}
.welcome-box .fragment {
  width: 50%;
  overflow: visible;
  white-space: nowrap;
}
.welcome-box .fragment .woman {
  /* height: 80%; */
  width: 100%;
  object-fit: cover;
}
.closed.main-layout .welcome-box .fragment .woman {
  width: 100%;
  height: auto;
}
.welcome-box .fragment.img-container {
  display: flex;
  align-items: flex-end;
}
.closed.main-layout .welcome-box .fragment.top {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.25rem;
  padding-bottom: 2rem;
}
.welcome-box .fragment.top {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.5rem;
  padding-bottom: 2rem;
}
.welcome-box .fragment.top h3 {
  font-size: 2rem;
  white-space: nowrap;
}
.analysis {
  width: 100%;
  /* max-width: 70%; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 18rem;
  gap: 2rem;
  /* overflow: hidden; */
}
/* .closed.main-layout .analysis {
  width: 72.5%;
} */
.analysis .fragment {
  background-color: var(--card-bg);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
}
.analysis .fragment .top {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
}
.analysis .fragment .top h3 {
  font-weight: 400;
}
.analysis .fragment .top .icon {
  background-color: var(--mid-blue);
  height: 4rem;
  padding: 0.75rem;
  border-radius: 50%;
  color: var(--blue-text);
}
.analysis .fragment .bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.analysis .fragment .bottom .record-number,
.analysis .fragment .bottom .record-details {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.analysis .fragment .bottom .record-number .icon {
  height: 1.5rem;
  color: var(--green-text);
}
.analysis .fragment .bottom .record-number h3 {
  font-size: 2.5rem;
  font-weight: 400;
}
.analysis .fragment .bottom .record-details {
  font-size: 1.25rem;
}
.analysis .fragment .bottom .record-details .stat {
  background-color: var(--green-bg);
  color: var(--green-text);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}
.analysis .fragment .bottom .record-details .stat.orange {
  background-color: var(--orange-bg);
  color: var(--orange-text);
}
.analysis .fragment .bottom .record-details .detail {
  white-space: nowrap;
  width: 12rem;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media screen and (max-width: 1024px) {
  .row-container {
    flex-direction: column;
  }
  .closed.main-layout .row-container {
    flex-direction: column;
  }
  .welcome-box,
  .analysis {
    width: 100%;
  }
  .closed.main-layout .welcome-box {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .analysis {
    grid-template-columns: 1fr;
    height: auto;
  }
}
@media screen and (max-width: 360px) {
  .welcome-box .fragment.top h3 {
    font-size: 1.75rem;
  }
}
</style>
