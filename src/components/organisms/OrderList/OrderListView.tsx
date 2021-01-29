import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import OrderContainer from '../../atoms/Order/OrderContainer';
import MoreMenuList from '../MenuDetail/MoreMenuList';
import queryString from 'query-string';


const OrderListView = (props:any) => {
    
    const bucket = JSON.parse(window.localStorage.getItem('bucket')!);
    const totalPrice = Number(window.localStorage.getItem('totalPrice'));
    const store = window.localStorage.getItem('store')
    const table= window.localStorage.getItem('table')
    console.log(bucket, totalPrice,store, table);

    return (
        <div className="orderlist-con">
            <div className="orderlist-info">
                <h1 className="orderlist-info-store">{store}</h1>
                <h2 className="orderlist-info-table">테이블 {table}</h2>
                <h3 className="orderlist-info-price">{numberWithCommas(totalPrice)}원</h3>
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
            
            <OrderContainer text={"취소"}/>
            
        </div>
        
    );
}

export default OrderListView;