export interface StoreFromQuery{
    store:string | string[] | null;
};

export interface TableFromQuery{
    table:string | string[] | null;
};

export interface TotalPrice{
    totalPrice: number | undefined;
};

export interface OrderStatus{
    orderStatus: boolean | undefined;
};