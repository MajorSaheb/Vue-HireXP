import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home},
  { path: '/', component: Login},
];

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false
Vue.component('v-style', {
  render: function(createElement) {
    return createElement('style', this.$slots.default)
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
