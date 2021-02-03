import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import StoreAndTableBoxContainer from '../../component/StoreAndTable/StoreAndTableBoxContainer';
import { LocationAction, StoreAction, DataAction } from '../../redux/actions';
import HorizontalScroll from '../../component/HorizontalScroll/HorizontalScroll';
import CategoryNav from '../../component/Category/CategoryNav';
import CategoryMenuList from '../../component/Category/CategoryMenuList';
import './HomePage.scss';

const Home: React.FC<any> = ( props:any ) => {

    const { items, categotys } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.orderStatus,
        totalPrice:state.Data.data.totalPrice,
        items:state.Store.menu.items,
        categotys: state.Store.menu.categories
    }));
    const s = window.localStorage.getItem('storeName');
    const [ categoryName, setCategoryName ] = useState<string>('');
    const query = queryString.parse(window.location.search);
    const store = query.store;
    const table = query.table;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(LocationAction.initiateLocation(store, table));
        dispatch(StoreAction.loadStoreFirebase());
        dispatch(DataAction.loadDataFirebase());
    },[s]);

    return (
        <div className="home">
            <StoreAndTableBoxContainer/>
            <div className="content">
                <div className="first">
                    <HorizontalScroll list={items} title={'사장님 추천'} width={325} height={160} radius={10}/>
                </div>
                <div className="second">
                    <HorizontalScroll list={items} title={'이런건 어때요?'} width={120} height={160} radius={18}/>
                </div>
                <CategoryNav categorys={categotys} setCategoryName={setCategoryName}/>
                <CategoryMenuList list={items} categoryName={categoryName}/>
            </div>
        </div>
    );
};

export default Home;
