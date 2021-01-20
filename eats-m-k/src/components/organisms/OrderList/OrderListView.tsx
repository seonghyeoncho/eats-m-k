import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import OrderContainer from '../../atoms/Order/OrderContainer';


const OrderListView = (props:any) => {
    
    const [ buckets,setBuckets ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    const { orderStatus,store,table } = useSelector((state:RootState)=> ({
         
        orderStatus:state.stateSet.orderStatus,
        store:state.storeSet.store,
        table:state.tableSet.table,


        
    }));

    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`)
            .onSnapshot(snapShot=>{
                console.log(snapShot.data()?.bucket);
                setBuckets(snapShot.data()?.bucket);
                setTotalPrice(snapShot.data()?.totalPrice);
        })
        
    },[]);

    return (
        <div className="orderlist-con">
            <div className="orderlist-info">
                <h1 className="orderlist-info-store">{store}</h1>
                <h2>테이블 {table}</h2>
                <h3>{numberWithCommas(Number(totalPrice))}원</h3>
            </div>
            
            
            {
                buckets.map((doc:any)=>{
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
            
            <OrderContainer text={"취소하기"}/>
            
        </div>
    );
}

export default OrderListView;