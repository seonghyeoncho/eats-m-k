import React from 'react';
import numberWithCommas from '../../functions/addCommaFunc';

interface Props {
    bucket: any;
    store: string | string[] | null;
    table: string | string[] | null;
    totalPrice: number
}

const BucketViewInfo = ({bucket, store, table, totalPrice}:Props) => {
    return(
        <>
            { 
                bucket.length !== 0 ? 
                    <div className="bucket-info-con">
                        <div className="bucket-info">
                            <div className="bucket-info-store">{store}</div>
                            <div className="bucket-info-table">테이블 {table}</div>
                            <div className="bucket-info-price">{numberWithCommas(totalPrice)}원</div>
                        </div>
                    </div>
                :
                    <></>
            }
        </>
    );
};

export default BucketViewInfo;