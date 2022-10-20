import {combineReducers} from 'redux';

import themeReducer from './themeReducer';
import cartitemsReducer from './cartitemReducer';

const RootReducer = combineReducers({
  theme: themeReducer,
  cartitems: cartitemsReducer,
});

export default RootReducer;
