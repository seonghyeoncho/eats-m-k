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
    options:Option[],

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
                select: action.payload.select,
            };
        case SelectAction.Types.SET_MENU:
            return {
                menu:action.payload.menu,
                count:action.payload.count,
                options:action.payload.options
            }
        default:
            return state;
    };
};

export default SelectReducer;