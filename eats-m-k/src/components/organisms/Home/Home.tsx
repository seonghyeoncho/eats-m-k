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
import SideMenuList from './SideMenuList';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import { setStatus } from '../../../modules/orderState';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';


const Home = (props: any ) => {

    //props의 type을 왜 any로 주는지 잘 모르겠는데 object로 주면 읽지를 못함
    //type을 object로 정하면 props를 받아올 수가 없음 ㅋㅋ

    const [menuList, setMenuList] = useState<any>([]);

    const [menuListState,setMenuListState] = useState<number>(0);

    const {totalPrice, orderMenus, orderState, status} = useSelector((state:RootState)=>({
        totalPrice:state.totalPrice.price,
        orderMenus: state.orderMenus,
        orderState: state.stateSet.orderState,
        status:state.stateSet.orderStatus
    }));

    const dispatch = useDispatch();
    

    const query = queryString.parse(props.location.search);
    const currentPath = window.location.pathname;
    const store = query.store;
    const table = query.table

    console.log("totalPrice", totalPrice);
    console.log("orderMenus", orderMenus);
    console.log(orderState);

    //from menudb
    const getMenuList = () => {

        dbService.collection("store").doc(`${store}`)
            .get()
            .then((doc:any) => {

                const data = doc.data();
               
                for(let i in data){

                    for(let k in data[i]){

                        const dataObj = {

                            menu:k,
                            price:data[i][k].price

                        }

                        
                        setMenuList((prev:any)=>[dataObj,...prev]);

                    }

                }

        });

        dbService.collection(`${store}`).doc(`${table}`)
            .onSnapshot((doc:any)=>{
                if(doc.data().check) dispatch(setStatus());
            });

    }
    const onState = (n:number) => {
        setMenuListState(n);

    };
    

    useEffect(()=>{

        getMenuList();
        dispatch(setStore(store));
        dispatch(setTable(table));

    },[]);

    const changeList = (n:number) => {
        if (n === 0) return <MenuList menuList={menuList}/>
        else if (n === 1) return <SetMenuList/>
        else return <SideMenuList/>
    }

   

    console.log(status);
    
    return (
        <>
            {/* 가게와 테이블 표시*/}
            <StoreAndTableBoxContainer/>

            {/* 장바구니 버튼*/}
            {totalPrice === 0 ? 
                    <></>
                :
                    <BucketButtonContainer/>
            }

            {/*단품메뉴, 세트메뉴, 사이드메뉴 */}
            
            <button onClick={()=>onState(0)}>단품메뉴</button>
            <button onClick={()=>onState(1)}>세트메뉴</button>
            <button onClick={()=>onState(2)}>사이드메뉴</button>

            
            {changeList(menuListState)}
            {/*임시로 만들어 놓음. DB에서 따로 데이터 받아오면 뿌리는 리스트를 다르게 할 예정 */}
                
           

            {/* 주문하기 버튼*/}
            <OrderButtonContainer/>
        
    
        </>
    );

}

export default Home;