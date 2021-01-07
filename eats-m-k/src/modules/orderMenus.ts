const ADD_ORDER = 'orderMenmu/ADD_ORDER' as const;
const CANCLE_ORDER = 'orderMenmu/CANCLE_ORDER' as const;
const RESET = 'orderMenu/RESET' as const;

export const addOrder = (menu:string, count:number, price:number) => ({
    type:ADD_ORDER,
    payload: {
        menu,
        count,
        price
       
    }
    
});

export const cancleOrder = (menu:string) => ({
    type:CANCLE_ORDER,
    payload: {
        menu
    }
    
});

export const resetOrder = () => ({
    type:RESET
});

type OrderAction = 
    | ReturnType<typeof addOrder>
    | ReturnType<typeof cancleOrder>
    | ReturnType<typeof resetOrder>;

export type Order = {
    menu:string,
    count:number,
    price:number
}

export type OrderState = Order[];

const initialState: OrderState = [];

const orderMenus = (
        state: OrderState = initialState,
        action:OrderAction
    ): OrderState => {
        switch(action.type){
            case ADD_ORDER:
                return state.concat({
                    menu:action.payload.menu,
                    count:action.payload.count,
                    price:action.payload.price
                   
                });
            case CANCLE_ORDER:
                return state.filter( order => order.menu !== action.payload.menu );
            case RESET:
                return state = initialState;
            default:
                return state
        }
    }
export default orderMenus;

