import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import OrderButtonContainer from '../../components/atoms/OrderButton/OrderButtonContainer';
import { dbService } from '../../firebase/firebase';
import { getMenuThunk } from '../../modules/getMenus';
import { getBucketThunk } from '../../modules/getBucket';
import StoreAndTableBoxContainer from '../../components/molecules/StoreAndTable/StoreAndTableBoxContainer';
import MenuListContainer from '../../components/molecules/MenuList/MenuListcontainer';
import '../../scss/main.scss';
import MenuListNav from './MenuListNav';

const Home = ( props: any ) => {
    
    const { menu } = useSelector((state:RootState)=>({
        menu:state.myBase.menus.data?.menu,
    }));
    const [ menuListState,setMenuListState ] = useState<number>(0);
    const [ state, setState ] = useState<boolean>();
    const [ orderStatus, setOrderStatus ] = useState<boolean>();
    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
    const dispatch = useDispatch();
   
    const getStateFormFire = () => {

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            window.localStorage.setItem('state', data?.state.toString());
            window.localStorage.setItem('orderStatus', data?.orderStatus.toString());
            setTotalPrice(data.totalPrice);
        });
        setState(JSON.parse(window.localStorage.getItem('state')!));
        setOrderStatus(JSON.parse(window.localStorage.getItem('orderStatus')!));

    };

    useEffect(()=>{

        if( store !== null ) {
            const s:any = store;
            const t:any = table;
            window.localStorage.setItem('store',s);
            window.localStorage.setItem('table',t);
        };
        if(menu === undefined) dispatch(getMenuThunk(store));
        getStateFormFire();
        getBucketThunk(store, table);
    
    },[]);

    return (
        <div>
            <StoreAndTableBoxContainer store={store} table={table} state={state} orderStatus={orderStatus}/>
            <div className="main-content">
                <MenuListNav setMenuListState={setMenuListState} menuListState={menuListState} totalPrice={totalPrice}/>
                <MenuListContainer state={menuListState} store={store} table={table}/>
                <div className="block"></div>
                <div className="bt">
                    <OrderButtonContainer orderStatus={orderStatus} totalPrice={totalPrice}/>
                </div>
            </div>
        </div>
    );

}

export default Home;
