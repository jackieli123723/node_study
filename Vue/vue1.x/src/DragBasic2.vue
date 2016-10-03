<template>
<div >
    {{items | json}}
      <ul v-droper="items" drag-class="droper">
        <li v-dragable drag-class="draging" v-for="v in items" :style="{background: v.color}">{{v.title}}</li>
      </ul>
      <br>
      <hr>
      <table>
        <thead>
          <tr>
            <th>

            </th>
          </tr>
        </thead>
        <tbody v-droper="items" drag-class="droper">
          <tr v-dragable v-for="(index,v) in items" class="moveCursor" :style="{background: v.color}">
            <td>
              <i class="fa fa-arrows" ></i>*{{index}}*
            </td>
            <td>
              {{v.title}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>

import Vue from 'vue'
var drapPlugin = require('vue-drag-reorder')
drapPlugin.install(Vue)


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
li,tr {
    line-height: 3em;
    background-color: #f0f0f0;
    border: red solid 3px;
  }
ul,tbody {
    background-color: yellow;
}
.draging {
    border-color: red;
}
.droper {
    background-color: orange;
}
.moveCursor{
    cursor: move;
}
</style>