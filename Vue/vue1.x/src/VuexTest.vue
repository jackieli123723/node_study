<template>
  <div>
    <div class="row">
        <div class="col-lg-10">
            <input type="text" v-model="postTitle" class="form-control" placeholder="標題">
            <textarea class="form-control" v-model="postContent" rows="15" placeholder="內容"></textarea>
            <button @click="addNewPost(post)" class="btn btn-success col-lg-2">張貼</button>
        </div>
    </div>
    <div class="post-item" v-for="post in list">
      <h2 id="glyphicons-glyphs">
        <a class="anchor-link" v-link="{ name: 'post', params: { _id: post._id } }" >{{ post.title }}</a>
      </h2>
      <p>
       {{ post.content }}
      </p>
    </div>
  </div>
  
</template>

<script>
import store from './vuex/store'
import { getList } from './vuex/getters'
import { newPost } from './vuex/actions'

export default {
  replace: false,
  components: {

  },
  data () {
    return {
      postTitle: '',
      postContent: ''
    }
  },
  store,
  vuex: {
    // 讀
    getters: {
      list: getList
    },
    // 寫
    actions: {
      createPost: newPost   
    }
  },
  methods: {
    addNewPost(post){
        this.createPost(post);
        this.postTitle = '';
        this.postContent = '';
    }
  },
  computed: {
    post: {
      get () {
        return {
          _id: String(Date.now()),
          title: String(this.postTitle),
          content: String(this.postContent)
        }
      }
    }
  }
}
</script>

<style>

</style>
