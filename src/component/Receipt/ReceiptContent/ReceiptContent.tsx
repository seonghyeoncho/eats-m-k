import React from 'react';
import { useSelector } from 'react-redux';
import OptionsContainer from '../../Bucket/Options/OptionsContainer';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../redux';
import { Bucket } from '../../../redux/reducers/DataReducer';

const ReciptContent = () => {

    const { receipts } =  useSelector((state:RootState) => ({
        receipts:state.Data.data.receipt,
    }));
    const changeTime = (time:string) => {
        let changedTime:string = '';
        let insertZatH:string = '';
        let insertZatM:string = '';

        if(time[2] !== ':'){
            insertZatH = '0' + time.slice(0,1);
        } else {
            insertZatH = time.slice(0,3);
        }
        if(time[5] !== ':'){
            insertZatM = insertZatH + '0' + time.slice(3);
        } else {
            insertZatM = insertZatH + time.slice(3);
        }
        changedTime = insertZatM.slice(0,insertZatM.lastIndexOf(':'));
        return changedTime;
    }
    return (
        <>
            <div className="receipt-con">
                {
                    receipts.map((order:any)=>{
                        return(
                            <div>
                                <div className="receipt-orderTime">
                                    {changeTime(order.order_time)}
                                    <div className="tiemLine"/>
                                </div>
                                {
                                    order.receipts.map((doc:Bucket) => {
                                        return (
                                            <div className="ritem" key={doc.id}>
                                                <div className="orderStateText">{doc.state === "주문 거부" ? "취소된 주문입니다":""}</div>
                                                <div className={`title ${doc.state === "주문 거부" ? "canceldOrderTitle":""}`}>
                                                    <div>{doc.name}</div>
                                                    <div>{numberWithCommas(doc.item_total_price)}원</div>
                                                </div>
                                                <div className={`sub ${doc.state === "주문 거부" ? "canceldOrderSub":""}`}>
                                                    <div>수량 : {doc.count}개</div>
                                                    <div>{numberWithCommas(doc.price)}원</div>
                                                </div>
                                                <OptionsContainer options={doc.options}/>
                                            </div>
                                        );
                                    })
                                }
                                <div className="payment">결제 수단 : {order.payment}</div>
                                <div className="request">요청 사항 : {order.request}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ReciptContent;