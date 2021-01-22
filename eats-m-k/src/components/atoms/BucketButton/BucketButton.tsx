import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../modules';
import Cart from '../../../graphics/graphic_cart_x3.png';


type Props = {
    store :string | string[] | null;
    table:string | string[] | null;
    
}
const BucketButton = ({store,table}:Props) => {

    return (
        <div>
            <Link to={`/bucket/?store=${store}&table=${table}`}>
                
                    <img className="bucket-img" src={Cart} width="37px" />

                
            </Link>
            

        </div>
    );

}

export default BucketButton;