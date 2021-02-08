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
    options: Options[]
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
        const optionGroups = getState().Store.menu.optionGroups;
        const initialOptions: SelectedOption[]  = [];
        for( let i=0 ; i<action.payload.optionGroups.length ; i++ ) {
            for( let k=0 ; k<optionGroups.length ; k++) {
                if(action.payload.optionGroups[i] === optionGroups[k].name) {
                    const nop = optionGroups[k].options.map((opti:Option) => {return{...opti, state:false}});
                    const op:SelectedOption = {
                        name: optionGroups[k].name,
                        maxSelect:optionGroups[k].maxSelect,
                        options:nop,
                    }
                    initialOptions.push(op);
                    break;
                };
            }
        }
        dispatch(OptionAction.setSelectOption(initialOptions));
    };
    if(OptionAction.Types.C_SELECT_OPTION === action.type) {
        const options = getState().Option.option;
        const maxSelect = action.payload.maxSelect
        const name = action.payload.name;
        const state = action.payload.state;
        let ew:any[] = [];
        let test:any[] = [];
        if(maxSelect === 1) {
            for( let i=0 ; i<options.length; i++) {
                const newSelectedOptions = options[i].options.map((O:Options) => {
                    if(options[i].maxSelect === 1){
                        if(O.name === name) {
                            return {
                                name:O.name,
                                price:O.price,
                                state: true
                            }
                        } else {
                            return {
                                name:O.name,
                                price:O.price,
                                state: false
                            }
                        }
                    } else return O;
                });
                test = ew.concat({
                    name:options[i].name,
                    maxSelect: options[i].maxSelect,
                    options: newSelectedOptions,
                })
                ew = test;
            }
            dispatch(OptionAction.setSelectOption(test));
        } else {
            let count = 0;
            options.map((Op:SelectedOption) =>  {
                count = Op.options.filter((state:Options) => state.state === true).length;
            });
            if(state) {
                for( let i=0 ; i<options.length; i++) {
                    const newSelectedOptions = options[i].options.map((O:Options) => {
                        if(O.name === name) {
                            return {
                                name:O.name,
                                price:O.price,
                                state: false
                            }
                        } else return O;
                    });
                    test = ew.concat({
                        name:options[i].name,
                        maxSelect: options[i].maxSelect,
                        options: newSelectedOptions,
                    })
                    ew = test;
                }
                dispatch(OptionAction.setSelectOption(test));
            } else {
                if(count < maxSelect) {
                    for( let i=0 ; i<options.length; i++) {
                        const newSelectedOptions = options[i].options.map((O:Options) => {
                            if(O.name === name) {
                                return {
                                    name:O.name,
                                    price:O.price,
                                    state: true
                                }
                            } else return O;
                        });
                        test = ew.concat({
                            name:options[i].name,
                            maxSelect: options[i].maxSelect,
                            options: newSelectedOptions,
                        })
                        ew = test;
                    }
                    dispatch(OptionAction.setSelectOption(test));
                } else {}
            }
        }
    };
}
