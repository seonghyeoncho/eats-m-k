import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux';
import DetailView from './DetailPage';

const DetailPageContainer = (props:any) => {
    const { select } = useSelector((state:RootState) => ({
        select:state.Select.select,
    }));
    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');

    return (
        <>
            {
                select.name === '' ? <Redirect to={`/?store=${store}&table=${table}`}/>
                : <DetailView select={select} history={props.history}/>
            }
        </>
    );
};

export default DetailPageContainer;