<template>
  <h1>Character Page</h1>
</template>

<style lang="stylus" scoped>

</style>

<script>
import character from '../../files/character';
export default {
  name: 'Character',
  props: {
    id: {
      type: Number
    }
  },
  created(){
    console.log('this :', this);
    console.log('character :', character);
  },
  computed: {

  }
}
</script>