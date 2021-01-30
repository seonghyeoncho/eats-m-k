import React, { useEffect, useState } from 'react';
import StoreAndTableBox from './StoreAndTableBox';
import { dbService } from '../../../firebase/firebase';
interface Props {
    store: string | string[] | null;
    table: string | string[] | null;
}

const StoreAndTableBoxContainer = ({store, table,}:Props) => {
    const [ state, setState ] = useState<boolean>();
    const [ orderStatus, setOrderStatus ] = useState<boolean>();

    const getStateFormFire = () => {

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            setState(data.state);
            setOrderStatus(data.orderStatus);
        });
    };
    
    useEffect(()=>{
       
        getStateFormFire();
    
    },[state, orderStatus]);

    return <StoreAndTableBox store={store} table={table} state={state} orderStatus={orderStatus}/>
}
export default StoreAndTableBoxContainer;