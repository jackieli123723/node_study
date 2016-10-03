<template>
<div class="dragsort">
    <ul>
      <li v-for="(index, item) in list" 
          :index="index">
        {{item.name}}
      </li>
    </ul>
     <pre>{{list|json}}</pre>
  </div>
</template>

<script>
import $ from 'jquery';
import 'jquery-ui'
import 'jquery-ui/ui/widgets/sortable.js';
export default {
  replace: true,
  computed: {
    
    
  },
  methods: {
    
  },
  data () {
    return {
        list:[{
          index:0,
          name:'html'
        },{
          index:1,
          name:'css'
        },{
          index:2,
          name:'javascript'
        },{
          index:3,
          name:'nodejs'
        }]
           
    };
  },
  components:{
    
  },
  props: {
    data: {
        default: [{
            title: 'Test',
            id: 1
        },{
            title: 'Test2',
            id: 2
        }]
    },
    current: {
        default: 1
    }
  },
  
  ready: function(){
    console.log('**created');
    var _this = this;
    console.log($( ".dragsort ul li" ).length);
    $( ".dragsort ul" ).sortable({
      stop: function(event, ui){
        var $item = $(ui.item);
        var index = $item.attr('index');
        var currentIndex = $('li').index($item);
        var currentData = _this.list[index];
        
        if(index < currentIndex){
          _this.list.splice(currentIndex + 1,0, currentData);
          _this.list.splice(index,1);
        }
        else if(index > currentIndex){
          _this.list.splice(index,1);
          _this.list.splice(currentIndex ,0, currentData);
        }
        _this.list = _this.list.slice(0);
      }
    });
  }
}
</script>

<style scoped>
ul {
  padding:0;
  margin:0;
  list-style-type:none;
}

li{
  padding-left: 10px;
  margin-bottom:5px;
  padding: 8px;
  border:1px dashed #ccc;
}
li:hover{
  cursor: move;
  border-color: red;
}
</style>