import React from 'react';
import { Link } from 'react-router-dom';
import OrderStatusButtonContainer from '../../atoms/OrderStatusButton/OrderStatusButtonContainer';
import BucketButton from '../../atoms/BucketButton/BucketButton';

type BoxProps = {
    store:string | string[] | null;
    table:string | string[] | null;
    status:boolean;
}

const StoreAndTableBox = ({store, table,status}:BoxProps) => {

    return(
        <div>
            <div>가게 이름 : {store}</div>
            <div>테이블 : {table}</div>
            <OrderStatusButtonContainer status={status}/>
            <hr/>

            
            
        </div>
    );

}

export default StoreAndTableBox;