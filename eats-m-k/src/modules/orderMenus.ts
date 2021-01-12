const ADD_ORDER = 'orderMenmu/ADD_ORDER' as const;
const CANCLE_ORDER = 'orderMenmu/CANCLE_ORDER' as const;
const RESET = 'orderMenu/RESET' as const;

export const addOrder = (menu:string, count:number, price:number,id:string) => ({
    type:ADD_ORDER,
    payload: {
        menu,
        count,
        price,
        id
       
    }
    
});

export const cancleOrder = (menu:string, id:string) => ({
    type:CANCLE_ORDER,
    payload: {
        menu,
        id
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
    price:number,
    id:string
}

export type OrderState = Order[];

const initialState: OrderState = [];

const orderMenus = (
        state: OrderState = initialState,
        action:OrderAction
    ): OrderState => {
        switch(action.type){
            case ADD_ORDER:
                
                for(let i in state){
                    
                    if(state[i].id === action.payload.id){
                        console.log(state[i].id);
                        const count = state[i].count + action.payload.count;
                        state.filter(menu => menu.id !== action.payload.id);
                        return state.concat({
                            menu:action.payload.menu,
                            count:count,
                            price:action.payload.price,
                            id:action.payload.id

                        });
                    }
                }
                return state.concat({
                    menu:action.payload.menu,
                    count:action.payload.count,
                    price:action.payload.price,
                    id:action.payload.id
                   
                });
            case CANCLE_ORDER:
                return state.filter( order => order.id !== action.payload.id );
            case RESET:
                return state = initialState;
            default:
                return state
        }
    }
export default orderMenus;

