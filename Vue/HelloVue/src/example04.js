import Vue from 'Vue'

new Vue({
	el: 'body',
    events: {
        'alert-msg': ()=>{
            alert( 'parent handle alert-msg');
        }
    },
	components: { 
        child: Vue.extend({
          template: `
            <button @click="notify">child notify</button>
            <button @click="parentNotify">parent notify</button>
          `,
          methods: {
              notify : ()=>{
                  alert( 'child msg');
              },
              parentNotify: function(){
                  this.$dispatch('alert-msg');
              }
          }
        })
    }
});
