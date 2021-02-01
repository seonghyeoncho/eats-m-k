import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import StoreAndTableBoxContainer from '../../component/StoreAndTable/StoreAndTableBoxContainer';
import '../../scss/main.scss';
import { LocationAction, StoreAction, DataAction } from '../../redux/actions';
import HorizontalScroll from '../../component/HorizontalScroll/HorizontalScroll';
import CategoryNav from '../../component/Category/CategoryNav';
import CategoryMenuList from '../../component/Category/CategoryMenuList';

const Home: React.FC<any> = ( props:any ) => {

    const { orderStatus, totalPrice, items, categotys } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.orderStatus,
        totalPrice:state.Data.data.totalPrice,
        items:state.Store.menu.items,
        categotys: state.Store.menu.categories
    }));

    const [ categoryName, setCategoryName ] = useState<string>('');
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
                <HorizontalScroll list={items} title={'사장님 추천'}/>
                <HorizontalScroll list={items} title={'이런건 어때요?'}/>
                <CategoryNav categorys={categotys} setCategoryName={setCategoryName}/>
                <CategoryMenuList list={items} categoryName={categoryName}/>
            </div>
        </div>
    );
};

export default Home;
