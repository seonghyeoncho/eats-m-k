import { LocationAction, StoreAction } from '../../actions';
import { Action } from '../../Types';

interface param {
    dispatch:any;
}

export const LocationMiddleware = ({ dispatch }: param) => (
    next: any
) => (action: Action) => {

    next(action);
    
    if(LocationAction.Types.INIT_LOCATION === action.type ) {
        dispatch(StoreAction.loadStoreFirebase(action.payload.storeId, action.payload.tableId));
        dispatch(LocationAction.setLocation(action.payload.storeId, action.payload.tableId))
    };
};