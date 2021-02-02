import { LocationAction } from '../../actions';
import { Action } from '../../Types';

interface param {
    dispatch:any;
}

export const LocationMiddleware = ({ dispatch }: param) => (
    next: any
) => (action: Action) => {

    next(action);
    
    if(LocationAction.Types.INIT_LOCATION === action.type ) {
        const { store, table } = action.payload;
        window.localStorage.setItem('store', store);
        window.localStorage.setItem('table', table);
    };
};