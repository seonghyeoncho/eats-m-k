import React from 'react';
import CancleOrderButton from './CancleOrderButton';

interface Props {
    id:string
    price:number
    bucket: any
}
const CancleOrderButtonContainer = ({id,price,bucket}:Props) => {

    const totalPrice = window.localStorage.getItem('totalPrice');

    const cancleOrders = () => {

        if (bucket.length === 1 ){
            window.localStorage.setItem('totalPrice', (Number(totalPrice) - price).toString());
            window.localStorage.removeItem('bucket');
        } else {
            const buckett = bucket?.filter((doc:any)=> doc.id !== id );
            window.localStorage.setItem('totalPrice', (Number(totalPrice) - price).toString());
            window.localStorage.setItem('bucket', JSON.stringify(buckett));

        }
        
    }

    return (

        <CancleOrderButton cancleOrders={cancleOrders}/>

    );
}

export default CancleOrderButtonContainer;