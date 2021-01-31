const SET_CLIENT_ID = 'setClientId/SET_CLIENT_ID' as const;

export const setId = (id:string) => ({
    type:SET_CLIENT_ID,
    payload:{
        id
    }
});

type IdAction = 
    | ReturnType<typeof setId>;

type IdState = {
    id:string
};

const initialState:IdState = {
    id:''
};

const idSet = (
    state:IdState = initialState,
    action: IdAction
): IdState => {
    switch(action.type){
        case SET_CLIENT_ID :
            return {
                id : action.payload.id
            }
        default :
         return state
    }
};

export default idSet;