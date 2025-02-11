<template>
  <div class="card">
    <div v-for="item in items" :key="item.id" class="md-card-block">
      <md-card class="md-card">
        <md-card-media md-ratio="4:3">
        <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="item.name">
        </md-card-media>

        <md-card-header>
          <div v-if="addTooltip(item.name)" class="md-title">
            <tooltip :item="getTooltipData(item.name)"/>
          </div>
          <div v-else class="md-title">
            <div>{{ item.name }}</div>
          </div>
        </md-card-header>
        <md-card-expand>
          <md-card-actions md-alignment="right">
            <md-button :to="{ path: `/Character/${item.id}` }">Learn more</md-button>
            <md-button class="md-icon-button" :class="{ 'md-accent': checkFavorite(item.id) }" @click="addFavorite(item)">
              <md-icon>bookmark</md-icon>
            </md-button>
            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions>
          <md-card-expand-content>
            <md-card-content>{{ item.description }}</md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
    </div>
  </div>
</template>

<script>
  import tooltip from './tooltip.vue';
  import { mapState, mapMutations, mapGetters } from 'vuex';
  export default {
    name: 'PersonalCard',
    props: {
      items: Array
    },
    components: {
      tooltip
    },
    computed: {
      ...mapGetters('favorite', ['getAllFavorites'])
    },
    methods: {
      ...mapMutations('favorite', ['set', 'deleteFavorite']),
      ...mapState('favorite', ['favoriteItems']),
      addTooltip: function (name) {
        if (name.match(/\([a-z, A-Z]*\)/)){
            return true
        } else {
            return false
        }
      },
      getTooltipData (name) {
        return {
          name: name.split(/\([a-z, A-Z]*\)/)[0],
          tooltip: name.match(/\([a-z, A-Z]*\)/)[0]
        }
      },
      addFavorite(item) {
        if (this.checkFavorite(item.id)) {
          this.deleteFavorite(item)
        } else {
          this.set(item)
        }
      },
      checkFavorite (id) {
        let items = this.getAllFavorites
        let index = items.findIndex(item => item.id === id)
        if (index === -1) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cards {
    padding: 10px 20px;
  }
  .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .md-card-block {
    display: inline-block;
    min-height: 400px
  }
</style>
