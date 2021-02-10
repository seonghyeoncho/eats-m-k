import React from 'react';
import BucketItem from '../BucketItem/BucketItem';
import { Bucket } from '../../../redux/reducers/DataReducer';
import './BucketContent.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import Default from '../../../image/graphics/graphic_finish_x3.png';

interface Props {
    bucket:  Bucket[];
};

const BucketContent = ({ bucket }:Props) => {
    const { totalPrice } = useSelector((state:RootState) => ({
        totalPrice:state.Data.data.total_price,
    }));
    return (
        <div className="bucket-content">
            <BucketItem bucket={bucket} />
            {
                totalPrice === 0 ? <div className="bucket-default"><img className="bucket-default-img" src={Default} alt='default'/><div className="default-text">메뉴를 추가해주세요</div></div>: <></>
            }
        </div>
    );
}

export default BucketContent;