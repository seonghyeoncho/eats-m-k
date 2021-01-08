import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import OrderContainer from '../../atoms/Order/OrderContainer';
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


    return (
        <div>
            
            <div>{store}</div>
            <div>테이블 {table}</div>
            {orderList.map((item:any)=>

                <OrderItem item={item}/>

            )}
            <OrderContainer text={"취소하기"}/>
            
        </div>
    );
}

export default OrderListView;