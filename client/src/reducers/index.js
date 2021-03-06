import { combineReducers } from 'redux';
import addStore from './addStoreReducer';
import editStore from './editStoreReducer';
import stores from './getStoresReducer';
import getStoreWithId from './getStoreWithIdReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routerReducer,
  addStore,
  editStore,
  stores,
  getStoreWithId
});
