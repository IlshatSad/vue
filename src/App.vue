<template>
  <div id="app">
    <nav-bar/>
  </div>
</template>

<script>
import navBar from './components/nav-bar.vue';
import style from './styles/main.styl';
import { mapActions } from 'vuex';
export default {
  name: 'app',
  components: {
    navBar
  },
  data() {
    return {
      isAuthorized: false
    }
  },
  methods: {
    ...mapActions('getHash', ['requestHash']),
  },
  created: async function(){
    await this.requestHash()
  }
}
</script>
