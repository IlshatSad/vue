<template>
  <div class="page-container">
      <md-app md-waterfall md-mode="fixed-last">
        <md-app-toolbar class="md-small md-dense md-accent">
          <div class="md-toolbar-row">
            <md-tabs class="md-accent" md-alignment="right">
              <md-tab id="tab-home" to="/" md-label="Home" exact></md-tab>
              <md-tab id="tab-test" to="/Comics " md-label="Comics" md-disabled></md-tab>
              <md-tab id="tab-favorites" to="/Favorites" md-label="Favorites"></md-tab>
              <!-- <md-tab id="tab-posts" md-label="Posts" md-disabled></md-tab> -->
            </md-tabs>
          </div>
        </md-app-toolbar>

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