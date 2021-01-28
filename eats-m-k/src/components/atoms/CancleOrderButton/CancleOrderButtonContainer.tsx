import React, { useState } from 'react';
import PopUp from '../../organisms/PopUp';
import CancleOrderButton from './CancleOrderButton';

interface Props {
    id:string;
    price:number;
    reRednder:()=>void
    bucket:any
    
}
const CancleOrderButtonContainer = ({id,reRednder, price,bucket}:Props) => {

    const totalPrice = window.localStorage.getItem('totalPrice');
    const [ popUpState, setPopUpState ] = useState<boolean>(false);

    const content = '선택한 메뉴를 장바구니에서 삭제하시겠습니까?';

    const popUpTrigger = () => {
     
         setPopUpState(!popUpState);

        
            
    };

    const cancleOrders = () => {
        

        if (bucket.length === 1 ){
            window.localStorage.setItem('totalPrice', (Number(totalPrice) - price).toString());
            window.localStorage.removeItem('bucket');
        } else {
            const buckett = bucket?.filter((doc:any)=> doc.id !== id );
            window.localStorage.setItem('totalPrice', (Number(totalPrice) - price).toString());
            window.localStorage.setItem('bucket', JSON.stringify(buckett));

        }
        reRednder();
        
    }

    return (
        <>
            { popUpState ? <PopUp title={'메뉴삭제'} content={content} func={cancleOrders} popUpTrigger={popUpTrigger} />: null}
            <CancleOrderButton popUpTrigger={popUpTrigger}/>
        </>

    );
}

export default CancleOrderButtonContainer;