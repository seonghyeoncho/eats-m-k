import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';


interface Props {

    price:number;
    menu:string
}

const MenuListItem = ({menu,price}:Props) => {



    return (
        <Link to={`/detail/?menu=${menu}&price=${price}`}>
            <div>{menu}</div>
            <div>{numberWithCommas(price)}원</div>
            <div>사진</div>
            <hr/>
        </Link>
        
    );
}

export default MenuListItem;