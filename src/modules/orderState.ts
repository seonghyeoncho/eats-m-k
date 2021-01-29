const SET_STATE = 'orderState/SET_STATE' as const;
const SET_STATUS = 'orderState/SET_STATUS' as const;

export const setState = (state:boolean) => ({
    type:SET_STATE,
    payload:{
        state
    }
    
});
export const setStatus = (orderStatus:boolean) => ({
    type:SET_STATUS,
    payload:{
        orderStatus
    }
    
});

type StateAction = 
    | ReturnType<typeof setState>
    | ReturnType<typeof setStatus>;

type StateState = {
    state:boolean,
    orderStatus:boolean
    
};

const initialState: StateState = {
    state:false,
    orderStatus:false
};

const stateSet = (
    state: StateState = initialState,
    action: StateAction
): StateState => {
    switch(action.type){
        case SET_STATE:
            return{
                ...state,
                state: action.payload.state
            };
        case SET_STATUS:
            return{
                ...state,
                orderStatus: action.payload.orderStatus
            }
        default:
            return state;
    }
};

export default stateSet;