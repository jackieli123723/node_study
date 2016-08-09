import Vue from 'Vue'

new Vue({
	el: 'body',
    data: {
        msg: 'hello'
    },
	components: { 
        child: Vue.extend({
          template: `
            <div>child {{msg}}</div>
            <input type="text" v-model="msg" />
          `,
          props: {
              msg: String
          }
        })
    }
});
