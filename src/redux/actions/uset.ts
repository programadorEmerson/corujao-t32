import Constants from '../../enums/constants';

export const signin = (dataSignin: string) => ({
  type: Constants.SIGNIN,
  payload: dataSignin,
});
