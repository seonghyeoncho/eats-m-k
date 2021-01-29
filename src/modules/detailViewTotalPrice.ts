const ADD_PRICE = 'detailViewTotalPrice/ADD_PRICE' as const;
const MI_PRICE = 'detailViewTotalPrice/MI_PRICE' as const;
const RESET = 'detailViewTotalPrice/RESET' as const;

export const increase = (price:number) => ({
  type: ADD_PRICE,
  payload:{
      price
  }
});

export const decrease = (price:number) => ({
  type: MI_PRICE,
  payload:{
    price
}
});

export const resetPrice = () => ({
  type:RESET
});

type PriceAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof resetPrice>;


type PriceState = {
    price: number;
};


const initialState: PriceState = {
    price: 0
};


const detailViewTotalPrice = (
  state: PriceState = initialState,
  action: PriceAction
): PriceState => {
  switch (action.type) {
    case ADD_PRICE: 
      return { price: state.price + action.payload.price };
    case MI_PRICE:
      return { price: state.price - action.payload.price };
    case RESET:
      return { price : 0};
    default:
      return state;
  }
}

export default detailViewTotalPrice;