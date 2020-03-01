<template>
  <div class="comics_page">
    <h1>Comics</h1>
    <comicsCard :items="items"/>
  </div>
</template>

<script>
import api from '../__data__/api/api';
import comicsCard from '../components/comics-card.vue';

export default {
  name: 'Comics',
  components: {
    comicsCard
  },
  data: function () {
    return {
      items: []
    }
  },
  methods: {
    getHashes () {
      return this.$store.getters['getHash/getHashes']
    },
    getData (parameters) {
      let hash = this.getHashes()
      parameters = { limit: 10, offset: 0, formatType: 'comic', dateDescriptor: 'lastWeek' }
      const params = Object.assign({}, hash, parameters)
      api.getComics(params)
        .then(data => {
          console.log('data :', data)
          this.items = data.data.data.results
        })
    },
    defaultData () {
      let hash = this.getHashes()
      let parameters = { limit: 30, offset: 0, formatType: 'comic', dateDescriptor: 'lastWeek' }
      const params = Object.assign({}, hash, parameters)
      api.getComics(params)
        .then(data => {
          this.items = data.data.data.results
        })
    }
  },
  created: function () {
    this.defaultData()
    console.log('this :', this);
  }
}
</script>

<style>

</style>