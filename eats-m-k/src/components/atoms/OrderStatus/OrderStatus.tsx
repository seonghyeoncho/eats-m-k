import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import BackButton from '../BackButton/BackButton';
import MoreMenuList from '../../organisms/MenuDetail/MoreMenuList';

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
        <div className="orderstatus-con">
            <div className="orderstatus-nav-con">
                <BackButton text={'<'}/>
                <div className="orderstatus-nav-text">주문현황</div>
            </div>
            
            <div className="orderstatus-state-text">{text}</div>
            <div className="orderstatus-state-info-con">
                <h1>{store}</h1>
                <h3>테이블 {table}</h3>
                <h3>{numberWithCommas(totalPrice)}원</h3>
            </div>
            

            {
                bucket?.map((doc:any)=>{
                        for(let i in doc){
                            return (
                                <div className="orderstatus-content-con">

                                    <div className="orderstatus-content">
                                        <div>{doc.menu}</div>
                                        <div>{numberWithCommas(doc.itemTotalPrice)}원</div>
                                    </div>

                                    {
                                        doc.more !== undefined ? 
                                            
                                            <MoreMenuList more={doc.more}/>
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