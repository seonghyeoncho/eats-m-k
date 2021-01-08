import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { resetOrder } from '../../../modules/orderMenus';
import { setState } from '../../../modules/orderState';
import { resetPrice } from '../../../modules/totalPrice';
import Order from './Order';
interface Props {

    text: string;
}

const OrderContainer = ({text}:Props) => {

    const {store, table,orderList } = useSelector((state:RootState)=>({
        
        store:state.storeSet.store,
        table:state.tableSet.table,
        orderList:state.orderMenus
    }));

    const dispatch = useDispatch();

    const onSubmit = () => {
  

          
        dbService.collection(`${store}`).doc(`${table}`)
          .set({
            orderList,
            orderAt: - Date.now(),
            check:false
      
          })
          .then(function() {
            console.log("Document successfully written!");
            dispatch(resetOrder());
            dispatch(resetPrice());
            dispatch(setState());
              
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
      
      }


    return <Order store={store} table={table} text={text} onSubmit={onSubmit}/>
}

export default OrderContainer;