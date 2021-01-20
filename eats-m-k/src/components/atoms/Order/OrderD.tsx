import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { resetPrice } from '../../../modules/totalPrice';
import OrderDirect from './OrderDirect';

interface Props {

    text: string;

}

const OrderD = ({text}:Props) => {

    const {store, table, totalPrice } = useSelector((state:RootState)=>({
        
        store:state.storeSet.store,
        table:state.tableSet.table,
        totalPrice:state.totalPrice.price,

    }));

    const dispatch = useDispatch();

    const onSubmit = () => {
          
        dbService.collection(`${store}`).doc(`${table}`)
          .update({

            'orderAt' : Date.now(),
            'orderAt_R' : -Date.now(),
            'orderStatus' : true ,
            totalPrice : totalPrice,
      
          })
          .then(() => {

            console.log("Document successfully written!");
            
            dispatch(resetPrice());
              
          })
          .catch((error) => {
              console.error("Error writing document: ", error);
          });
      
      }

      const cancle = () => {

        dbService.collection(`${store}`).doc(`${table}`)
          .update({

            'bucket':[],
            totalPrice:0
            
      
          })
          .then(function() {
            console.log("Document successfully written!");
            
            dispatch(resetPrice());
              
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
      
      }

    return <OrderDirect store={store} table={table} text={text} onSubmit={onSubmit} cancle={cancle}/>
}

export default OrderD;