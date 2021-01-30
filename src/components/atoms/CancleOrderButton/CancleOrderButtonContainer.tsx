import React, { useState } from 'react';
import { removeBucketItem } from '../../../functions/updateBucket';
import PopUp from '../../Bucket/PopUp';
import CancleOrderButton from './CancleOrderButton';

interface Props {
    id:string;
    itemTotalPrice:number
    bucket:any
    store:string | string[] | null
    table:string | string[] | null
    totalPrice:number | undefined
    
}
const CancleOrderButtonContainer = ({id, itemTotalPrice,bucket,store, table, totalPrice}:Props) => {

    const [ popUpState, setPopUpState ] = useState<boolean>(false);
    const content = '선택한 메뉴를 장바구니에서 삭제하시겠습니까?';

    const popUpTrigger = () => {  
         setPopUpState(!popUpState);
    };

    const cancleOrders = () => {
        removeBucketItem(id, store,table,bucket,(totalPrice!-itemTotalPrice));

    }

    return (
        <>
            { popUpState ? <PopUp title={'메뉴삭제'} content={content} func={cancleOrders} popUpTrigger={popUpTrigger} />: null}
            <CancleOrderButton popUpTrigger={popUpTrigger}/>
        </>

    );
}

export default CancleOrderButtonContainer;