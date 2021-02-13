import React from 'react';
import { useDispatch } from 'react-redux';
import BucketButtonContainer from '../../BucketButton/BucketButtonContainer';
import Arrow from '../../../image/icons/icon_arrow_back_white_x3.png';
import { CounterAction } from '../../../redux/actions';
import './DetailNav.scss';
interface Props {
    history:any;
    name:string;
    state:boolean
};

const DetailNav = ({history, name, state }:Props) => {
    const dispatch = useDispatch();
    return(
        <div className={state? 'detailnav-b':'detailnav'}>
            <div className="content-detail">
                <div>
                    <img className="back-bt" src={Arrow} alt="Arrow" onClick={()=>{history.goBack();dispatch(CounterAction.resetCount());}}/> 
                </div>   
                <div className="text">{name}</div>
                <BucketButtonContainer/>
            </div>
        </div>
    );
};

export default DetailNav;