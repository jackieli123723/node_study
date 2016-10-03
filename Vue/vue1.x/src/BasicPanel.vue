<template>
    <div class="panel panel-primary">
        <div class="panel-heading">{{title}}</div>
        <div class="panel-body">
            <slot name="content">你沒有提供 slot=body </slot>
        </div>
    </div>
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
        default: ''
    }
  },
  methods: {
  }
}
</script>

<style>

</style>