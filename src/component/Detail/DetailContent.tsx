import React from 'react';
import AddMenuButtonContainer from '../AddMenuButton/AddMenuButtonContainer';
import CounterContainer from '../Counter/CounterContainer';
import CheckBoxCon from './CheckBoxCon';
import OrderButtonDirect from './OrderButtonDirect';
import numberWithCommas from '../../functions/addCommaFunc';

interface Props {
    menu: string;
    price: number;
    moreMenuHandler: (m:any,isChecked:boolean) => void;
    morePrice: number;
    count: number;
    select: any;
    history: any
};

const DetailContent = ({menu, price, moreMenuHandler, morePrice, count, select,history}:Props) => {
    
    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');

    return(
        <div className="detail-con">
            <div className="detail-content-con">
                <div className="detail-info-con">
                    <div className="detail-info">
                        <div className="detail-info-menu">{menu}</div>
                    </div>
                    <div>{numberWithCommas(price)}원</div>
                </div>
                <div className="line"/>
                <div className="detail-addmenu">추가선택</div>
                <CheckBoxCon moreMenuHandler={moreMenuHandler} store={store}/>
                <div className="line"/>
                <CounterContainer/>
                <div className="line"/>
                <div className="detail-totalprice-con">
                    <div className="datail-totalprice-text">합계</div>
                    <div className="detail-totalprice-price">{numberWithCommas((price + morePrice)*count)}원</div>
                </div>
                <div className="line"/>
                <div className="detail-bt-con">
                    <div className="detail-bt">
                        <AddMenuButtonContainer select={select} history={history}/>
                        <OrderButtonDirect select={select} store={store} table={table}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailContent;