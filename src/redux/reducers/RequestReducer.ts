import { RequestAction } from '../actions';
import { Action } from '../Types';

export interface Request {
    request:string
};

const initialState:Request = {
    request:'',
}

const RequestReducer = (state:Request = initialState, action:Action) => {
    switch(action.type){
        case RequestAction.Types.S_REQUEST:
            return {
                request:action.payload.request
            }
        default:
            return state;
    }

};
export default RequestReducer;