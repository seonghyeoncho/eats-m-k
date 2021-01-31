import { CounterAction } from '../actions';
import { Action } from '../Types';

export interface Counter {
    count:number;
};

const initialState: Counter = {
    count: 1
};

const CounterReducer = ( state = initialState, action:Action ) => {
    switch (action.type) {
        case CounterAction.Types.INCREASE:
            return { count: state.count + 1 };
        case CounterAction.Types.DECREASE:
            return { count: state.count - 1 };
        case CounterAction.Types.RESET_COUNT:
            return {count : 1 }
        default:
          return state;
    };
};

export default CounterReducer;