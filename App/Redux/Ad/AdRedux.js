import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import store from 'App/Redux';

/* ------------- Initial State ------------- */
export  const INITIAL_STATE = Immutable({
  adsList: {},
  error: false,
  errorMessage: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchAds: ["adsList"],
});

/* ------------- Reducers ------------- */
export const fetchAds = (state = INITIAL_STATE, action) => {
  return state.merge({
    adsList: action.adsList,
  });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_ADS]: fetchAds,
  [Types.CLEAR_ADS]: clearReducer,
});
