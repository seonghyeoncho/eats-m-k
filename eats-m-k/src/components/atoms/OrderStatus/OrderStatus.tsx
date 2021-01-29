import React, { useEffect, useState } from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import MoreMenuList from '../../organisms/MenuDetail/MoreMenuList';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'
import Complete from '../../../icons/icon_OrderCompleted_x3.png';
import Reception from '../../../icons/icon_ReceptionCompleted_x3.png';
import queryString from 'query-string';
import { dbService } from '../../../firebase';


const OrderStatus = (props:any) => {

    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
    const [ state, setState ] = useState<boolean>();
    const [ orderStatus, setOrderStatus ] = useState<boolean>();
    const [ receipt, setReceiptt ] = useState<any>([]);
    const [ receiptTotalPrice, setReceiptTotalPrice ] = useState<number>(0);
    let text:string = '';

    if(state && orderStatus){
        text = '접수완료';

    } else if(!state && orderStatus){

        text = '주문완료';

    }

    const goBack = () => {
        props.history.goBack();
    }

    useEffect(()=>{

        setState(JSON.parse(window.localStorage.getItem('state')!));
        setOrderStatus(JSON.parse(window.localStorage.getItem('orderStatus')!));
        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any) => {
            const data = snapShot.data();
            setTotalPrice(data.totalPrice);
            setReceiptTotalPrice(data.receipttotalprice);
            setReceiptt(data.receipt);
        })
        
    },[state, orderStatus, totalPrice]);

    return (
        <div className="orderstatus-con">
            <div className="orderstatus-nav-con">
            <div className="div1"><img src={Arrow} width="12px" onClick={goBack} alt="Arrow"/></div>
                <div className="orderstatus-nav-text">주문현황</div>
            </div>
            {
                !state ?                 
                    <div className="orderstatus-state-con">
                        <div className="orderstatus-state-complete"> 
                            <div className="orderstatus-state-complete-circle-1"> 
                                <img src={Complete} alt="complete"/>
                            </div>
                            <div className="orderstatus-state-complete-circle-2">
                            </div>
                            <div className="orderstatus-state-complete-text">
                                주문완료  
                            </div>
                        </div>
                        <div className="orderstatus-state-reception"> 
                            <div className="orderstatus-state-reception-circle-1-1"> 
                            </div>
                            <div className="orderstatus-state-reception-circle-2-1">
                            </div>
                            <div className="orderstatus-state-reception-text-1">
                                접수완료  
                            </div>
                        </div>
                        <div className="orderstatus-line"/>
                    </div>
                :
                    <div className="orderstatus-state-con"> 
                        <div className="orderstatus-state-complete"> 
                            <div className="orderstatus-state-complete-circle-1"> 
                                <img src={Complete}/>
                            </div>
                            <div className="orderstatus-state-complete-circle-2">
                            </div>
                            <div className="orderstatus-state-complete-text">
                                주문완료  
                            </div>
                        </div>
                        <div className="orderstatus-state-reception"> 
                            <div className="orderstatus-state-reception-circle-1-2"> 
                                <img src={Reception}/>
                            </div>
                            <div className="orderstatus-state-reception-circle-2-2">
                            </div>
                            <div className="orderstatus-state-reception-text-2">
                                접수완료  
                            </div>
                        </div>
                        <div className="orderstatus-line"/>
                    </div>
            }
            <div className="orderstatus-state-info-con">
                <div className="zigzag-con"><hr className="zigzag"></hr></div>
                <div className="orderstatus-state-info-store">{store}</div >
                <div className="orderstatus-state-info-table">테이블 {table}</div >
                <div className="orderstatus-state-info-totalprice">{numberWithCommas(receiptTotalPrice)}원</div >
            </div>
            <div className="orderstatus-content-con">
                {
                    receipt?.map((doc:any) => {
                            for(let i in doc){
                                return (
                                    <>
                                        <div className="orderstatus-content">
                                            <div className="orderstatus-content-title">
                                                <div>{doc.menu}</div>
                                                <div>{numberWithCommas(doc.itemTotalPrice)}원</div>
                                            </div>
                                            <div className="orderstatus-content-sub">
                                                <div>개수 : {doc.count}개</div>
                                                <div>{numberWithCommas(doc.price)}원</div>
                                            </div>
                                            {
                                                doc.more !== undefined ? 
                                                    <>  
                                                        <MoreMenuList more={doc.more}/>
                                                    </>
                                                :
                                                    <div>추가사항 없음</div>
                                            }
                                        </div>
                                        <div className="line"/>
                                    </>
                                );
                            }
                        })
                }
            </div>
        </div>
    );
}

export default OrderStatus;