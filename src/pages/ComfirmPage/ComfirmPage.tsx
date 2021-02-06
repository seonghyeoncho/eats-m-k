import React from 'react';
import OrderContainer from '../../component/Order/OrderContainer';
import ComfirmContent from '../../component/Comfirm/ComfirmContent/ComfirmContent';
import { Bucket } from '../../redux/reducers/DataReducer';
import CurrentInfo from '../BucketPage/CurrentInfo';

interface Props {
    bucket: Bucket[];
};

const ComfirmPage = ({ bucket}: Props) => {
    
    return (
        <>
        <div className="comfirm">
            <CurrentInfo/>
            <ComfirmContent bucket={bucket}/>            
        </div>
        <div className="confirm-order">
            <OrderContainer text={"취소"}/>
        </div>
        </>
    );
};

export default ComfirmPage;