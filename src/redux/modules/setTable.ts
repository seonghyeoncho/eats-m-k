const SET_TABLE = 'setStore/SET_TABLE' as const;

export const setTable = ( table: string | string[] | null ) => ({
    type:SET_TABLE,
    payload:table
    
});

type TableAction = 
    | ReturnType<typeof setTable>;

type TableState = {
    table:string | string[] | null
};

const initialState: TableState = {
    table:''
};

const tableSet = (
    state: TableState = initialState,
    action: TableAction
): TableState => {
    switch(action.type){
        case SET_TABLE:
            return{
                table:action.payload
            };
        default:
            return state;
    }
};

export default tableSet;