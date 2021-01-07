const ADD_MENU = 'totalPrice/ADD_MENU' as const;


export const addData = (menu:any) => ({
  type: ADD_MENU,
  payload:{
      menu
  }
});



type PriceAction =
  | ReturnType<typeof addData>;


type PriceState = {
    menu: any;
};


const initialState: PriceState = {
    menu: [
        {
            "가츠동":5800
        },
        {
            "에비동":6000
        }
    ]
      
};


const setData = (
  state: PriceState = initialState,
  action: PriceAction
): PriceState => {
  switch (action.type) {
    case ADD_MENU: 
      return { menu: action.payload.menu };
    default:
      return state;
  }
}

export default setData;