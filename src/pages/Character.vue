<template>
  <h1>Character Page</h1>
</template>

<style lang="stylus" scoped>

</style>

<script>
export default {
  name: 'Character',
  props: {
    id: {
      type: Number
    }
  },
  created(){
    console.log('this :', this);
  },
  computed: {

  }
}
</script>