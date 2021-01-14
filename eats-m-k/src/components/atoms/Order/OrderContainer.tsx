import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { setState } from '../../../modules/orderState';
import { resetPrice } from '../../../modules/totalPrice';
import Order from './Order';
interface Props {

    text: string;
}

const OrderContainer = ({text}:Props) => {

    const {store, table } = useSelector((state:RootState)=>({
        
        store:state.storeSet.store,
        table:state.tableSet.table,
        

    }));

    const dispatch = useDispatch();

    const onSubmit = () => {
  

          
        dbService.collection(`${store}`).doc(`${table}`)
          .update({

            'orderAt' : Date.now(),
            'orderStatus' : true 
      
          })
          .then(function() {
            console.log("Document successfully written!");
            
            dispatch(resetPrice());
              
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
      
      }


    return <Order store={store} table={table} text={text} onSubmit={onSubmit} />
}

export default OrderContainer;