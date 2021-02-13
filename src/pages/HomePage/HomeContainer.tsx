import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GlobalLoading from '../../component/AddMenuButton/GlobalLoading';
import { RootState } from '../../redux';
import Home from './Home';
import queryString from 'query-string';
import { DataAction, LocationAction, StoreAction } from '../../redux/actions';

const HomeContainer = (props:any) => {
    const { globalLoading } = useSelector((state:RootState) => ({
        globalLoading:state.GlobalLoading.loadingState,
    }));
    const query = queryString.parse(window.location.search);
    const store = query.store;
    const table = query.table;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!globalLoading) {
            dispatch(LocationAction.initiateLocation(store, table));
            dispatch(StoreAction.loadStoreFirebase());
            dispatch(DataAction.loadDataFirebase());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[globalLoading]);
    return (
        <>
            {
                !globalLoading? <GlobalLoading/>
                :<Home props={props}/>
            }
        </>
    );
};

export default HomeContainer;