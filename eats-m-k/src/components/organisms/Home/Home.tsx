import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import { setStore } from '../../../modules/setStore';
import { setTable } from '../../../modules/setTable';
import SetMenuList from './SetMenuList';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';
import { useCookies } from 'react-cookie';
import { getMenuThunk } from '../../../modules/getMenus';
import MenuListContainer from '../../molecules/MenuList/MenuListcontainer';
import SideMenuListContainer from './SideMenuListContainer';
import { getBucketThunk } from '../../../modules/getBucket/thunks';
import { dbService } from '../../../firebase';
import { setState, setStatus } from '../../../modules/orderState';

const Home = ( props: any ) => {

    //props의 type을 왜 any로 주는지 잘 모르겠는데 object로 주면 읽지를 못함
    //type을 object로 정하면 props를 받아올 수가 없음 ㅋㅋ

    const [ cookies, setCookie, removeCookie ] = useCookies(['buckets']);

    const [ menuListState,setMenuListState ] = useState<number>(0);
    const [ bucket, setBucket ] = useState([]);

    const {totalPrice, menu, buckets} = useSelector((state:RootState)=>({
        totalPrice:state.totalPrice.price,
    
        menu:state.myBase.menus.data?.menu,
        buckets:state.myBucket.bucket.data?.bucket
    }));
   
    const today = new Date();

    const dispatch = useDispatch();
    console.dir(`${today.getMonth()+1}/${today.getDate()}/${today.getTime()}`);
    const moreData = `${today.getMonth()+1}/${today.getDate()}/${today.getTime()}`;

    const query = queryString.parse(props.location.search);
    const currentPath = window.location.pathname;
    const store = query.store;
    const table = query.table

    /*
        일단 파이어베이스에서 onSnap으로 데이터를 가져오지를 못하는데 주문 현황을 보려면 실시간이 필요해서 상태만 따로 가져옴.
        더 알아보고 바꿀 예정
    */  

    console.log("totalPrice", totalPrice);



    const onState = (n:number) => {
        setMenuListState(n);
    
    };

    const getStateFormFire = () => {
        dbService.collection(`${store}`).doc(`${table}`).onSnapshot(snapShot=>{
            const data = snapShot.data();
            dispatch(setState(data?.state));
            dispatch(setStatus(data?.orderStatus));

        })
    }

    useEffect(()=>{

        dispatch(setStore(store));
        dispatch(setTable(table));

        if(menu === undefined) dispatch(getMenuThunk(store));
        dispatch(getBucketThunk(store, table));
        getStateFormFire();

        

    },[]);
   
    const changeList = (n:number) => {

        if (n === 0) return <MenuListContainer/>
        else if (n === 1) return <SetMenuList/>
        else return <SideMenuListContainer/>

    }



    console.log(menu);

    console.log("bucket",buckets);
    
    return (
        <>
            {/* 가게와 테이블 표시*/}
            <StoreAndTableBoxContainer/>

            {/* 장바구니 버튼*/}
            { buckets?.length === 0 ? <></> : <BucketButtonContainer />}
            

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