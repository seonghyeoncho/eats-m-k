import { Action } from '../../Types';
import { GlobalLoadingAction } from '../../actions';

interface param {
    dispatch: any;
};

export const GlobalLoadingMiddleware = ({dispatch}: param ) => (
    next:any
) => ( action:Action ) => {
    next(action);

    if(GlobalLoadingAction.Types.C_GLOBAL_LOADING_SUCCESS === action.type ) {
        dispatch(GlobalLoadingAction.setGlobalLoading(true));
    }
}