<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import style from './styles/main.styl';
export default {
  name: 'app',
  components: {
    Home
  },
  async data() {
    console.log('this :', await this.$store.dispatch('getHash'));
  }
}
</script>
