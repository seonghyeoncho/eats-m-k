import React, { useEffect, useState } from 'react';
import OrderStatusButtonContainer from '../../atoms/OrderStatusButton/OrderStatusButtonContainer';


type BoxProps = {
    store:string | string[] | null;
    table:string | string[] | null;
    state: boolean | undefined
    orderStatus: boolean | undefined
}

const StoreAndTableBox = ({store, table, state, orderStatus}:BoxProps) => {

    return(
        <div className="store-nav-con">

            <div className="store-nav">
                <div className="store-nav-store">{store}</div>
                <div className="store-nav-table">테이블 {table}</div>
                
            </div>
            <div className="order-status-bt">
                <OrderStatusButtonContainer store={store} table={table} state={state} orderStatus={orderStatus}/>
            </div>
           
            
        </div>
    );

}

export default StoreAndTableBox;