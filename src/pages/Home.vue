<template>
  <div class="home">
    <div class="head__wrapper">
      <h1>
        <span class="head__headline">Marvel Characters</span>
      </h1>
    </div>
    <div class="search_block">
      <md-toolbar class="md-accent">
        <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          
        </div>

        <md-autocomplete
          class="search"
          v-model="searchVal"
          :md-options="employees"
          md-layout="box"
          @keyup="setSearchVal">
          <label>Search...</label>
        </md-autocomplete>

        <div class="md-toolbar-section-end search-icon">
          <md-button @click="refresh" class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>
          <md-button @click="searchCharacter" class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>
        </div>
        </div>
      </md-toolbar>
    </div>
    
    <div v-if="items.length == 0 && notFound" class="cards">
      <div class="cards_notfound">
        <h2>no matches found</h2>
      </div>
    </div>
    <div v-else-if="items.length != 0">
      <personal-card :items="items"/>
      <md-button class="md-raised md-accent" @click="prevPage" :disabled="pageNumber==0">Previous</md-button>
      <md-button class="md-raised md-accent" @click="nextPage" :disabled="pageCount">Next</md-button>
    </div>
    <div v-else class="cards_loader">
      <md-progress-spinner class="md-accent" md-mode="indeterminate" md-stroke="4"></md-progress-spinner>
    </div>
  </div>
</template>

<script>
import PersonalCard from '../components/personal-card.vue';
import request from '../__data__/api/api.js';

export default {
  name: 'home',
  components: {
    PersonalCard
  },
  data() {
    return {
      items: [],
      pageNumber: 0,
      limit: 20,
      offset: 0,
      total: 0,
      notFound: false,
      countries: [],
      searchVal: null,
      employees: []
    }
  },
  methods: {
    refresh: function () {
      this.searchVal = null
      this.getData()
    },
    searchCharacter: function () {
      const { searchVal } = this
      if (searchVal != null) {
        let hash = this.getHashes()
        let params = Object.assign({}, hash, { name: searchVal })
        request.search(params)
          .then(response => {
            if (response.data.data.results.length == 0) {
              this.items = []
              this.notFound = true
            } else {
              this.items = response.data.data.results
            }
          })
      } else {
        return;
      }
    },
    setSearchVal: function (e) {
      this.searchVal = e.target.value
    },
    getHashes: function() {
      return this.$store.getters['getHash/getHashes']
    },
    getData: function () {
      this.items = []
      let hash = this.getHashes()
      request.getCharacters({ limit: this.limit, offset: this.offset, ts: hash.ts, apikey: hash.apikey, hash: hash.hash })
        .then(data => {
          let results = data.data.data.results
          results.forEach(item => {
            this.items.push(item)
          })
        })
    },
    nextPage(){
      this.pageNumber++;
      this.offset += 21;
      this.getData()
    },
    prevPage(){
      this.pageNumber--;
      this.offset -= 21;
      this.getData()
    }
  },
  computed: {
    pageCount(){
      if (this.items.length < 20) {
        return true
      } else {
        return false
      }
    }
  },
  created: async function() {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>

</style>
