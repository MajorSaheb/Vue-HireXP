<template>
  <div>
    <Header user="Aashutosh" />
    <Tabs />
  </div>
</template>

<script>
import Header from './Header.vue';
import Tabs from './Tabs.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Tabs,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
