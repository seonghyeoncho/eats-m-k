import React, { useEffect } from 'react';
import numberWithCommas from '../../functions/addCommaFunc';
import OrderContainer from '../../component/Order/OrderContainer';
import MoreMenuList from '../../component/Detail/Options';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import ComfirmInfo from './ComfirmInfo';


const ComfirmPage = (props:any) => {
    
    const { bucket, totalPrice, store, table } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
        totalPrice:state.Data.data.totalPrice,
        store:state.Store.information.name,
        table:state.Location.table
    }));

    return (
        <div className="comfirm">
            <ComfirmInfo/>

            
            <OrderContainer text={"취소"}/>
        </div>
    );
}

export default ComfirmPage;