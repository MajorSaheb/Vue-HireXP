<template>
  <div class="aboutLayout">
    <vue-carousel :data="data" :interval="5000" :controls="false" :autoplay="true" :slideOnSwipe="true" ></vue-carousel>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.js";
import VueCarousel from "@chenfengyuan/vue-carousel";

Vue.component(VueCarousel.name, VueCarousel);

export default {
  components: {
    VueCarousel
  },
  data() {
    return {
      data: [
        '<div class="container slider1"></div>',
        '<div class="container slider2"></div>',
        '<div class="container slider3"></div>'
      ]
    };
  }
};
</script>

<style>
.container{
  width: 100vh;
  height: 355px;
}
.slider1 {
  background-image: url("../assets/img1.jpg");
  background-repeat: no-repeat, repeat;
}
.slider2 {
  background-image: url("../assets/img2.jpg");
  background-repeat: no-repeat, repeat;
}
.slider3 {
  background-image: url("../assets/img3.jpg");
  background-repeat: no-repeat, repeat;
}
</style>