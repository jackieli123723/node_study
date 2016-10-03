<template>
    <div class="copyright">Copyrights c {{year}} {{owner}} All Rights Reserved. </div>
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
    year: {
        default: 2017
    },
    owner: {
        default: 'Chui-Wen Chiu'
    }
  },
  methods: {
  }
}
</script>

<style>
.copyright {
    color:#000098;
}
</style>