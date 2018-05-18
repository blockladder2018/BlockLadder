import { combineReducers } from 'redux';
import configureStore from './CreateStore';

const createStore = () => {
  const rootReducer = combineReducers({
    user: require('./User/UserRedux').reducer,
    coupon: require('./Coupon/CouponRedux'.reducer),
    wallet: require('./Wallet/WalletRedux').reducer,
    news: require('./News/NewsRedux').reducer,
    vpn: require('./Vpn/VpnRedux').reducer,
    ad: require('./Ad/AdRedux').reducer,
  });

  return configureStore(rootReducer);
};

const store = createStore();

export default store;