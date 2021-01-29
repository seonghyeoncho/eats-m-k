import React, { useEffect } from 'react';
import OrderStatusButton from './OrderStatusButton';
import { dbService } from '../../../firebase';
import { useState } from 'react';

interface Props {

<<<<<<< HEAD
    store: string | string[] | null;
    table: string | string[] | null;
    state: boolean | undefined;
    orderStatus: boolean | undefined;

}
const OrderStatusButtonContainer = ({store, table, state, orderStatus}:Props) => {
=======
    store:string | string[] | null;
    table:string | string[] | null;

}
const OrderStatusButtonContainer = ({store, table}:Props) => {

    const [ orderStatus, setOrderStatus ] = useState<boolean>();
    const [ state, setState ] = useState<boolean>();
    


    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{

            setOrderStatus(snapShot.data().orderStatus);
            setState(snapShot.data().state);

        });

    },[]);
>>>>>>> v2

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