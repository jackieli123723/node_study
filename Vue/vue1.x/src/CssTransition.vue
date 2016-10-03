<template>
    <div>
        <div class="panel panel-info">
            <div class="panel-heading">自訂過渡</div>
            <div class="panel-body">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="show">開</input>
                    </label>
                </div>
                <div v-if="show" transition="expand">hello</div>
            </div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">animated - bounce</div>
            <div class="panel-body">
                
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="show2">開</input>
                    </label>
                </div>
                <div class="radio" v-for="v in animated_list">
                        <label ><input type="radio" value="{{v}}" v-model="show_animated">{{v}}</input></label>
                        
                </div>
                <div v-show="show2" class="animated" :transition="show_animated">Watch me bounce</div>
            </div>
        </div>
    </div>
</template>

<script>
import AnimatedTransition from './animatedTransition';

export default {
  data () {
    return {
        show: false,
        show2: false,
        show_animated: 'bounce',
        animated_list:[
            'bounce', 'swing', 'headShake', 'shake', 'rubberBand',
            'flash', 'pulse', 'slide', 'zoom', 'roll', 'rotate', 'fade',
            'tada', 'flip', 'wobble', 'jello', 'lightSpeed', 'hinge'
        ]
    }
  },
  components:{
  },
  props: {
  },
  methods: {
  }
}
</script>

<style scoped>
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter 定義進入的開始狀態 */
/* .expand-leave 定義離開的結束狀態 */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>