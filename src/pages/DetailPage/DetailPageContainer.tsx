/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import DetailPage from './DetailPage';
import queryString from 'query-string';
import './DetailPage.scss';
import { StoreAction } from '../../redux/actions';

const DetailPageContainer = (props:any) => {
    const { select, storeId } = useSelector((state:RootState) => ({
        select:state.Select.select,
        storeId:state.Location.storeId
    }));
    const dispatch = useDispatch();
    const name = queryString.parse(window.location.search).name;
    useEffect(()=>{
       if(storeId === null) {
            const storeId = JSON.parse(window.localStorage.getItem("storeId")!);
            const tableId = JSON.parse(window.localStorage.getItem("tableId")!);
            dispatch(StoreAction.loadStoreFirebaseForDetail(storeId, tableId, name))
        }
    },[storeId]);

    return <DetailPage select={select} history={props.history}/>
};

export default DetailPageContainer;