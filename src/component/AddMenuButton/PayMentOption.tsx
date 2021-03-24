import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { PaymentAction } from '../../redux/actions';
import './PayMentOption.scss';
import dCheckR from '../../image/icons/icon_radio_deselected_x3.png';
import checkR from '../../image/icons/icon_radio_selected_x3.png';
const PayMentOption = () => {

    const { payMent } = useSelector((state:RootState) => ({
        payMent:state.Payment.payment,
    }));
    const disapatch = useDispatch();
    enum Type {
        card = '카드 결제',
        cash = '현금 결제(계좌 이체)'
    };
    const onClick = (payment:string) => {
        disapatch(PaymentAction.setPayment(payment))
    }
    return (
        <div className="pmo-con">
            <div className="pmo-title">결제 수단 선택(후불)</div>
            <div className="pmo-bt"> 
                <button className={ payMent === Type.card ? 'checked':'nochecked'} onClick={() => onClick(Type.card)}>
                    <div className="pmoC">
                        {payMent === Type.card ?<img src={checkR} alt="selected"/>:<img src={dCheckR} alt="none"/>}
                        {Type.card}
                    </div>
                    <div className="cashE">
                    </div>
                </button>
                <button className={ payMent === Type.cash ? 'checked':'nochecked'} onClick={() => onClick(Type.cash)}>
                    <div className="pmoC">
                        {payMent === Type.cash ?<img src={checkR} alt="selected"/>:<img src={dCheckR} alt="none"/>}
                        {Type.cash}
                    </div>
                    <div className="cashE">
                        탕수육(꿔바로우)을 포함해 3만원 이상 주문시<br/>현금결제 또는 계좌이체하면 Size Up
                    </div>
                </button>
            </div>
        </div>
    );
};

export default PayMentOption;