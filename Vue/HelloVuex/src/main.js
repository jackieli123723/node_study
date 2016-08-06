
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Counter from './Counter.vue'

new Vue({
  el: 'body',
  store,
  components: { App, Counter }
})
/*
import Vue from 'vue'


new Vue({
    el: 'body'.
    store,
    components: { Counter }
})
*/