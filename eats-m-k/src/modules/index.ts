import { combineReducers } from 'redux'; 
import orderMenus from './orderMenus';
import selectMenu from './selectMenu';
import totalPrice from './totalPrice';
import storeSet from './setStore';
import tableSet from './setTable';
import counters from './counters';
import stateSet from './orderState'
import detailViewTotalPrice from './detailViewTotalPrice';
import myBase from './getMenus';
import myBucket from './getBucket';

const rootReducer = combineReducers({
    totalPrice,
    orderMenus,
    selectMenu,
    storeSet,
    tableSet,  
    counters,
    stateSet,
    detailViewTotalPrice,
    myBase,
    myBucket
   
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;