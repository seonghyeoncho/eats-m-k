import { GlobalLoadingAction }  from '../actions';
import { Action } from '../Types';
export interface LoadingState {
    loadingState: boolean
};
const initialState: LoadingState = {
    loadingState:false,
};

const GlobalLoadingReducer = (state:LoadingState = initialState, action:Action) => {
    switch(action.type) {
        case GlobalLoadingAction.Types.S_GLOBAL_LOADING_SUCCESS :
            return {
                loadingState: action.payload.loadingState
            }
        default:
            return state;
    }
}

export default GlobalLoadingReducer;