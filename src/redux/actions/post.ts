import Constants from '../../enums/constants';

import { requestPosts } from '../../utils/fetchSimulator';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { PostType } from '../../types/post';

export type Dispatch = ThunkDispatch<PostType[], null, AnyAction>;

export const updatePostList = (posts: PostType[]) => ({
  type: Constants.POPULATE_POSTS,
  payload: posts,
});

export const setFetching = () => ({
  type: Constants.FETCHING,
});

export const getPosts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setFetching());
      const posts = await requestPosts();
      dispatch(updatePostList(posts));
    } catch (error) {
      console.error('Erro ao localizar as postagens', error);
    }
  };
};
