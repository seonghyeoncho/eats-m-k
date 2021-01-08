import React from 'react';

import BackButton from '../../atoms/BackButton/BackButton';
import OrderContainer from '../../atoms/Order/OrderContainer';
import BucketItem from '../../molecules/BucketList/BucketItem';

interface Props {

    orderList: any
}
const BucketView = ({orderList}:Props) => {

    return (
        <div>
            <BackButton text={'뒤로가기'}/>
            
            {
                orderList.length === 0 ? 

                    <div>주문정보가 없습니다.</div>
                :
                    orderList.map((item:any)=>

                        <BucketItem item={item}/>
                        
                    )
            }
            <OrderContainer text={"더담기"}/>
            
            
        </div>
    );
}

export default BucketView;