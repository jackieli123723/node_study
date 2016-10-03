<template>
    <div>
        {{items | json}}
        <ul class="list-group" v-sortable>
            <li class="list-group-item" v-for="v in items" :style="{background: v.color}"><i class="fa fa-arrows" ></i>{{v.title}}</li>
        </ul>
    </div>
</template>

<script>

import Vue from 'vue'
import Sortable from 'vue-sortable'

Vue.use(Sortable)
export default {
  replace: true,
  computed: {
    
    
  },
  methods: {
    
  },
  data () {
    return {
        items: [{
            title: 'A0001',
            color: 'red'
        },{
            title: 'A0002',
            color: 'green'
        },{
            title: 'A0003',
            color: 'blue'
        },{
            title: 'A0004',
            color: 'yellow'
        },{
            title: 'A0005',
            color: 'black'
        }]
    }
  },
  components:{
    
  },
  props: {
    
  }
}
</script>

<style scoped>
.list-group-item{
    cursor: move;
}
</style>