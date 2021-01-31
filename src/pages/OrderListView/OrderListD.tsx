import React, { useEffect } from 'react';
import { useState } from 'react';
import { dbService } from '../../firebase/firebase';
import numberWithCommas from '../../functions/addCommaFunc';
import OrderD from '../../component/Order/OrderD';
import MoreMenuList from '../../component/Detail/MoreMenuList';
import queryString from 'query-string';


const OrderListD = (props:any) => {

    const [bucket, setBucket] = useState<any>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;

    useEffect(()=>{
        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((doc:any)=>{
            const data = doc.data();
            setBucket(data.bucket);
            setTotalPrice(data.totalPrice);

        })
    },[]);

    return (
        <div className="orderlist-con">
            <div className="orderlist-info">
                <h1 className="orderlist-info-store">{store}</h1>
                <h2 className="orderlist-info-table">테이블 {table}</h2>
                <h3 className="orderlist-info-price">{numberWithCommas(Number(totalPrice))}원</h3>
            </div>
            <div className="orderlist-content-con">
                {
                    bucket.map((doc:any) => {
                        for(let i in doc){
                            return (
                                <>
                                    <div className="orderlist-content">
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
            </div>
            <OrderD text={"취소"} totalPrice={totalPrice}/>
        </div>
    );
};

export default OrderListD;