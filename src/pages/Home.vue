<template>
  <div class="home">
    <div class="head__wrapper">
      <h1>
        <span class="head__headline">Marvel Characters</span>
      </h1>
    </div>
    <div v-if="items.length != 0" class="cards">
      <personal-card :items="items"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PersonalCard from '../components/personal-card.vue';
import api from '../../files/characters.js';

window.api = api
export default {
  name: 'home',
  components: {
    PersonalCard
  },
  data() {
    return {
      text: 'Идет загрузка...',
      items: []
    }
  },
  created() {
    let items = this.items
    let data = api.data.results
    setTimeout(() => {
      console.log('item :', data);
      data.forEach(item => {
        items.push({
          id: item.id,
          name: item.name,
          description: item.description,
          photo: `${item.thumbnail.path}.${item.thumbnail.extension}`
        })
      });
    }, 0);
  }
}
</script>

<style scoped>
</style>