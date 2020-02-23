<template>
  <div>
    <span>
      {{ item.name }}
      <md-tooltip>{{ item.tooltip }}</md-tooltip>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'tooltip',
    props: {
      item: Object
    },
    data: function () {
      return {
        tooltipActive: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-avatar,
  .md-button {
    margin: 36px;
  }
</style>