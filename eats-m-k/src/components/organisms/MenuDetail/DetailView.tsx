import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import CounterContainer from '../../atoms/Counter/CounterContainer';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BackButton from '../../atoms/BackButton/BackButton';
import AddMenuContainer from '../../atoms/AddMenuButton/AddMenuButtonContainer';
import { addOrder } from '../../../modules/orderMenus';
import { resetCount } from '../../../modules/counters';
import { increase } from '../../../modules/totalPrice';
import numberWithCommas from '../../../functions/addCommaFunc';
import SideMenuListContainer from '../Home/SideMenuListContainer';

const DetailView = (props:any) => {

    const [ select, setSelect ] = useState<any>({});

    const dispatch = useDispatch();

    const {menus, count, AC} = useSelector((state:RootState)=> ({
        menus:state.myBase.menus.data?.menu,
        count:state.counters.count,
        AC:state.myBase.menus.data?.AC
    }));

    console.log(menus);

    const query = queryString.parse(props.location.search);
    const menu = query.menu;

    

    console.log("메뉴",menu);

    useEffect(()=>{
        menus?.map((doc:any)=>{
        
            for(let i in doc){
                if(menu === i) setSelect({menu:i, price:numberWithCommas(doc[i].price)})
            }
            
        })


    },[]);
    //일단 useEffect로 해두긴 했는데 나붕에 바뀔 수도 있음

    console.log(select.price);

    return (

       <div>
           <StoreAndTableBoxContainer/>
           <BackButton text={'뒤로가기'}/>

           <div>{select.menu}<br/>{select.price}</div>
           <hr/>
           <div>추가선택</div>
           <SideMenuListContainer/>
           <hr/>
           <CounterContainer/>
           <hr/>
           <AddMenuContainer select={select} history={props.history}/>
           <OrderButtonContainer/>
          

           

        </div>

    );
}

export default DetailView;