import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import CounterContainer from '../../atoms/Counter/CounterContainer';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BackButton from '../../atoms/BackButton/BackButton';
import AddMenuContainer from '../../atoms/AddMenuButton/AddMenuButtonContainer';
import CheckBoxCon from './CheckBoxCon';
import numberWithCommas from '../../../functions/addCommaFunc';
import OrderButtonDirect from './OrderButtonDirect';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';

const DetailView = (props:any) => {

    const { count,orderStatus  } = useSelector((state:RootState) => ({

        count:state.counters.count,
        orderStatus:state.myBucket.bucket.data?.orderStatus

    }));

    const query = queryString.parse(props.location.search);
    const menu = query.menu;
    const price = Number(query.price);
    const [ select, setSelect ] = useState<any>({});
    const [ more, setMore ] = useState<any>([]);
    const [ morePrice,setMorePrice] = useState<number>(0);

    const addMoreMenu = (m:any, p:number) => {
        m = {
            menu:m.menu,
            price:m.price
        }

        setMore( (prev:any) => [m,...prev]);
        setMorePrice(morePrice + p);


    }

    useEffect(()=>{

        const Obj = {
            menu:menu,
            price:price,
            more:more,
            count:count,
            itemTotalPrice: (price * count) + morePrice
        }
        setSelect(Obj);

    },[more,menu,count]);

    return (
        <div className="detail">

            <StoreAndTableBoxContainer/>
            <div className="detail-nav">

                <div className="detail-nav-content">
                    <div style={{marginLeft:"34px"}}><BackButton text={'<'}/></div>
                    <div>MENU</div>
                    <BucketButtonContainer orderStatus={orderStatus}/>
                </div>

            </div>
            <div className="detail-con">
            

                <div className="detail-content-con">

                    <div className="detail-info-con">

                        <div className="detail-info">
                            <div>{menu}</div>
                            <div>추가설명</div>
                        </div>
                        
                        <div>{numberWithCommas(price)}원</div>

                    </div>

                    <hr/>
                    <div>추가선택</div>
                    <CheckBoxCon addMoreMenu={addMoreMenu}/>

                    {/* 추가 선택할 컴포넌트가 있어야 함. 아마 체크 박스로 선택 할 수 있게 해서 useState로 추가 할 수 있게 해야 할 듯 */}
                    <hr/>
                    <CounterContainer/>
                    <hr/>
                    <div className="detail-bt-con">
                        <div className="detail-bt">
                            <AddMenuContainer select={select} history={props.history}/>
                            <OrderButtonDirect select={select}/>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    );
}

export default DetailView;