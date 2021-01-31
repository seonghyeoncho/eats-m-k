const SELECT_MENU = 'selectMenu/SELECT_MENU' as const;

export const setMenu = (menu:string) => ({
    type:SELECT_MENU,
    payload:{
        menu,
    }
});

type SelectAction = 
    | ReturnType<typeof setMenu>;

type SelectState = {
    menu:string
}

const initialState: SelectState = {
    menu:""
}

const selectMenu = (
    state:SelectState = initialState,
    action:SelectAction
): SelectState => {
    switch(action.type){
        case SELECT_MENU:
            return {menu: action.payload.menu};
        default:
            return state;
    }
}

export default selectMenu;
