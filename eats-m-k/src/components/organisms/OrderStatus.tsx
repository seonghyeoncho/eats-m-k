import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../functions/addCommaFunc';
import { RootState } from '../../modules';
import MoreMenuListInBucket from './MenuDetail/MoreMenuListInBucket';

const OrderStatus = () => {
    const { bucket, state, orderStatus} = useSelector((state:RootState)=>({

        bucket:state.myBucket.bucket.data?.bucket,
        state:state.myBucket.bucket.data?.state,
        orderStatus:state.myBucket.bucket.data?.orderStatus
        
    }));

    let text:string = '';
    if(state && orderStatus){
        text = '접수완료';

    } else if(!state && orderStatus){

        text = '주문완료';

    }



    return (
        <div>
            <div>주문현황</div>
            <div>{text}</div>

            {
                bucket?.map((doc:any)=>{
                        for(let i in doc){
                            return (
                                <div>
                                    <div>{doc.menu}{numberWithCommas(doc.price)}원</div>
                                    {
                                        doc.more !== undefined ? 
                                            
                                            <MoreMenuListInBucket more={doc.more}/>
                                        :
                                            <div>추가사항 없음</div>
                                    }
                                    

                                    <hr/>
                                </div>
                            );
                        }
                    })
                }

        </div>
    );
}

export default OrderStatus;