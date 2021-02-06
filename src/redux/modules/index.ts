import { combineReducers } from 'redux'; 
import totalPrice from './totalPrice';
import storeSet from './setStore';
import tableSet from './setTable';
import counters from './counters';
import stateSet from './orderState'
import detailViewTotalPrice from './detailViewTotalPrice';
import idSet from './setClientId'

const rootReducer = combineReducers({
    totalPrice,
    storeSet,
    tableSet,  
    counters,
    stateSet,
    detailViewTotalPrice,
    idSet
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;