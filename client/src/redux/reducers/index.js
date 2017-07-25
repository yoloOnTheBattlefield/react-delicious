import { combineReducers } from 'redux';
import addStore from './addStoreReducer';
import stores from './getStoresReducer';

export default combineReducers({
  addStore,
  stores
})
