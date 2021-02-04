import React from 'react';
import { useDispatch } from 'react-redux';
import BucketButtonContainer from '../../BucketButton/BucketButtonContainer';
import Arrow from '../../../image/icons/icon_arrow_back_white_x3.png';
import { CounterAction } from '../../../redux/actions';
import './DetailNav.scss';
interface Props {
    history:any;
};

const DetailNav = ({history, }:Props) => {
    const dispatch = useDispatch();
    return(
        <div className="detailnav">
            <div className="content">
                <img  className="back-bt" src={Arrow} alt="Arrow" onClick={()=>{history.goBack();dispatch(CounterAction.resetCount());}}/>    
                <div className="text">MENU</div>
                <BucketButtonContainer/>
            </div>
        </div>
    );
};

export default DetailNav;