import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import OrderContainer from '../../atoms/Order/OrderContainer';
import OrderItem from '../../atoms/OrderList/OrderItem';

const OrderListView = (props:any) => {

    const { orderStatus,store,table,totalPrice,bucket} = useSelector((state:RootState)=> ({
         
        orderStatus:state.stateSet.orderStatus,
        store:state.storeSet.store,
        table:state.tableSet.table,
        totalPrice:state.myBucket.bucket.data?.totalPrice,
        bucket:state.myBucket.bucket.data?.bucket
    }));

    console.log(orderStatus);
    console.log(bucket);
  


    return (
        <div>
            
            <div>{store}</div>
            <div>테이블 {table}</div>
            <div>{numberWithCommas(Number(totalPrice))}원</div>
            {
                bucket.map((doc:any)=>{
                    for(let i in doc){
                        return (
                            <>
                                <div>{doc.menu}
                                    <div>{doc.price}원</div> 
                                </div>
                                
                            </>
                        )
                    }
                })
            }
            
            <OrderContainer text={"취소하기"}/>
            
        </div>
    );
}

export default OrderListView;