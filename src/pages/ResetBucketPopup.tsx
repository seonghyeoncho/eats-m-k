import React from 'react';
import PopUp from '../components/organisms/PopUp';
import { resetBucket } from '../functions/updateBucket';

interface Props {
    popUpState: boolean;
    popUpTrigger: () => void;
}

const ResetBucketPopup = ({popUpState,popUpTrigger}:Props) => {

    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    const content = "모든 메뉴를 장바구니에서\n삭제하시겠습니까?";

    return (
        <>
            { 
                popUpState ? 
                    <PopUp title={'전체 삭제'} content={content} func={()=>resetBucket(store, table)} popUpTrigger={popUpTrigger}/>
                : 
                    null
            }
        </>
    );
};
export default ResetBucketPopup;