import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { setState } from '../../../modules/orderState';
import { resetPrice } from '../../../modules/totalPrice';
import Order from './Order';
import queryString from 'query-string';

interface Props {

    text: string;
}

const OrderContainer = ({text}:Props) => {

    const query = queryString.parse(window.location.search);
    const store = query.store;
    const table = query.table;

    const { totalPrice, id } = useSelector((state:RootState)=>({
        
        totalPrice:state.totalPrice.price,
        id:state.idSet.id
        
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