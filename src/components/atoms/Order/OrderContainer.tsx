import React, { useEffect, useState } from 'react';
import { dbService } from '../../../firebase/firebase';
import Order from './Order';

interface Props {
  text: string;
}

const OrderContainer = ({text}:Props) => {

  const store = window.localStorage.getItem('store');
  const table= window.localStorage.getItem('table');
  const [ receipt, setReceiptt ] = useState<any>([]);
  const [ bucket, setBucket ] = useState<any>([]);
  const [ totalPrice, setTotalPrice ] = useState<number>(0);
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
        receipttotalprice : receiptTotalPrice + totalPrice,
        totalPrice:0
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
    });

  };

  useEffect(() => {

    dbService.collection(`${store}`).doc(`${table}`).onSnapshot((doc:any)=>{
      const data = doc.data();
      setBucket(data.bucket);
      setTotalPrice(data.totalPrice);
      setReceiptTotalPrice(data.receipttotalprice);
      setReceiptt(data.receipt);
    });

  },[]);

  return <Order store={store} table={table} text={text} onSubmit={onSubmit} />

}

export default OrderContainer;