import React from 'react';
import P_img from '../../image/icons/icon_plus_x3.png';
import M_img from '../../image/icons/icon_minus_x3.png';
import { useDispatch } from 'react-redux';
import { modifBucketDe, modifBucketIn } from '../../redux/actions/DataAction';
import { DataAction } from '../../redux/actions';

interface Props {
    c: number;
    select: any
}

const ModifCount = ({c, select}:Props) => {
    const dispatch = useDispatch();

    const onDecrease = () => {
        console.log(select);
        dispatch(modifBucketDe(select));
        dispatch(DataAction.loadDataFirebase());
    }
    const onIncrease = () => {
        console.log(select);
        dispatch(modifBucketIn(select));
        dispatch(DataAction.loadDataFirebase());
    }


    return (
        <div className="modif-bucket-counter-con">
            <div className="modif-bucket-counter">
                <div onClick={()=>{onDecrease();}}><img src={M_img}/></div>
                <div className="count">{c}</div>
                <div onClick={()=>{onIncrease();}}><img src={P_img}/></div>
            </div>
            {/* */}
        </div>
        
    );
}

export default ModifCount;