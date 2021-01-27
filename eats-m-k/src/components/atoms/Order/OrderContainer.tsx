import React from 'react';
import { dbService } from '../../../firebase';
import Order from './Order';

interface Props {

    text: string;
}

const OrderContainer = ({text}:Props) => {

  const store = window.localStorage.getItem('store')
  const table= window.localStorage.getItem('table')
  const totalPrice = Number(window.localStorage.getItem('totalPrice'));
  const bucket = JSON.parse(window.localStorage.getItem('bucket')!);
  console.log(bucket, totalPrice, store, table);

  const onSubmit = () => {
        
      dbService.collection(`${store}`).doc(`${table}`)
        .update({
          'bucket':[
            ...bucket
          ],
          'orderAt' : Date.now(),
          'orderAt_R' : -Date.now(),
          'orderStatus' : true ,
          totalPrice : totalPrice,
          
    
        })
        .then(function() {
          console.log("Document successfully written!");
            
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    
    }


    return <Order store={store} table={table} text={text} onSubmit={onSubmit} />
}

export default OrderContainer;