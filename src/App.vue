<template>
  <div id="app">
    <nav-bar/>
  </div>
</template>

<script>
import navBar from './components/nav-bar.vue';
import style from './styles/main.styl';
export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>
