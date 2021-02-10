import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import DetailPage from './DetailPage';
import queryString from 'query-string';
import './DetailPage.scss';
import { DataAction, SelectAction, StoreAction } from '../../redux/actions';

const DetailPageContainer = (props:any) => {
    const { select, storeData } = useSelector((state:RootState) => ({
        select:state.Select.select,
        storeData:state.Store
    }));
    const dispatch = useDispatch();
    const name = queryString.parse(window.location.search).name;
    useEffect(()=>{
       if(select.name === "") {
            dispatch(StoreAction.loadStoreFirebase());
            dispatch(DataAction.loadDataFirebase());
            dispatch(SelectAction.setMenu(name));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[select, storeData]);

    return (
        <>
            {
                // select.name === '' ? <Redirect to={`/?store=${store}&table=${table}`}/>
                <DetailPage select={select} history={props.history}/>
            }
        </>
    );
};

export default DetailPageContainer;