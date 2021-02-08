import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import ComfirmPage from './ComfirmPage';
import './ComfirmPage.scss';

const ComfirmContainer = (props:any) => {

    const { bucket } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
    }));

    return (
        <ComfirmPage bucket={bucket}/>
    );
};

export default ComfirmContainer;