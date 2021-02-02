import React from 'react';
import PopUp from '../../Popup/PopUp';
import { useDispatch } from 'react-redux';
import { DataAction } from '../../../redux/actions';

interface Props {
    popUpState: boolean;
    popUpTrigger: () => void;
}

const ResetBucketPopup = ({popUpState,popUpTrigger}:Props) => {
    const dispatch = useDispatch();
    const content = "모든 메뉴를 장바구니에서\n삭제하시겠습니까?";

    return (
        <>
            { 
                popUpState ? <PopUp title={'전체 삭제'} content={content} func={() => dispatch(DataAction.resetBucket())} popUpTrigger={popUpTrigger}/>
                : <></>
            }
        </>
    );
};
export default ResetBucketPopup;