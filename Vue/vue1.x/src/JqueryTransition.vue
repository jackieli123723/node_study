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
                <div v-if="show" transition="jqfade">hello</div>
            </div>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';
import Vue from 'vue';

// http://api.jquery.com/animate/
Vue.transition('jqfade', {
  css: false,
  enter: function (el, done) {
    $(el).css('opacity', 0)
        .animate({opacity:1}, 1000, done);
  },
  enterCancelled: (el) => $(el).stop(),
  leave: function (el, done) {
    $(el)
        .animate({opacity:0}, 1000, done);
  },
  leaveCancelled: (el) => $(el).stop()
});

export default {
  data () {
    return {
        show: false,
    };
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

</style>