import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DataAction } from '../../redux/actions';
import PopUp from '../Popup/PopUp';
import DeleteMenu from './DeleteMenu';
import './DeleteMenu.scss';

interface Props {
    id:string;
    itemTotalPrice:number;
};

const DeleteMenuContainer = ({id, itemTotalPrice}:Props) => {

    const [ popUpState, setPopUpState ] = useState<boolean>(false);
    const content = '선택한 메뉴를 장바구니에서 삭제하시겠습니까?';
    const dispatch = useDispatch();
    const popUpTrigger = () => {  
         setPopUpState(!popUpState);
    };
    const deleteOrders = () => {
        dispatch(DataAction.deleteBucket(id, itemTotalPrice));
    };
    return (
        <>
            { popUpState ? <PopUp title={'메뉴삭제'} content={content} func={deleteOrders} popUpTrigger={popUpTrigger} />: null}
            <DeleteMenu popUpTrigger={popUpTrigger}/>
        </>
    );
}

export default DeleteMenuContainer;