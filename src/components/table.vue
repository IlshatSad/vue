<template>
  <div class="table">
    <md-table>
        <md-table-row>
          <md-table-head></md-table-head>
          <md-table-head>Name</md-table-head>
          <md-table-head>Description</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>

        <md-table-row v-for="item in items" :key="item.id" class="table_row" md-accent>
          <md-table-cell>
            <md-avatar>
              <router-link :to="{ path: `/character/${item.id}` }">
                <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="item.name">
              </router-link>
            </md-avatar>
          </md-table-cell>
          
          <md-table-cell>
            <router-link :to="{ path: `/character/${item.id}` }" class="table_link">
              {{ item.name }}
            </router-link>
          </md-table-cell>
          <md-table-cell>
            <router-link :to="{ path: `/character/${item.id}` }" class="table_link">
              {{ item.description }}
            </router-link>
          </md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button" @click="remove(item)">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'basicTable',
    props: {
      items: Array
    },
    methods: {
      ...mapMutations('favorite', ['deleteFavorite']),
      remove: function (item) {
        this.deleteFavorite(item)
      }
    },
    created(){
      console.log('this :', this);
    }
  }
</script>
<style lang="stylus" scoped>
  .table_link {
    color: rgba(0, 0, 0, 0.54) !important;
    text-decoration: none !important
  }
</style>