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
        <div>
            <div>
                <div>가게 이름 : {store}</div>
                <div>테이블 : {table}</div>
            </div>
            
              <OrderStatusButtonContainer/>
            

            
            <hr/>

            
        </div>
    );

}

export default StoreAndTableBox;