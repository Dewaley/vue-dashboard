<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

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
const series1 = [
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
}
.card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 5px;
  /* height: 40rem; */
}
.area-graph-container {
  width: 70%;
  display: flex;
  justify-content: space-between;
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
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
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
@media screen and (max-width: 1024px) {
  .main {
    flex-direction: column;
  }
  .area-graph-container,
  .donut-container {
    width: 100%;
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
