import { Action } from '../../Types';
import { EventAction } from '../../actions';

interface param {
    dispatch: any;
};

export const EventMiddleware = ({dispatch}:param) => (
    next:any
) => (action: Action) => {
    next(action);

    if(EventAction.Types.C_EVENT_TRIGGER === action.type) {
        dispatch(EventAction.initEventState());
        setTimeout(()=>dispatch(EventAction.initEventState()), 1200);
    };
    if(EventAction.Types.C_DETAIL_EVENT_TRIGGER === action.type) {
        dispatch(EventAction.initEventState(action.payload.maxSelect));
        setTimeout(()=>dispatch(EventAction.initEventState()), 1200);
    };
    
}