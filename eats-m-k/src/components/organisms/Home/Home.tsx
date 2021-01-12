import React, { useEffect, useState } from 'react';
//import { dbService } from '../firebase';
import { Link } from 'react-router-dom';

import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import MenuList from '../../molecules/MenuList/MenuList';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import { setStore } from '../../../modules/setStore';
import { setTable } from '../../../modules/setTable';
import SetMenuList from './SetMenuList';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import { setStatus } from '../../../modules/orderState';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';
import { useCookies } from 'react-cookie';
import { getMenuList } from '../../../api/menuFromFire';
import { getBucket } from '../../../api/bucketFromFire';
import { getMenuThunk } from '../../../modules/getMenus';
import MenuListContainer from '../../molecules/MenuList/MenuListcontainer';
import SideMenuListContainer from './SideMenuListContainer';
import { getBucketThunk } from '../../../modules/getBucket/thunks';


const Home = (props: any ) => {

    //props의 type을 왜 any로 주는지 잘 모르겠는데 object로 주면 읽지를 못함
    //type을 object로 정하면 props를 받아올 수가 없음 ㅋㅋ

    const [ cookies, setCookie, removeCookie ] = useCookies([]);

    const [ menuListState,setMenuListState ] = useState<number>(0);

    const {totalPrice, orderMenus, orderState, status,menu, buckets} = useSelector((state:RootState)=>({
        totalPrice:state.totalPrice.price,
        orderMenus: state.orderMenus,
        orderState: state.stateSet.orderState,
        status:state.stateSet.orderStatus,
        menu:state.myBase.menus.data?.menu,
        buckets:state.myBucket.buckets.data?.bucket
    }));

 
    const today = new Date();


    const dispatch = useDispatch();
    console.dir(`${today.getMonth()+1}/${today.getDate()}/${today.getTime()}`);
    const moreData = `${today.getMonth()+1}/${today.getDate()}/${today.getTime()}`;
    

    const query = queryString.parse(props.location.search);
    const currentPath = window.location.pathname;
    const store = query.store;
    const table = query.table

    console.log("totalPrice", totalPrice);
    console.log("orderMenus", orderMenus);
    console.log(orderState);

    const onState = (n:number) => {
        setMenuListState(n);
    
    };
    

    useEffect(()=>{

        dispatch(setStore(store));
        dispatch(setTable(table));

        dispatch(getBucketThunk(store,table)) 
        setTimeout(()=>(dispatch(getMenuThunk(store))), 100);
        
       
        

    },[]);
   

    const changeList = (n:number) => {
        if (n === 0) return <MenuListContainer/>
        else if (n === 1) return <SetMenuList/>
        else return <SideMenuListContainer/>
    }

  

    console.log(status);

    console.log(menu);

    console.log(buckets);

    

    
    
    
    return (
        <>
            {/* 가게와 테이블 표시*/}
            <StoreAndTableBoxContainer/>

            {/* 장바구니 버튼*/}
            <BucketButtonContainer />

            {/*단품메뉴, 세트메뉴, 사이드메뉴 */}
            
            <button onClick={()=>onState(0)}>단품메뉴</button>
            <button onClick={()=>onState(1)}>세트메뉴</button>
            <button onClick={()=>onState(2)}>사이드메뉴</button>

            
            {changeList(menuListState)}

            {/* 주문하기 버튼*/}
            { totalPrice === 0 ? <></> : <OrderButtonContainer/>}
        
    
        </>
    );

}

export default Home;