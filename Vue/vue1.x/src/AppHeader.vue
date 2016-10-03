<template>
    <header class="jumbotron">
        <h1>{{title}}</h1>
        <h4>by {{owner}}</h4>
    </header>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components:{
  },
  props: {
    title: {
        default: 'Bootstrap ด๚ธี'
    },
    owner: {
        default: 'Chui-Wen Chiu'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>