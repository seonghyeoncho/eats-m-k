import { SelectAction } from '../actions';
import { Action, Option,  } from '../Types';

export interface Select {
    select:{
        name: string,
        price:number,
        itemTotalPrice:number,
        optionGroups: string[],
        count:number,
        options:Option[],
        desc:string
    },
    menu: string,
    count:number,
    options: Options[]

}
interface Options {
    name: string,
    price: number,
    optionCategory: string,
}
interface OptionGroups {
    name: string,
    selecOption: Option[],
    optionPrice: number,
}
const initialState: Select = {
    select: {
        name:'',
        price: 0,
        itemTotalPrice: 0,
        optionGroups: [],
        options:[],
        count: 1,
        desc:''
    },
    menu:'',
    count: 1,
    options:[],
    
};

const SelectReducer = ( state = initialState , action: Action ) => {
    switch(action.type) {
        case SelectAction.Types.SELECT_MENU:
            return {
                ...state,
                select: action.payload.select,
            };
        case SelectAction.Types.SET_MENU:
            return {
                ...state,
                menu:action.payload.menu,
                count:action.payload.count,
                options:action.payload.options
            }
        case SelectAction.Types.SELECT_OPTION:
            return {
                ...state,
                options: state.options.concat(action.payload.options),
            }
        case SelectAction.Types.DELETE_OPTION:
            return {
                ...state,
                options: state.options.filter((option:Options) => option.name !== action.payload.options.name),
            }
            
        default:
            return state;
    };
};

export default SelectReducer;