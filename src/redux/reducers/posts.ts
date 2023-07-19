import Constants from '../../enums/constants';

import { AnyAction } from 'redux';

import { InitialStateType, PostType } from '../../types/post';

const INITIAL_STATE: InitialStateType = {
  posts: [] as PostType[],
  fetching: false,
};

const postsReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
  case Constants.FETCHING:
    return {
      ...state,
      fetching: true,
    };
  case Constants.NEW_POST:
    return {
      ...state,
      posts: [
        ...state.posts, 
        { 
          ...payload,
          id: state.posts[state.posts.length - 1].id + 1,
          fetching: false,
        }
      ],
    };
  case Constants.POPULATE_POSTS:
    return {
      ...state,
      posts: payload,
      fetching: false,
    };
  default:
    return state;
  }
};

export default postsReducer;
