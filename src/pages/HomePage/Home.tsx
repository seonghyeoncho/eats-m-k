import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import OrderButtonContainer from '../../component/OrderButton/OrderButtonContainer';
import StoreAndTableBoxContainer from '../../component/Home/StoreAndTableBoxContainer';
import MenuListContainer from '../../component/Home/MenuList/MenuListcontainer';
import '../../scss/main.scss';
import MenuListNav from '../../component/Home/MenuListNav';
import { LocationAction, StoreAction, DataAction } from '../../redux/actions';
import HorizontalScroll from '../../component/Home/HorizontalScroll';

const Home: React.FC<any> = ( props:any ) => {

    const { orderStatus, totalPrice, items} = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.orderStatus,
        totalPrice:state.Data.data.totalPrice,
        items:state.Store.menu.items
    }));
    const [ menuListState,setMenuListState ] = useState<number>(0);
    const query = queryString.parse(window.location.search);
    const store = query.store;
    const table = query.table;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(LocationAction.setLocation(store, table));
        dispatch(StoreAction.loadStoreFirebase());
        dispatch(DataAction.loadDataFirebase());
    },[]);

    return (
        <div>
            <StoreAndTableBoxContainer/>
            <div className="main-content">
                {/* <MenuListNav setMenuListState={setMenuListState} menuListState={menuListState} totalPrice={totalPrice}/> */}
                <HorizontalScroll list={items} title={'사장님 추천'}/>
                <HorizontalScroll list={items} title={'이런건 어때요?'}/>
                <MenuListContainer state={menuListState}/>
                <div className="block"></div>
                <div className="bt">
                    <OrderButtonContainer orderStatus={orderStatus} totalPrice={totalPrice}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
