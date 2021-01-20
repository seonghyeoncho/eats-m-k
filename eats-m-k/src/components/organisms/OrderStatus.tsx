import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dbService } from '../../firebase';
import numberWithCommas from '../../functions/addCommaFunc';
import { RootState } from '../../modules';
import BackButton from '../atoms/BackButton/BackButton';
import MoreMenuListInBucket from './MenuDetail/MoreMenuListInBucket';

const OrderStatus = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    
    const { bucket, state, orderStatus,store, table} = useSelector((state:RootState)=>({

        bucket:state.myBucket.bucket.data?.bucket,
        orderStatus:state.stateSet.orderStatus,
        state:state.stateSet.state,
        store:state.storeSet.store,
        table:state.tableSet.table

        
    }));

    let text:string = '';
    if(state && orderStatus){
        text = '접수완료';

    } else if(!state && orderStatus){

        text = '주문완료';

    }
    useEffect(()=>{
        dbService.collection(`${store}`).doc(`${table}`).get().then(
            (doc:any)=>{
                setTotalPrice(doc.data().totalPrice);
            }
        )
        
    },[]);

    console.log(bucket)
    console.log(totalPrice);



    return (
        <div>
            <BackButton text={'뒤로가기'}/>
            <div>주문현황</div>
            <div>{text}</div>
            <h1>{store}</h1>
            <h3>{table}</h3>
            <h3>{numberWithCommas(totalPrice)}</h3>

            {
                bucket?.map((doc:any)=>{
                        for(let i in doc){
                            return (
                                <div>
                                    <div>{doc.menu}{numberWithCommas(doc.itemTotalPrice)}원</div>
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