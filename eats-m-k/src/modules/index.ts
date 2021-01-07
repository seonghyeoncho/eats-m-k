import { combineReducers } from 'redux'; 
import orderMenus from './orderMenus';
import selectMenu from './selectMenu';
import totalPrice from './totalPrice';
import storeSet from './setStore';
import tableSet from './setTable';
import setData from './setData';
import counters from './counters';
import stateSet from './orderState'
import detailViewTotalPrice from './detailViewTotalPrice';

const rootReducer = combineReducers({
    totalPrice,
    orderMenus,
    selectMenu,
    storeSet,
    tableSet,
    setData,
    counters,
    stateSet,
    detailViewTotalPrice
   
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;