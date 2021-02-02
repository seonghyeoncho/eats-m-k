import React from 'react';
import ReadyBucket from './ReadyBucket';
import BucketItem from './BucketItem';
import { Bucket } from '../../redux/reducers/DataReducer';

interface Props {
    bucket:  Bucket[];
};

const BucketContent = ({ bucket }:Props) => {
    console.log(bucket);

    return (
        <div className="bucket-content-con">
            {
                bucket.length === 0 ? <ReadyBucket/>
                : <BucketItem bucket={bucket} />
            }
        </div>
    );
}

export default BucketContent;