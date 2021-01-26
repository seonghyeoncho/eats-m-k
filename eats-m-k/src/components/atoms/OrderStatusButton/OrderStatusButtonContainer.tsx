import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderStatusButton from './OrderStatusButton';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import { useState } from 'react';

interface Props {

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