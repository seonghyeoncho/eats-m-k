import React from 'react';
import P_img from '../../../image/icons/icon_plus_x3.png';
import M_img from '../../../image/icons/icon_minus_x3.png';
import { useDispatch } from 'react-redux';
import { modifBucketDe, modifBucketIn } from '../../../redux/actions/DataAction';
import { DataAction } from '../../../redux/actions';
import { Bucket } from '../../../redux/reducers/DataReducer';
import './ModifBucket.scss';

interface Props {
    c: number;
    select: Bucket;
};

const ModifBucket = ({c, select}:Props) => {

    const dispatch = useDispatch();
    const onDecrease = () => {
        if(c !== 1) {
            dispatch(modifBucketDe(select));
            dispatch(DataAction.loadDataFirebase());
        }
    };
    const onIncrease = () => {
        dispatch(modifBucketIn(select));
        dispatch(DataAction.loadDataFirebase());
    };

    return (
        <div className="modif">
            <div className="modif-content">
                <div onClick={()=>{onDecrease();}} className={`m ${ c ===1 ? 'nm':''}`}>
                    <img src={M_img} alt="M"/>
                </div>
                <div className="count">{c}</div>
                <div onClick={()=>{onIncrease();}} className="p-img">
                    <img src={P_img} alt="P"/>
                </div>
            </div>
        </div>
    );
};

export default ModifBucket;