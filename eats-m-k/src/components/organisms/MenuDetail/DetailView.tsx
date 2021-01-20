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
import { Route } from 'react-router-dom';
import Test from './Test';

const DetailView = (props:any) => {

    const { count } = useSelector((state:RootState) => ({

        count:state.counters.count,

    }));

    const query = queryString.parse(props.location.search);
    const menu = query.menu;
    const price = Number(query.price);

    const [ select, setSelect ] = useState<any>({});
    const [ more, setMore ] = useState<any>([]);
    const [ morePrice,setMorePrice] = useState<number>(0);


    console.log("메뉴",menu);

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

    const addMoreMenu = (m:any, p:number) => {

        setMore( (prev:any) => [m,...prev]);
        setMorePrice(morePrice + p);


    }

    console.log(more);

    return (

       <div>

           <StoreAndTableBoxContainer/>
           <BackButton text={'뒤로가기'}/>

           <div>{menu}<br/>{numberWithCommas(price)}원</div>
           <hr/>
           <div>추가선택</div>
           <CheckBoxCon addMoreMenu={addMoreMenu}/>

           {/* 추가 선택할 컴포넌트가 있어야 함. 아마 체크 박스로 선택 할 수 있게 해서 useState로 추가 할 수 있게 해야 할 듯 */}
           <hr/>
           <CounterContainer/>
           <hr/>
           <AddMenuContainer select={select} history={props.history}/>
           <OrderButtonDirect select={select}/>
           
          

           

        </div>

    );
}

export default DetailView;