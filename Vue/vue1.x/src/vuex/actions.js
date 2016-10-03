import {
    NEW_POST,
    UPDATE_POST
} from './mutation-type'

// 張貼新文章
export const newPost = ({ dispatch, state }, post) => {
  if (post.title.trim() && post.content.trim()) {
    dispatch(NEW_POST, post);
  }
};
// 更新文章
export const updatePost = ({ dispatch, state }, post) => {
  if (post.title.trim() && post.content.trim()) {
    dispatch(UPDATE_POST, post);
  }
};
