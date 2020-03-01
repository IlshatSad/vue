<template>
  
  <div v-if="character != null" class="character">
    <!-- <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img :src="image" :alt="character.name">
        </md-card-media>
      </md-card-media-cover>
    </md-card> -->
    <div class="character_block">
      <div class="character_image">
        <img :src="image" alt="">
      </div>
      <div class="character_description">
        <h1>{{ character.name }}</h1>
        <p> {{ character.description }} </p>
        <md-button 
          class="md-raised md-accent" 
          :disabled="character.comics.available === 0"
          @click="getSources(character.comics.collectionURI, 'Comics')">
            Show Comics
        </md-button>
        <md-button 
          class="md-raised md-accent"
          :disabled="character.series.available === 0"
          @click="getSources(character.series.collectionURI, 'Series')">
            Show Series
        </md-button>
        <md-button 
          class="md-raised md-accent"
          :disabled="character.events.available === 0"
          @click="getSources(character.events.collectionURI, 'Events')">
            Show events
        </md-button>
      </div>
    </div>
    <div v-if="sources.length == 0 && requestStarted" class="character_spinner">
      <md-progress-spinner class="md-accent" md-mode="indeterminate" md-stroke="4"></md-progress-spinner>
    </div>
    <div v-else-if="sources.length > 0 && !requestStarted" class="character_source">
      <h2>{{ sourceName }}</h2>
      <comicsCard :items="sources"/>
    </div>
    <div v-else-if="!requestStarted && requestFailed">
      <h2>OOPs</h2>
    </div>
  
  </div>

</template>

<style lang="stylus" scoped>

</style>

<script>
import api from '../__data__/api/api';
import comicsCard from '../components/comics-card.vue';
import toBase64 from '../__data__/services/imageToBase64';

export default {
  name: 'Character',
  props: {
    id: {
      type: Number
    }
  },
  components: {
    comicsCard
  },
  data: () => {
    return {
      character: null,
      image: null,
      params: null,
      sources: [],
      sourceName: null,
      requestStarted: false,
      requestFailed: false
    }
  },
  computed: {},
  methods: {
    getSources: function (url, name) {
      this.sourceName = name
      this.requestStarted = true
      api.getWhatever({ url: url, params: this.params })
        .then(data => {
          this.sources = data.data.data.results
          this.requestStarted = false
          console.log('this :', this);
        })
        .catch(err => {
          console.log('err :', err);
          this.requestStarted = false
          this.requestFailed = true
        })
    }
  },
  created(){
    this.params = this.$store.getters['getHash/getHashes']
    api.getCharacter({ id: this.id, params: this.params })
      .then(data => {
        this.character = data.data.data.results[0]
        toBase64(`${this.character.thumbnail.path}.${this.character.thumbnail.extension}`)
          .then(result => {
            this.image = result
          })
      })
    console.log('this :', this);
  },
  computed: {

  }
}
</script>
<style lang="stylus" scoped>
  .character
    &_block
      display: flex
      padding-top: 10px
    &_image
      min-width: 320px
      max-width: 400px
      margin: 4px
      /* display: inline-block
      vertical-align: top */
    &_description
      padding-left: 50px
      h1
        color: #202020
    &_spinner
      text-align: center
      padding-top: 50px
    &_source
      margin-top: 50px
      h2
        text-align: center
        padding: 20px 0px
        font-size: 30px
</style>