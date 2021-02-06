import { Action } from '../../Types';
import { OptionAction } from '../../actions';
import { RootState } from '../..';

interface param {
    dispatch: any;
    getState: () => RootState;
};
interface SelectedOption {
    name: string,
    maxSelect: number,
    options: Option[]
}
interface Options {
    name: string,
    price: number,
    state: boolean, 
}
interface Option {
    name:string,
    price: number
}

export const OptionMiddleware = ({ dispatch, getState }: param) => (
    next: any
) => (action:Action) => {
    next(action);

    if(OptionAction.Types.C_INIT_SELECT_OPTION === action.type) {
        console.log(action.payload.optionGroups,'OPTION');
        const optionGroups = getState().Store.menu.optionGroups;
        const initialOptions: SelectedOption[]  = [];
        console.log(optionGroups);
        for( let i=0 ; i<action.payload.optionGroups.length ; i++ ) {
            for( let k=0 ; k<optionGroups.length ; k++) {
                if(action.payload.optionGroups[i] === optionGroups[k].name) {
                    console.log(action.payload.optionGroups[i])
                    console.log(optionGroups[k].options)
                    const nop = optionGroups[k].options.map((opti:Option) => {return{...opti, state:false}});
                    const op:SelectedOption = {
                        name: optionGroups[k].name,
                        maxSelect:optionGroups[k].maxSelect,
                        options:nop,
                    }
                    console.log(op, nop)
                    initialOptions.push(op);
                    console.log(initialOptions)
                    break;
                };
            }
        }
        console.log(initialOptions);
        dispatch(OptionAction.setSelectOption(initialOptions));
    };
    if(OptionAction.Types.C_SELECT_OPTION === action.type) {
    };
    if(OptionAction.Types.S_SELECT_OPTION === action.type) {
        
    }
}
