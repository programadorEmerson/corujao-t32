import { combineReducers } from 'redux';

import postsReducer from './posts';
import userReducer from './user';

const rootReducer = combineReducers({ userReducer, postsReducer });

export default rootReducer;
