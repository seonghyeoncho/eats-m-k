const SET_STATE = 'orderState/SET_STATE' as const;
const SET_STATUS = 'orderState/SET_STATUS' as const;

export const setState = () => ({
    type:SET_STATE
    
});
export const setStatus = () => ({
    type:SET_STATUS
    
});

type StateAction = 
    | ReturnType<typeof setState>
    | ReturnType<typeof setStatus>;

type StateState = {
    orderState:boolean,
    orderStatus:boolean
    
};

const initialState: StateState = {
    orderState:false,
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
                orderState: !state.orderState
            };
        case SET_STATUS:
            return{
                ...state,
                orderStatus: !state.orderStatus
            }
        default:
            return state;
    }
};

export default stateSet;