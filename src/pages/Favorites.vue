<template>
  <div class="favorites">
    <h1>Marvel Characters List</h1>
    <div v-if="items.length === 0">
      <h2>Ooops, favorites not found</h2>
    </div>
    <div v-else class="favorites_table">
      <basicTable :items="items"/>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  
</style>

<script>
import basicTable from '../components/table.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Favorites',
  components: {
    basicTable
  },
  data: function () {
    return {
      items: []
    }
  },
  computed: {
    ...mapGetters('favorite', ['getAllFavorites'])
  },
  created() {
    this.items = this.getAllFavorites
  }
}
</script>