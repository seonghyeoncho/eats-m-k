import { EventAction } from '../actions';
import { Action } from '../Types';

export interface EventState{
    eventState: boolean,
    maxSelect:number,
};

const initialState: EventState = {
    eventState:false,
    maxSelect:0,
};

const EventReducer = (state:EventState = initialState, action:Action) => {
    switch(action.type) {
        case EventAction.Types.S_INIT_EVENT_STATE :
            return {
                maxSelect: action.payload.maxSelect,
                eventState: action.payload.state
            }

        default:
            return state;
    }
}

export default EventReducer;