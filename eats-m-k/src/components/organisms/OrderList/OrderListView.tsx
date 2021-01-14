import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import OrderContainer from '../../atoms/Order/OrderContainer';
import OrderItem from '../../atoms/OrderList/OrderItem';

const OrderListView = (props:any) => {

    const { orderStatus,store,table,totalPrice} = useSelector((state:RootState)=> ({
         
        orderStatus:state.stateSet.orderStatus,
        store:state.storeSet.store,
        table:state.tableSet.table,
        totalPrice:state.totalPrice.price
    }));

    console.log(orderStatus);
  


    return (
        <div>
            
            <div>{store}</div>
            <div>테이블 {table}</div>
            <div>{numberWithCommas(totalPrice)}원</div>
            
            <OrderContainer text={"취소하기"}/>
            
        </div>
    );
}

export default OrderListView;