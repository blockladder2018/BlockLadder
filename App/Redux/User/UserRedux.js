import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import store from 'App/Redux';

/* ------------- Initial State ------------- */
export  const INITIAL_STATE = Immutable({
  username: null,
  countryCode: null,
  mobileNumber: null,
  invitationCode: null,
  verificationCode: null,
  accessToken: null,
  isLoggingIn: false,

  error: false,
  errorMessage: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  sendSmsVerification: ["code", "message"],
  registerUser: ["code", "message"],
  loginSuccess: ["code", "username", "accessToken", "message"],
  confirmSms: ["code", "message"],
});

/* ------------- Reducers ------------- */
export const sendSmsVerification = (state = INITIAL_STATE, action) => {
  return state.merge({
    adsList: action.adsList,
  });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {

});
