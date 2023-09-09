<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { ref, computed } from "vue";

const selected = ref("2023");
const chartOptions = {
  chart: {
    id: "dashboard-sales-chart",
    toolbar: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0,
      opacityTo: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      style: {
        colors: "white",
      },
    },
    months: [
      "jan",
      "feb",
      "march",
      "april",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
  },
  yaxis: {
    labels: {
      style: {
        colors: "white",
      },
    },
  },
};
const series1 = computed(() => {
  if (selected.value === "2023") {
    const newSeries = [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 120, 102, 90, 110],
        labels: {
          style: {
            colors: "white",
          },
        },
      },
    ];
    return newSeries;
  } else if (selected.value === "2022") {
    const newSeries = [
      {
        name: "sales",
        data: [40, 35, 50, 49, 60, 70, 91, 120, 102, 90, 110, 90],
        labels: {
          style: {
            colors: "white",
          },
        },
      },
    ];
    return newSeries;
  } else if (selected.value === "2021") {
    const newSeries = [
      {
        name: "sales",
        data: [35, 50, 49, 60, 70, 91, 120, 102, 90, 110, 90, 97],
        labels: {
          style: {
            colors: "white",
          },
        },
      },
    ];
    return newSeries;
  } else if (selected.value === "2020") {
    const newSeries = [
      {
        name: "sales",
        data: [50, 49, 60, 70, 91, 120, 102, 90, 110, 90.4, 126],
        labels: {
          style: {
            colors: "white",
          },
        },
      },
    ];
    return newSeries;
  }
});
const series2 = [44, 55, 41];
const donutOptions = {
  chart: {
    type: "donut",
    width: "100%",
  },
  legend: {
    show: false,
  },
  colors: ["#5570E6", "#4CC390", "#F46A6A"],
  labels: ["Product A", "Product B", "Product C"],
};
</script>

<template>
  <div class="main">
    <div class="card area-graph-container">
      <div class="month">
        <h2>Earning</h2>
        <p>This month</p>
        <div class="fin-deets">
          <h1 class="money">$2100.35</h1>
          <div>
            <span class="stat"></span>
            <p>From previous period</p>
          </div>
        </div>
        <button>View details <ChevronRightIcon /></button>
        <div class="last-month">
          <p>Last month</p>
          <h2>$674.04</h2>
        </div>
      </div>
      <div class="graph-container">
        <apexchart
          type="area"
          :options="chartOptions"
          :series="series1"
        ></apexchart>
      </div>
      <div class="selectables">
        <select v-model="selected" @change="updateSeries">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
        <p>Years</p>
      </div>
    </div>
    <div class="card donut-container">
      <h1>Sales Analytics</h1>
      <div class="pie-container">
        <apexchart
          type="donut"
          :options="donutOptions"
          :series="series2"
        ></apexchart>
      </div>
      <div class="pie-deets">
        <div class="deet">
          <div>
            <span class="color"></span>
            <p>Product A</p>
          </div>
          <h4>$2100</h4>
        </div>
        <div class="deet">
          <div>
            <span class="color"></span>
            <p>Product B</p>
          </div>
          <h4>$1326</h4>
        </div>
        <div class="deet">
          <div>
            <span class="color"></span>
            <p>Product C</p>
          </div>
          <h4>$854</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 2rem;
  flex-direction: column;
}
.closed.main-layout .main {
  display: flex;
  gap: 2rem;
  flex-direction: row;
}
.card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 5px;
  /* height: 40rem; */
}
.area-graph-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.closed.main-layout .area-graph-container {
  width: 70%;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.month {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.month .last-month {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.month p {
  font-size: 1.5rem;
}
.month h1,
.month h2 {
  color: var(--bright-text);
}
.month button {
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-radius: 5px;
  background-color: var(--bright-blue);
  color: var(--bright-text);
  white-space: nowrap;
}
.month button:hover {
  background-color: var(--dark-blue);
}
.area-graph-container .graph-container {
  width: 70%;
  padding-top: 5rem;
  /* padding-left: 5rem; */
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* background-color: brown; */
  color: var(--bright-text) !important;
}
.donut-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
}
.closed.main-layout .donut-container {
  align-items: center;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}
.donut-container .pie-container {
  width: 50%;
  min-width: 250px;
}
.donut-container h1 {
  width: 100%;
  color: var(--bright-text);
}
.donut-container .pie-deets {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  justify-self: center;
}
.donut-container .pie-deets .deet {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.donut-container .pie-deets .deet div {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.5rem;
}
.donut-container .pie-deets .deet p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 6rem;
}
.donut-container .pie-deets .deet div .color {
  display: flex;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: red;
}
.donut-container .pie-deets .deet h4 {
  font-size: 1.75rem;
  color: var(--bright-text);
}
.area-graph-container .selectables {
  position: absolute;
  right: 2rem;
  border: 2px solid var(--divide-bg);
  border-radius: 5px;
  display: flex;
}
.selectables select {
  background: transparent;
  border: none;
  outline: none;
  padding: 0.5rem;
  color: var(--bright-text);
  cursor: pointer;
}
.selectables select option {
  background: var(--main-bg);
  border: none;
  outline: none;
  cursor: pointer;
}
.selectables p {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  background: var(--main-bg);
  margin-left: 0.5rem;
}
@media screen and (max-width: 1024px) {
  .main {
    flex-direction: column !important;
  }
  .area-graph-container,
  .donut-container {
    width: 100% !important;
  }
  .donut-container {
    align-items: center;
  }
  .donut-container .pie-container {
    width: 50%;
    min-width: 250px;
  }
}
@media screen and (max-width: 768px) {
  .area-graph-container {
    flex-direction: column;
  }
  .area-graph-container .graph-container {
    width: 100%;
    padding: 0;
  }
}
@media screen and (max-width: 375px) {
  .donut-container .pie-deets .deet p {
    width: 4rem;
  }
}
</style>
