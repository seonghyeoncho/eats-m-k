import React from 'react';
import { dbService } from '../../../firebase';
import OrderDirect from './OrderDirect';

interface Props {

    text: string;
    totalPrice:number | undefined

}

const OrderD = ({text,totalPrice}:Props) => {

    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    const bucket:any = JSON.parse(window.localStorage.getItem('bucket')!);


    const onSubmit = () => {
          
        dbService.collection(`${store}`).doc(`${table}`)
          .update({

            'bucket':[
              ...bucket
            ],
            'orderAt' : Date.now(),
            'orderAt_R' : -Date.now(),
            'orderStatus' : true ,

      
          })
          .then(() => {

            console.log("Document successfully written!");
              
          })
          .catch((error) => {
              console.error("Error writing document: ", error);
          });
      
      }

      const cancle = () => {
      
      }

    return <OrderDirect store={store} table={table} text={text} onSubmit={onSubmit} cancle={cancle}/>
}

export default OrderD;