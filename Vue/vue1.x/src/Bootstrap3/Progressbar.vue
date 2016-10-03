<template>
    <div class="progress">
      <div class="progress-bar "  :class="[barcolor, stripedClass, animalClass]"
      
                role="progressbar" aria-valuenow="{{value}}"
      aria-valuemin="{{min}}" aria-valuemax="{{max}}" :style="{width:widthStyle}">
        {{widthStyle}}
      </div>
      
    </div>
</template>

<script>
// http://www.w3schools.com/bootstrap/bootstrap_progressbars.asp

export default {
  replace: true,
  computed: {
    widthStyle: function(){
        return `${this.percent}%`;
    },
    percent: function(){
        return parseInt(this.value/(this.max-this.min)*100);
    },
    stripedClass: function(){
        if(this.stripped == 'on'){
            return 'progress-bar-striped';
        }
        return '';
    },
    animalClass: function(){
        if(this.animal == 'on'){
            return 'active';
        }
        return '';
    }
    
  },
  methods: {
    setValue: function(v){
        this.value = Math.min(this.max, Math.max(this.min, v));
    },
  },
  data () {
    return {
        
           
    }
  },
  components:{
    
  },
  props: {
    value: {
        default: 70
    },
    max: {
        defualt: 100
    },
    min: {
        default: 0
    },
    stripped:{
        default: 'off'
    },  
    animal:{
        default: 'off'
    },
    barcolor: {
        defulat: '',
        validator: function (value) {
            return true;
            return [
                'progress-bar-success',
                'progress-bar-info',
                'progress-bar-warning',
                'progress-bar-danger'].inclues(value);
        }
    }
  }
}
</script>

<style>

</style>