import Constants from '../../enums/constants';

import { AnyAction } from 'redux';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
  case Constants.SIGNIN:
    return {
      ...state,
      ...payload,
    };
  default:
    return state;
  }
};

export default userReducer;
