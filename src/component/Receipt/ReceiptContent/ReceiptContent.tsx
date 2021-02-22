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
    return (
        <>
            <div className="receipt-con">
                {
                    receipts.map((order:any)=>{
                        return(
                            <div>
                                <div>{order.order_time}</div>
                                {
                                    order.receipts.map((doc:Bucket) => {
                                        return (
                                            <div className="ritem" key={doc.id}>
                                                <div className="title">
                                                    <div>{doc.name}</div>
                                                    <div>{numberWithCommas(doc.item_total_price)}원</div>
                                                </div>
                                                <div className="sub">
                                                    <div>수량 : {doc.count}개</div>
                                                    <div>{numberWithCommas(doc.price)}원</div>
                                                </div>
                                                <OptionsContainer options={doc.options}/>
                                                <div>{doc.state === "주문 거부" ? "주문이 최소되었습니다.":""}</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ReciptContent;