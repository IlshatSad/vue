<template>
  <div class="comics_page">
    <h1>Comics</h1>
    <div class="comics_page_selectors">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="format">Format</label>
            <md-select v-model="format" name="format" id="format">
              <md-option value="comic">Comic</md-option>
              <md-option value="magazine">Magazine</md-option>
              <md-option value="trade paperback">Trade paperback</md-option>
              <md-option value="hardcover">Hardcover</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field>
            <md-select v-model="formatType" name="formatType" id="formatType" placeholder="Comics Format">
              <md-option value="comic">Comic</md-option>
              <md-option value="collection">Collection</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field>
            <md-select v-model="dateDescriptor" name="dateDescriptor" id="dateDescriptor" placeholder="Date range">
              <md-option value="lastWeek">last week</md-option>
              <md-option value="thisWeek">this week</md-option>
              <md-option value="nextWeek">next week</md-option>
              <md-option value="thisMonth">this month</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
      <md-button class="md-accent md-raised" @click="selectorSearch">Search</md-button>
      
    </div>
    <div v-if="items.length == 0 && notFound" class="comics_page_notfound">
      <h2>Ooops</h2>
    </div>
    <div v-else class="comics_page_cards">
      <comicsCard :items="items"/>
    </div>
    <md-button class="md-accent md-raised" @click="showMore" :disabled="disableShowMoreBtn">Show more</md-button>
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
      items: [],
      format: null,
      formatType: null,
      dateDescriptor: null,
      limit: 10,
      offset: 0,
      notFound: false,
      disableShowMoreBtn: false
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
    },
    selectorSearch() {
      this.hash = this.getHashes()
      this.params = {
        dateDescriptor: this.dateDescriptor,
        formatType: this.formatType,
        format: this.format,
        limit: this.limit,
        offset: this.offset
      }
      let allParams = Object.assign({}, this.hash, this.params)
      api.getComics(allParams)
        .then(data => {
          this.items = data.data.data.results
          if (this.items.length === 0) this.notFound = true
        })
    },
    showMore() {
      this.params.offset += 21 
      let params = Object.assign({}, this.hash, this.params)
      api.getComics(params)
        .then(data => {
          this.items = [...this.items, ...data.data.data.results]
          if (this.items.length === 0) this.disableShowMoreBtn = true
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