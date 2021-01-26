import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CancleOrderButton from './CancleOrderButton';
import { decrease } from '../../../modules/totalPrice';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';

interface Props {
    id:string
    price:number
    bucket: any
}
const CancleOrderButtonContainer = ({id,price,bucket}:Props) => {

    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    const totalPrice = window.localStorage.getItem('totalPrice');
    
    const dispatch = useDispatch();

    const cancleOrders = () => {
        const buckett = bucket?.filter((doc:any)=> doc.id !== id );
        console.log(totalPrice);
        
        dispatch(decrease(price));

        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
               ...buckett
                
            ],
            totalPrice: Number(totalPrice) - price

        
        });
        window.localStorage.setItem('totalPrice', (Number(totalPrice) - price).toString());

        
    }

    return (
        <CancleOrderButton cancleOrders={cancleOrders}/>
    );
}

export default CancleOrderButtonContainer;