import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { resetOrder } from '../../../modules/orderMenus';
import { setState } from '../../../modules/orderState';
import { resetPrice } from '../../../modules/totalPrice';
import ToHomeButton from '../../atoms/BackButton/BackButton';
import Order from '../../atoms/Order';
import OrderItem from '../../atoms/OrderList/OrderList';

const OrderListView = (props:any) => {

    const {orderList,orderStatus,store,table} = useSelector((state:RootState)=> ({
        orderList: state.orderMenus,
        orderStatus:state.stateSet.orderStatus,
        store:state.storeSet.store,
        table:state.tableSet.table
    }));

    console.log(orderStatus);
    console.log(orderList);
    
    const dispatch = useDispatch();

    const onSubmit = () => {
  

          
        dbService.collection(`${store}`).doc(`${table}`)
          .set({
            orderList,
            orderAt: Date.now(),
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

    return (
        <div>
            
            <div>{store}</div>
            <div>테이블 {table}</div>
            {orderList.map((item:any)=>

                <OrderItem item={item}/>

            )}
            <Order store={store} table={table} onSubmit={onSubmit}/>
        </div>
    );
}

export default OrderListView;