import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import store from 'App/Redux';

/* ------------- Initial State ------------- */
export  const INITIAL_STATE = Immutable({
  newsList: {},
  error: false,
  errorMessage: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchNews: ["newsList"],
});

/* ------------- Reducers ------------- */
export const fetchAds = (state = INITIAL_STATE, action) => {
  return state.merge({
    newsList: action.newsList,
  });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_NEWS]: fetchNews,
  [Types.CLEAR_NEWS]: clearReducer,
});
