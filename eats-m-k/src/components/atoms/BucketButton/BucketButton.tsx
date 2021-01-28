import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../../graphics/graphic_cart_x3.png';


type Props = {
    store :string | string[] | null;
    table:string | string[] | null;
    
}
const BucketButton = ({store,table}:Props) => {

    return (
        <div>
            <Link to={`/bucket/?store=${store}&table=${table}`}>
                
                    <img className="bucket-img" src={Cart} />

                
            </Link>
            

        </div>
    );

}

export default BucketButton;