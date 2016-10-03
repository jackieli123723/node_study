<template>
  <div>
      <h2 id="glyphicons-glyphs">
      <a class="anchor-link" v-link="'/vuex'">返回文章列表</a>
      <button class="btn" @click="editMode">編輯</button>
      </h2>
      <div class="row" v-if="mode=='view'">
          <h1 class="page-header" class="text-center">
            {{ post.title }}
          </h1>
          <div>
            <p>{{ post.content }}</p>
          </div>
      </div>
      <div class="row" v-if="mode=='update'">
        <input type="text" v-model="title" class="form-control"></input>
        <textarea class="form-control" v-model="content"></textarea>
      
        <button class="btn" @click="update()">更新</button>
        <button class="btn" @click="cancel()">取消</button>
      </div>
  </div>
</template>

<script>
import store from './store'
import { getList } from './getters'
import { updatePost } from './actions'
export default {
  data () {
    let id = this.$route.params._id;
    let old_post;
    for(let post of this.list){
        if(post._id === id){
            old_post = post;
            break;
        }
    }
    return {
        post:old_post,
        title: old_post.title,
        content: old_post.content,
        mode: 'view'
    }
  },
  store,
  vuex: {
    getters: {
      list: getList
    },
    actions: {
        updatePost : updatePost
    }
  },
  methods: {
     cancel: function(){
        this.mode = 'view';
    },
    editMode: function(){
        this.mode = 'update';
    },
    update: function(){
        this.updatePost( {
            _id: this.post._id,
            title: this.title,
            content: this.content
        });
        
        this.mode = 'view';
    }
  },
  computed: {
    
  }
}
</script>

<style scoped>
.text-center {
  text-algin: center
}
</style>