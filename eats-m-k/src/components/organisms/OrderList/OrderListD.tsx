import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import OrderD from '../../atoms/Order/OrderD';
import MoreMenuList from '../MenuDetail/MoreMenuList';


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
        <div className="orderlist-con">
            <div className="orderlist-info">
                <h1 className="orderlist-info-store">{store}</h1>
                <h2 className="orderlist-info-table">테이블 {table}</h2>
                <h3 className="orderlist-info-price">{numberWithCommas(Number(totalPrice))}원</h3>
            </div>
            
            
            {
                bucket.map((doc:any)=>{
                    for(let i in doc){
                        return (
                            <>
                                <div className="orderlist-content-con">
                                    <div className="orderlist-content-info-con">
                                        <div>{doc.menu}</div>
                                        <div>{numberWithCommas(doc.itemTotalPrice)}원</div>
                                    </div>

                                    <div className="orderlist-menu-con">
                                        <div className="orderlist-menu">
                                            <div>개수 : {doc.count}개</div>
                                            <div>{numberWithCommas(doc.price)}원</div>
                                        </div>
                                    
                                    
                                        <div className="orderlist-content-more">
                                            {
                                                doc.more.length !== 0 ?
                                                    <> 
                                                        
                                                            <MoreMenuList more={doc.more}/>
                                                    </>
                                                :
                                                    <></>
                                            }
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="line"></div>
                            
                            </>
                        )
                    }
                })
            }
            
            <OrderD text={"취소"}/>
        </div>

    );
};

export default OrderListD;