import { OptionAction } from '../actions';
import { Action } from '../Types';

interface Option {
    name: string;
    price: number;
    state:boolean;
};
interface SelectedOption {
    name: string,
    maxSelect: number,
    options: Option[]
}
export interface OptionSelect {
    option: SelectedOption[],
}

const initialState: OptionSelect = {
    option: [],
};

const OptionReducer = ( state: OptionSelect = initialState, action: Action ) => {
    switch(action.type) {
        case OptionAction.Types.S_SELECT_OPTION:
            return {
                ...state,
                option: action.payload.option
            };
        default: 
            return state;
    }
}

export default OptionReducer;