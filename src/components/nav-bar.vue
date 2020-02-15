<template>
  <div class="nav-bar">
    <md-tabs md-alignment="right">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="search" md-disabled></md-tab>
      <md-tab id="tab-posts" md-label="Posts" md-disabled></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites" md-disabled></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>

</style>