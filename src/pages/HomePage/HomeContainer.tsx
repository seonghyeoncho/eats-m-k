import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GlobalLoading from '../../component/AddMenuButton/GlobalLoading';
import { RootState } from '../../redux';
import Home from './Home';
import queryString from 'query-string';
import { LocationAction } from '../../redux/actions';

const HomeContainer = (props:any) => {
    const { globalLoading } = useSelector((state:RootState) => ({
        globalLoading:state.GlobalLoading.loadingState,
    }));
    const query = queryString.parse(window.location.search);
    const storeId = query.store;
    const tableId = query.table;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!globalLoading) {
            // window.localStorage.removeItem("storeId");
            // window.localStorage.removeItem("tableId");
            dispatch(LocationAction.initiateLocation(storeId, tableId));
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