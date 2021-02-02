import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux';
import BucketPage from './BucketPage';

const BucketPageContainer = (props:any) => {
    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    const { bucket } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
    }));
    return (
        <>
            {
                bucket.length === 0? <Redirect to={`/?store=${store}&table=${table}`}/>
                :<BucketPage history={props.history} bucket={bucket}/>
            }
        </>
    );
};

export default BucketPageContainer;