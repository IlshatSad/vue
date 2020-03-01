<template>
  <div class="comics">
    <div v-for="item in items" :key="item.id" class="md-card-block comics_card_block">
      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media>
            <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" alt="Skyscraper">
          </md-card-media>
        </md-card-media-cover>
      </md-card>
      <div class="comics_description">
        <h5 class="comics_name">{{ item.title }}</h5>
        <p v-if="item.creators.items.length > 0" class="comics_creator">{{ item.creators.items[0]['name'] }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .row-item-image
    a::before{
      content: ''
      display table
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
  img{
    width: 100%;
    height: auto;
  }
  .comics
    &_description
      margin-bottom: 20px
</style>

<script>
export default {
  name: 'comicsCard',
  props: {
    items: Array
  }
}
</script>