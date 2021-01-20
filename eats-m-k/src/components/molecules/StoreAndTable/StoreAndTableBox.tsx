import React from 'react';
import { Link } from 'react-router-dom';
import OrderStatusButtonContainer from '../../atoms/OrderStatusButton/OrderStatusButtonContainer';
import BucketButton from '../../atoms/BucketButton/BucketButton';

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