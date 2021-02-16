import { Action } from '../../Types';
import { OrderAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';
import { loadDataFirebase } from '../../actions/DataAction';

interface param {
    dispatch: any;
    getState: () => RootState;
};

export const OrderMiddleware = ({ dispatch, getState }: param) => (
    next:any
) => ( action:Action ) => {

    next(action);

    if(OrderAction.Types.ADD_NEW_ORDER === action.type) {
        const store = window.localStorage.getItem('store');
        const table = window.localStorage.getItem('table');
        const bucket = getState().Data.data.bucket;
        const totalPrice = getState().Data.data.total_price;
        const receiptTotalPrice = getState().Data.data.receipt_total_price;
        const receipt = getState().Data.data.receipt;
        const newReceipt = receipt.concat(bucket);

        dbService
            .collection('stores')
            .doc(`${store}`) 
            .collection('orders')
            .doc(`${table}`)
            .update({
                'bucket':[],
                'receipt_total_price':receiptTotalPrice + totalPrice,
                'total_price':0,
                'receipt':[
                    ...newReceipt
                ],
                'order_state':true,
                'state':false,
				'orderAt':Date.now()
            })
            .then(() => {
                dispatch(loadDataFirebase());
            })
            .catch((e) => console.log(e));
    };
};
/*

orders:Orders[]

Interface Orders {
	buckets: Buckets[],
	receipts: Buckets[],
	total_price: number,
	receipt_total_price: number,
	state: boolean,
	order_state: boolean,
}
Interface Buckets{
	name: string,
	price: number,
	item_id: string,
	count: number,
	options:Options_B[],
	item_total_price: number,
	item_state: boolean
}

Interface Options_B{
	option_groups: Option_B[]
}
Interface Option_B{
	option_group_name: string,
	option_list:OptionList[]
}

Interface OptionList_B{
	name: string,
	price: number,
	state: boolean,
}

item_Id = name/count/option_id[],
option_id = name/price

menus: Menus[]

Interface Menus{
	items:Item_M[],
	option_groups:OptionGroups_M[],
	category_groups: CategoryGroups_M[],
}
Interface OptionGroups_M {
	name: string,
	price: number,
	max_select: number,
	options: Options_M[],
}
Interface Options_M {
	name: string,
	price: number,
	state: boolean,
}
Interface Item_M{
	name: string,
	menu_id: string,
	price: number,
	state: boolean,
	option_groups:string[],
	description: string,
	categories: string[]
}
Interface CategoryGroups_M{
	name: string,
}
 */