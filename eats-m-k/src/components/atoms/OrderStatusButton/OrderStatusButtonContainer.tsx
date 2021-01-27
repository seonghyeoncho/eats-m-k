import React, { useEffect } from 'react';
import OrderStatusButton from './OrderStatusButton';
import { dbService } from '../../../firebase';
import { useState } from 'react';

interface Props {

    store: string | string[] | null;
    table: string | string[] | null;
    state: boolean | undefined;
    orderStatus: boolean | undefined;

}
const OrderStatusButtonContainer = ({store, table, state, orderStatus}:Props) => {

    return (

        <div>

            { 
                !orderStatus ? 

                    <></> 
                : 

                    <OrderStatusButton orderStatus={orderStatus} state={state} store={store} table={table}/>
                    
            }

        </div>

    );

}

export default OrderStatusButtonContainer;