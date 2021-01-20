import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../modules';
import Cart from '../../../images/icon_cart@3x.png';
import Gif from '../../../graphics/loading_1_solid.gif';

type Props = {
    store :string | string[] | null;
    table:string | string[] | null;
    
}
const BucketButton = ({store,table}:Props) => {

    return (
        <div>
            <Link to={`/bucket/?store=${store}&table=${table}`}>
                
                    <img src={Cart} width="40px" height="40px"/>

                
            </Link>
            

        </div>
    );

}

export default BucketButton;