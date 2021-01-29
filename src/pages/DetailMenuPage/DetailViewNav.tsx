import React from 'react';
import { useDispatch } from 'react-redux';
import BucketButtonContainer from '../../components/atoms/BucketButton/BucketButtonContainer';
import Arrow from '../../icons/icon_arrow_back_black_x3.png';
import { resetCount } from '../../modules/counters';

interface Props {
    totalPrice:number;
    history:any;
}

const DetailViewNav = ({totalPrice,history, }:Props) => {

    const dispatch = useDispatch();

    return(
        <div className="detail-nav">
            <div className="detail-nav-content">
                <img  className="back-bt" onClick={()=>{history.goBack();dispatch(resetCount());}} src={Arrow} alt="Arrow"/>    
                <div className="detail-nav-content-text">MENU</div>
                <BucketButtonContainer totalPrice={totalPrice}/>
            </div>
        </div>
    );
};

export default DetailViewNav;