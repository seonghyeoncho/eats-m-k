import React from 'react';
import BucketItem from '../BucketItem/BucketItem';
import { Bucket } from '../../../redux/reducers/DataReducer';
import './BucketContent.scss';

interface Props {
    bucket:  Bucket[];
};

const BucketContent = ({ bucket }:Props) => {
    console.log(bucket);

    return (
        <div className="bucket-content">
            <BucketItem bucket={bucket} />
        </div>
    );
}

export default BucketContent;