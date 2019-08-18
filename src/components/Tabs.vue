<template>
  <div>
    <v-style>
      .md-button-content {
      font-size: {{ this.amount }}px;
      }
    </v-style>
    <div class="fontSilder">
      Change Tab Font Size: <input type="range" v-model.number="amount" min="0" max="40" /> {{ amount }}%
    </div>
    <md-tabs>
      <md-tab id="tab-dashboard" md-label="Dashboard"><Dashboard /></md-tab>
      <md-tab id="tab-about" md-label="About"><About /></md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { MdTabs, MdButton } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import About from "./About.vue";
import Dashboard from "./Dashboard.vue";

Vue.use(MdTabs);
Vue.use(MdButton);

export default {
  name: "Tabs",
  components: {
    About,
    Dashboard
  },
  props: {
    user: String
  },
  data: () => ({
    amount: 20
  })
};
</script>

<style>
.fontSilder {
    text-align: right;
    font-weight: 600;
    padding: 5px;
    font-size: medium;
}
input {
  display: inline-block;
}
</style>
