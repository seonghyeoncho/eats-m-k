import { combineReducers } from 'redux'; 
import selectMenu from './selectMenu';
import totalPrice from './totalPrice';
import storeSet from './setStore';
import tableSet from './setTable';
import counters from './counters';
import stateSet from './orderState'
import detailViewTotalPrice from './detailViewTotalPrice';
import myBase from './getMenus';
import myBucket from './getBucket';
import idSet from './setClientId'

const rootReducer = combineReducers({
    totalPrice,
    selectMenu,
    storeSet,
    tableSet,  
    counters,
    stateSet,
    detailViewTotalPrice,
    myBase,
    myBucket,
    idSet
   
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;