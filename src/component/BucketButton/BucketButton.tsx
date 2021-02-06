import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../image/graphics/graphic_cart_x3.png';

type Props = {
}

const BucketButton = ({}:Props) => {

    return (
        <div>
            <Link to={`/bucket`}>
                    <img className="bucket-img" src={Cart} alt="Cart"/>
            </Link>
        </div>
    );

}

export default BucketButton;