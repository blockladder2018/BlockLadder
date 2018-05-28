import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import BlockLadderService from 'App/Services';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  id: null,
  ip: null,
  port: null,
  password: null,
  encryption: null,
  status: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setProxys: ['proxys'],
});

Creators.getProxys = () => {
  return (dispatch) => {
    return BlockLadderService.getProxysCall()()
      .then((apiResult) => {
        return dispatch(Creators.setProxys(apiResult.proxys[0]));
      })
      .catch(() => console.log('Error calling getProxys'));
  };
};

export default Creators;

/* ------------- Reducers ------------- */
export const setProxysReducer = (state = INITIAL_STATE, { proxys }) => {
  return state.merge({
    id: proxys.id,
    ip: proxys.ip,
    port: proxys.port,
    password: proxys.password,
    encryption: proxys.encryption,
    status: proxys.status,
  });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PROXYS]: setProxysReducer,
  [Types.CLEAR_LOGIN]: clearReducer,
});
