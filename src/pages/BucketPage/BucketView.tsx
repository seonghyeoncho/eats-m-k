import React from 'react';
import ReadyBucket from '../../components/Bucket/ReadyBucket';
import BucketItem from '../../components/Bucket/BucketItem';

interface Props {
    bucket: any;
    totalPrice: number;
    store: string | string[] | null;
    table: string | string[] | null;
}

const BucketView = ({bucket,totalPrice,store, table}:Props) => {
    
    console.log(bucket);

    return (
        <>
            <div className="bucket-content-con">
                {
                    bucket.length === 0 ? 
                        <ReadyBucket/>
                    :
                       <BucketItem bucket={bucket} store={store} table={table} totalPrice={totalPrice}/>
                }
                <div className="block"></div>
            </div>
        </>
    );
}

export default BucketView;