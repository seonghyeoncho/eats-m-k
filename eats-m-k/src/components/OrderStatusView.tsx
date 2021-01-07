import React from 'react';
import { Link } from 'react-router-dom';
import OrderStatusItem from './OrderStatusItem';


type Props = {
    orderList:any
    goBack:()=>void
}
const OrderStatusView = ({orderList,goBack}:Props) => {

    console.log(typeof(orderList));
    console.log(orderList.length === 0);
    for(let i in orderList){
        console.log(i, orderList[i].menu,orderList[i].count);
    }

    return(
        <div>
            <button onClick={goBack}>뒤로가기</button>
            
            {
                orderList.length === 0 ? 

                    <div>주문정보가 없습니다.</div>
                :
                    orderList.map((item:any)=>

                        <OrderStatusItem item={item}/>
                        
                    )
            }
        </div>
    );
}

export default OrderStatusView;