import * as PostApiUtil from "../util/post_api_util"
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_EXPLORE = "RECEIVE_FEED";


export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_POSTS_BY_HASHTAG = "RECEIVE_POSTS_BY_HASHTAG";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";


export const fetchPost = id => dispatch =>
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)));

export const fetchAllPosts = () => dispatch =>
  PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)));

export const fetchUserPosts = (id) => dispatch =>
    PostApiUtil.fetchUserPosts(id).then(posts => dispatch(receiveUserPosts(posts)));
    
export const fetchFeed = () => dispatch =>
    PostApiUtil.fetchFeed().then(posts => dispatch(receiveFeed(posts)));
export const clearPosts = () => dispatch => {
  return dispatch({
    type: RECEIVE_ALL_POSTS,
    payload: []
  });
}

export const fetchExplore = () => dispatch =>
  PostApiUtil.fetchExplore().then(posts => dispatch(receiveExplore(posts)));
  
export const fetchPostsByHashtag = (id) => dispatch =>
  PostApiUtil.fetchPostsByHashtag(id).then(posts => dispatch(receivePostsByHashtag(posts)));

export const createPost = post => dispatch =>
         PostApiUtil.createPost(post).then(posts =>
           dispatch(receiveFeed(posts))
         );

export const createComment = (comment, kind) => dispatch => 
    PostApiUtil.createComment(comment, kind).then(posts => dispatch(receiveAllPosts(posts)));

export const likePost = (id, kind) => dispatch => 
  PostApiUtil.likePost(id, kind).then(posts => dispatch(receiveFeed(posts)))


export const unlikePost = (id, kind) => dispatch =>
  PostApiUtil.unlikePost(id, kind).then(posts => dispatch(receiveFeed(posts)));

export const likeModalPost = (id, kind) => dispatch =>
    PostApiUtil.likePost(id, kind).then(posts => 
      dispatch(receiveFeed(posts))
);

export const unlikeModalPost = (id, kind) => dispatch =>
    PostApiUtil.unlikePost(id, kind).then(posts =>
      dispatch(receiveFeed(posts))
    );


const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  payload: posts
})
const receiveFeed = posts => ({
  type: RECEIVE_FEED,
  payload: posts
});
const receiveExplore = posts => ({
  type: RECEIVE_EXPLORE,
  payload: posts
});
const receivePostsByHashtag = posts => ({
  type: RECEIVE_POSTS_BY_HASHTAG,
  payload: posts
});
const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  payload: posts
});
const receivePost = post => ({
  type: RECEIVE_POST,
  payload: post
});