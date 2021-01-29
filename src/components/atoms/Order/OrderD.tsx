import React, { useEffect, useState } from 'react';
import { dbService } from '../../../firebase/firebase';
import OrderDirect from './OrderDirect';

interface Props {

    text: string;
    totalPrice:number | undefined

}

const OrderD = ({text,totalPrice}:Props) => {

    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    const [ receipt, setReceiptt ] = useState<any>([]);
    const [ bucket, setBucket ] = useState<any>([]);
    const [ receiptTotalPrice, setReceiptTotalPrice ] = useState<number>(0);


    const onSubmit = () => {
      const totalMenus = receipt.concat(bucket);
      dbService.collection(`${store}`).doc(`${table}`)
        .update({

          'bucket':[],
          'receipt':[
            ...totalMenus
          ],
          'order':[
            ...bucket,
          ],
          'orderAt' : Date.now(),
          'orderAt_R' : -Date.now(),
          'orderStatus' : true ,
          'state':false,
          receipttotalprice : receiptTotalPrice + totalPrice!,
          totalPrice:0

    
        })
        .then(() => {

          console.log("Document successfully written!");
            
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
      
      }
      useEffect(() => {

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((doc:any)=>{
          const data = doc.data();
          setBucket(data.bucket);
          setReceiptTotalPrice(data.receipttotalprice);
          setReceiptt(data.receipt);
        });
    
      },[]);

    return <OrderDirect store={store} table={table} text={text} onSubmit={onSubmit}/>
}

export default OrderD;