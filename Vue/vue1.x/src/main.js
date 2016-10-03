import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router();

import App from './RouterApp.vue';
router.map({
    '/': {
        name: 'index',
        component: require('./App.vue')
    },
    '/bootstrap3': {
        name: 'bootstrap3',
        component: require('./bootstrap3/Bootstrap3App.vue')
    },
    '/vuex': {
        name: 'vuex',
        component: require('./VuexTest.vue')
    },
        
    '/post/:_id': {
        name: 'post',
        component: require('./vuex/Post.vue')
    },
    '/hi': {
        name: 'hi',
        // «ö»Ý¥[¸ü
        component: function (resolve) {
            require(['./ListGroup.vue'], resolve)
        }
    }
})
router.start(App, 'body') ;

// import App from './App.vue'
// new Vue({
  // el: 'body',
  // components: { App }
// })
