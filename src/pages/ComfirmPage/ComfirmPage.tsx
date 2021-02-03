import React from 'react';
import OrderContainer from '../../component/Order/OrderContainer';
import ComfirmInfo from '../../component/Comfirm/ComfirmInfo/ComfirmInfo';
import ComfirmContent from '../../component/Comfirm/ComfirmContent/ComfirmContent';
import { Bucket } from '../../redux/reducers/DataReducer';

interface Props {
    store: string | null;
    table: string | null;
    totalPrice: number;
    bucket: Bucket[];
};

const ComfirmPage = ({ store, table, totalPrice, bucket}: Props) => {
    
    return (
        <div className="comfirm">
            <ComfirmInfo store={store} table={table} totalPrice={totalPrice}/>
            <ComfirmContent bucket={bucket}/>
            <OrderContainer text={"취소"}/>
        </div>
    );
};

export default ComfirmPage;