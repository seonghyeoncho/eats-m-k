import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appMiddleware } from './middleware/App';
import LocationReducer,  { Location } from './reducers/LocationReducer';
import StoreReducer from './reducers/StoreReducer';
import CounterReducer, { Counter } from './reducers/CounterReducer';
import DataReducer, { Data } from './reducers/DataReducer';
import { Store } from './Types';
import SelectReducer, { Select } from './reducers/SelectReducer';
import OptionReducer, {OptionSelect} from './reducers/OptionReducer';
import EventReducer, { EventState } from './reducers/EventReducer';
import GlobalLoadingReducer, { LoadingState } from './reducers/GlobalLoadingReducer';
import PaymentReducer, { Payment } from './reducers/PaymentReducer';
import RequestReducer, {Request} from './reducers/RequestReducer';

const reducer = combineReducers({
  Store: StoreReducer,
  Location: LocationReducer,
  Counter: CounterReducer,
  Data: DataReducer,
  Select: SelectReducer,
  Option: OptionReducer,
  Event: EventReducer,
  GlobalLoading: GlobalLoadingReducer,
  Payment: PaymentReducer,
  Request: RequestReducer,
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
  Select: Select;
  Option: OptionSelect;
  Event: EventState;
  GlobalLoading: LoadingState;
  Payment: Payment
  Request: Request
};

export default store;