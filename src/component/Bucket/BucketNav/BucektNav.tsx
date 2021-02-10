import React from 'react';
import { useSelector } from 'react-redux';
import Arrow from '../../../image/icons/icon_arrow_back_white_x3.png';
import { RootState } from '../../../redux';
import './BucketNav.scss';

interface Props {
    goBack: () => void;
    popUpTrigger: () => void
}
const BucketNav = ({goBack,popUpTrigger}:Props) => {
    const { totalPrice } =useSelector((state:RootState) => ({
        totalPrice:state.Data.data.total_price,
    }))
    return (
        <div className="bucket-nav" >
            <div className="back-img">
                <img src={Arrow} onClick={goBack} alt="Arrow"/>
            </div>
            <div className="text"> 장바구니</div>
            {totalPrice === 0 ? <div></div> :<div onClick={popUpTrigger} className='reset'>전체 삭제</div>}
        </div>

    );
};

export default BucketNav;