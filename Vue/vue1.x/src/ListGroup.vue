<template>
    <div class="list-group">
      <button v-for="v in data" class="list-group-item" @click="selected(v.id)" :class="{active: current==v.id}">{{v.title}}</button>
    </div>
</template>

<script>
// http://www.w3schools.com/bootstrap/bootstrap_progressbars.asp

export default {
  replace: true,
  computed: {
    
    
  },
  methods: {
    selected: function(v){
        this.current = v;
        
        this.$emit('selected', v);
    }
  },
  data () {
    return {
        
           
    }
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
  }
}
</script>

<style>

</style>