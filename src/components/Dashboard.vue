<template>
  <div class="dashboardLayout">
    <div v-for="item in items" :key="item.id">
      <md-card>
        <md-card-header>
          <div class="md-title">Chart</div>
        </md-card-header>

        <md-card-content>
          <img :src="item.url">
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { MdCard, MdButton } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdCard);
Vue.use(MdButton);

export default {
  name: "Dashboard",
  data: () => ({
    items: [
      {
        id: 1,
        name: "Bar Chart",
        url: require("../assets/1chart.jpg")
      },
      {
        id: 2,
        name: "Pie Chart",
        url: require("../assets/2chart.jpg")
      },
      {
        id: 3,
        name: "Bar Chart",
        url: require("../assets/3chart.jpg")
      },
      {
        id: 4,
        name: "Line Chart",
        url: require("../assets/4chart.jpg")
      },
      {
        id: 5,
        name: "Multi Chart",
        url: require("../assets/5chart.jpg")
      },
      {
        id: 6,
        name: "Line Chart",
        url: require("../assets/4chart.jpg")
      }
    ]
  })
};
</script>

<style scoped>
.dashboardLayout {
  display: grid;
  grid-template-columns: auto auto auto auto;
  overflow: hidden;
  justify-content: center;
}
@media only screen and (max-width: 1340px) {
  .dashboardLayout {
    grid-template-columns: auto auto auto;
  }
}
@media only screen and (max-width: 1020px) {
  .dashboardLayout {
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width: 700px) {
  .dashboardLayout {
    grid-template-columns: auto;
  }
}
</style>
