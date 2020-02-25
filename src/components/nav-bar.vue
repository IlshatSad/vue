<template>
  <div class="page-container">
    <md-toolbar class="md-accent md-dense" md-elevation="1">
      <md-button to="/">Home</md-button>
      <md-button to="/Comics">Comics</md-button>
      <md-button to="/Favorites">Favorites</md-button>

      <div class="md-toolbar-section-end">
          <md-button to="/Login">sign in</md-button>
          <md-button to="/Logout">sign up</md-button>
        </div>
    
    </md-toolbar>

    <md-app md-waterfall md-mode="fixed-last">
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
    </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>

</style>