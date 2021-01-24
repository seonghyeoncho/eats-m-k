import React from 'react';
import OrderStatusButtonContainer from '../../atoms/OrderStatusButton/OrderStatusButtonContainer';


type BoxProps = {
    store:string | string[] | null;
    table:string | string[] | null;
    
}

const StoreAndTableBox = ({store, table}:BoxProps) => {

    return(
        <div className="store-nav-con">

            <div className="store-nav">
                <div className="store-nav-store">{store}</div>
                <div className="store-nav-table">테이블 {table}</div>
                
            </div>
            <div className="order-status-bt">
                <OrderStatusButtonContainer/>
            </div>
           
            
        </div>
    );

}

export default StoreAndTableBox;