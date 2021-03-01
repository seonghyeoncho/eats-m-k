import { Action } from '../../Types';
import { CounterAction, OptionAction, SelectAction } from '../../actions';
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
        const items = getState().Store.menu.items;
        const count = getState().Counter.count;

        for( var i=0 ; i<items.length ; i++ ) {
            if (items[i].name === action.payload.menu) {
                const item = {
                    name: items[i].name,
                    price:items[i].price,
                    optionGroups:items[i].optionGroups,
                    count: count,
                    desc: items[i].description,
                    photoUrl:items[i].photoUrl
                };
                dispatch(SelectAction.selectMenu(item));
                dispatch(OptionAction.commendInitSelectOtpion(item.optionGroups));
                break;
            }; 
        };
        dispatch(SelectAction.resetOption());
        dispatch(CounterAction.resetCount());
    };
    if(SelectAction.Types.RESET_SELECT === action.type) {
        dispatch(SelectAction.selectMenu({}));
        dispatch(SelectAction.setMenu('', 1, []));
    };
};