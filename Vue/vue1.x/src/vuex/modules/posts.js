import { GET_POST, NEW_POST,UPDATE_POST } from '../mutation-type'

const state = {
  list: [
    {
      _id: '1',
      title: 'Blog#1',
      content: 'Content #1'
    },
    {
      _id: '2',
      title: 'Blog#2',
      content: 'Content #2'
    }
  ]
}

const mutations = {
  [GET_POST] (state, id) {
  },
  [NEW_POST] (state, post) {
    state.list.unshift(post)
  },
  [UPDATE_POST] (state, new_post) {
    console.log('mutation >> UPDATE_POST');
    for(let post of state.list){
        console.log([post, new_post]);
        console.log(`${post._id} === ${new_post._id}`);
        if(post._id === new_post._id){
            post.title = new_post.title;
            post.content = new_post.content;
        }
    }
  }
}

export default {
  state,
  mutations
}
