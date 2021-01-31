import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appMiddleware } from './middleware/App';
import LocationReducer,  { Location } from './reducers/LocationReducer';
import StoreReducer, { Store } from './reducers/StoreReducer';
import CounterReducer, { Counter } from './reducers/CounterReducer';
import selectMenu from './modules/selectMenu';
import totalPrice from './modules/totalPrice';
import storeSet from './modules/setStore';
import tableSet from './modules/setTable';
import stateSet from './modules/orderState'
import detailViewTotalPrice from './modules/detailViewTotalPrice';
import idSet from './modules/setClientId'
import DataReducer, { Data } from './reducers/DataReducer';

const reducer = combineReducers({
  Store: StoreReducer,
  Location: LocationReducer,
  Counter: CounterReducer,
  Data: DataReducer,
  totalPrice,
  selectMenu,
  storeSet,
  tableSet,  
  stateSet,
  detailViewTotalPrice,
  idSet,

});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...appMiddleware))
);

export interface RootState {
  Store: Store;
  Location:Location;
  Counter:Counter;
  Data: Data;
};

export default store;