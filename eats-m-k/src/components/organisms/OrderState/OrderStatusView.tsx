import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../atoms/BackButton/BackButton';
import OrderStatusItem from '../../atoms/OrderStatus/OrderStatusItem';


type Props = {
    
    orderList:any
    
}

const OrderStatusView = ({orderList}:Props) => {

    return(
        <div>
            <BackButton text={'뒤로가기'}/>
            
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