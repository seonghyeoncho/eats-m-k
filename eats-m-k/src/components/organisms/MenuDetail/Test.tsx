import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import OrderContainer from '../../atoms/Order/OrderContainer';
interface Props {

    totalPrice:number
}

const Test = ({totalPrice}:Props) => {

    const { orderStatus,store,table,bucket} = useSelector((state:RootState)=> ({
         
        orderStatus:state.stateSet.orderStatus,
        store:state.storeSet.store,
        table:state.tableSet.table,

        bucket:state.myBucket.bucket.data?.bucket
        
    }));

    console.log(orderStatus);
    console.log(bucket);
    
    console.log(totalPrice);

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
            
            <OrderContainer text={"취소하기"}/>
            
        </div>
    )
}
export default Test;