import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import OrderD from '../../atoms/Order/OrderD';


const OrderListD = () => {

    const [ bucket, setBucket ] = useState<any>([]);
    const [ totalPrice, setTotalPrice ] = useState<number>();
    const { orderStatus,store,table} = useSelector((state:RootState)=> ({
         
        orderStatus:state.stateSet.orderStatus,
        store:state.storeSet.store,
        table:state.tableSet.table,


        
    }));
    useEffect(()=>{
        dbService.collection(`${store}`).doc(`${table}`).get().then((doc:any)=>{
            const data = doc.data().bucket
            const totalPrice = doc.data().totalPrice
            setTotalPrice(totalPrice);
            setBucket(data);
        })
    },[]);

    return (
        <div>
            <h1>{store}</h1>
            <h2>테이블 {table}</h2>
            <h3>{numberWithCommas(Number(totalPrice))}원</h3>
            {
                bucket.map((doc:any)=>{
                    for(let i in doc){
                        return (
                            <>
                                <div>
                                    <div>{doc.menu} {numberWithCommas(doc.itemTotalPrice)}원</div>
                                    
                                    <div>개수 : {doc.count}개 {numberWithCommas(doc.price)}원</div>
                                    {
                                        doc.more.length !== 0 ?
                                            <> 
                                                {
                                                    doc.more.map((doc:any)=>{
                                                        for(let i in doc){
                                                            return <div>{i}   {numberWithCommas(doc[i])}원</div>
                                                        }
                                                    })
                                                }
                                            </>
                                        :
                                            <></>
                                    }
                                </div>
                                <hr></hr>
                                
                            </>
                        )
                    }
                })
            }
            
            <OrderD text={"취소하기"}/>

        </div>

);
};

export default OrderListD;