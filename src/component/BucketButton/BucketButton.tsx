import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../image/icons/icon_cart _x3.png';


const BucketButton = () => {

    return (
        <div className="bucket-img-con">
            <Link to={`/bucket`} className="bucket-href">
                    <img className="bucket-img" src={Cart} alt="Cart"/>
            </Link>
        </div>
    );

}

export default BucketButton;