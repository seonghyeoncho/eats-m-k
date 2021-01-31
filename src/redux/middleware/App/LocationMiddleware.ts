import { LocationAction } from '../../actions';
import { Action } from '../../Types';
import { setLocation } from '../../actions/LocationAction';

export const LocationMiddleware = ({ dispatch }: any) => (
    next: any
) => (action: Action) => {

    next(action);
    console.log(action.type);
    if(LocationAction.Types.SET_LOCATION === action.type ) {
        console.log(action.type)
        const { store, table } = action.payload;
        console.log(action.payload);
        dispatch(setLocation(store, table));
        console.log('1');
    };
};