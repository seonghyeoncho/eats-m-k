import { Action } from '../../Types';
import { SelectAction } from '../../actions';
import { RootState } from '../..';

interface param {
    dispatch: any;
    getState: () => RootState;
};

export const SelectMiddleware = ({ dispatch, getState }: param) => (
    next:any
) => (action:Action) => {
    next(action);

    if(SelectAction.Types.SET_MENU === action.type) {
        console.log(action.type);
        const items = getState().Store.menu.items;
        const count = action.payload.count;
        const options = getState().Select.options;
        console.log(items);

        for( var i=0 ; i<items.length ; i++ ) {
            if (items[i].name === action.payload.menu) {
                const item = {
                    name: items[i].name,
                    price:items[i].price,
                    optionGroups:items[i].optionGroups,
                    options:options,
                    count: count,
                    itemTotalPrice:items[i].price,
                    desc: items[i].description,
                };
                dispatch( SelectAction.selectMenu(item));
                break;
            }; 
        };
    };
    if(SelectAction.Types.RESET_SELECT === action.type) {
        dispatch(SelectAction.selectMenu({}));
        dispatch(SelectAction.setMenu('', 1, []));
    };
    if(SelectAction.Types.RESET_OPTION === action.type) {
        dispatch(SelectAction.selectOptoin([]));
    };
};