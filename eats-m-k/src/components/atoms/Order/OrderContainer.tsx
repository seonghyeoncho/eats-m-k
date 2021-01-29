import React, { useEffect, useState } from 'react';
import { dbService } from '../../../firebase';
import { compareAndMerge, processA, processM } from '../../../functions/compareAndMerge';
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

  const MergeReceipt = ():any => {

    var obj:any = [];
    console.log(receipt);
    if(receipt.length !== 0){
      for(let i=0 ; i<bucket.length ; i++){
        if(compareAndMerge(receipt,bucket[i])) {
          obj = obj.concat(processM(receipt,bucket[i])[0]);
        } else {
          obj = obj.concat(processA(receipt,bucket[i], bucket[i].totalPrice)[0]);
        }
      };
    } else {
      obj = obj.concat(processA(receipt,bucket[0],bucket[0].totalPrcie)[0]);
    }
    

    return obj
  }

  const onSubmit = () => {
    const totalMenus = MergeReceipt();
    console.log(totalMenus, receipt);
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

  useEffect(()=>{
    dbService.collection(`${store}`).doc(`${table}`).get().then((doc:any)=>{
      const data = doc.data();
      setBucket(data.bucket);
      setTotalPrice(data.totalPrice);
      setReceiptTotalPrice(data.receipttotalprice);
      setReceiptt(data.receipt);

    })
  },[]);

  return <Order store={store} table={table} text={text} onSubmit={onSubmit} />
}

export default OrderContainer;