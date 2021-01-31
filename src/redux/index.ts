import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appMiddleware } from './middleware/App';
import LocationReducer,  { Location } from './reducers/LocationReducer';
import StoreReducer, { Store } from './reducers/StoreReducer';

const reducer = combineReducers({
  Store: StoreReducer,
  Location: LocationReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...appMiddleware))
);

export interface RootState {
  Store: Store;
  Location:Location;
};

export default store;