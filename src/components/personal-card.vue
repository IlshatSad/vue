<template>
  <div class="card">
    <div v-for="item in items" :key="item.id" class="md-card-block">
      <md-card class="md-card md-theme-demo-dark">
        <md-card-media md-ratio="4:3">
        <img :src="item.photo" :alt="item.name">
        </md-card-media>

        <md-card-header>
        <div class="md-title">{{ item.name }}</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="right">
            <md-button>Learn more</md-button>
            <md-button class="md-icon-button">
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
  export default {
    name: 'PersonalCard',
    props: {
      items: Array
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