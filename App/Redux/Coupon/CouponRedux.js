import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import store from 'App/Redux';

/* ------------- Initial State ------------- */
export  const INITIAL_STATE = Immutable({
  coupons: {},
  error: false,
  errorMessage: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchCoupons: ["coupons"],
});

/* ------------- Reducers ------------- */
export const fetchCoupons = (state = INITIAL_STATE, action) => {
  return state.merge({
    adsList: action.coupons,
  });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_COUPONS]: fetchCoupons,
  [Types.CLEAR_COUPONS]: clearReducer,
});
