import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import CounterContainer from '../../atoms/Counter/CounterContainer';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import AddMenuContainer from '../../atoms/AddMenuButton/AddMenuButtonContainer';
import CheckBoxCon from './CheckBoxCon';
import numberWithCommas from '../../../functions/addCommaFunc';
import OrderButtonDirect from './OrderButtonDirect';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'
import { resetCount } from '../../../modules/counters';

const DetailView = (props:any) => {

    const { count  } = useSelector((state:RootState) => ({

        count:state.counters.count,
        
    }));

    const query = queryString.parse(props.location.search);
    const menu = query.menu;
    const price = Number(query.price);
    const store = query.store;
    const table = query.table;
    const [ select, setSelect ] = useState<any>({});
    const [ more, setMore ] = useState<any>([]);
    const [ morePrice,setMorePrice] = useState<number>(0);
    const [ state, setState ] = useState<boolean>();
    const [ orderStatus, setOrderStatus ] = useState<boolean>();

    const dispatch = useDispatch();
    
    const moreMenuHandler = (m:any, isChecked:boolean) => {

        if(isChecked) {
            
            setMore( (prev:any) => [m,...prev]);
            setMorePrice(morePrice + m.price);

        } else if(!isChecked) {
            
            setMore( (prev:any) => prev.filter((doc:any)=> m.menu !== doc.menu));
            setMorePrice(morePrice - m.price);

        }

    }

    useEffect(()=>{

        const Obj = {

            menu:menu,
            price:price,
            more:more,
            count:count,
            itemTotalPrice: (price + morePrice) * count

        }

        setSelect(Obj);
        setState(JSON.parse(window.localStorage.getItem('state')!));
        setOrderStatus(JSON.parse(window.localStorage.getItem('orderStatus')!));

    },[more,menu,count, state, orderStatus]);

    return (
        
        <div className="detail">

            <StoreAndTableBoxContainer store={store} table={table} state={state} orderStatus={orderStatus}/>

            <div className="detail-nav">

                <div className="detail-nav-content">
                    <img  className="back-bt" onClick={()=>{props.history.goBack();dispatch(resetCount());}} src={Arrow}/>    
                    <div className="detail-nav-content-text">MENU</div>
                    <BucketButtonContainer store={store} table={table} orderStatus={orderStatus}/>
                </div>

            </div>

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

                    {/* 추가 선택할 컴포넌트가 있어야 함. 아마 체크 박스로 선택 할 수 있게 해서 useState로 추가 할 수 있게 해야 할 듯 */}
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
                            <AddMenuContainer select={select} history={props.history} store={store} table={table}/>
                            <OrderButtonDirect select={select} store={store} table={table}/>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    );
}

export default DetailView;