<template>
  <div>
    <header class="headerLayout">
      <div class="leftContent">
        <md-icon class="md-size-2x iconStyle">verified_user</md-icon>
        <h3>_HireXP</h3>
      </div>
      <div class="rightContent">
        <md-icon class="md-size-2x iconStyle">person_outline</md-icon>
        <h4>{{ user }}</h4>
        <md-button v-on:click="logout" class="md-icon-button md-accent">
          <md-icon>power_settings_new</md-icon>
        </md-button>
      </div>
    </header>
  </div>
</template>

<script>
import Vue from 'vue'
import { MdIcon, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdIcon)
Vue.use(MdButton)

export default {
  name: 'Header',
  props: {
    user: String
  },
  methods: {
    logout: function (event) {
      sessionStorage.setItem('hireXP', 'false');
      sessionStorage.removeItem('name');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.leftContent{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
}
.rightContent{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  width: 50%;

}
.headerLayout{
  display: flex;
  color: ghostwhite;
  padding: 0px 10px;
}
header{
  background-color: rgba(0,0,0,0.8);;
}
.iconStyle{
  color: blue !important;
  margin: 0;
  margin-top: 5px;
  padding: 25px;
}
</style>
