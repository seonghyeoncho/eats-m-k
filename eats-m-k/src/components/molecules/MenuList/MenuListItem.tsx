import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';


interface Props {

    price:number;
    menu:string
}

const MenuListItem = ({menu,price}:Props) => {



    return (
        <Link to={`/detail/?menu=${menu}&price=${price}`} >
            
            <div className="item-con">
                <div className="item-content">
                    <div className="item-menu">{menu}</div>
                    <div className="item-speci">상세 설명</div>
                    <div className="item-price">{numberWithCommas(price)}원</div>
                </div>
                <div className="item-img">사진</div>
                
                
            </div>
            <div className="line"></div>

           
        </Link>
        
    );
}

export default MenuListItem;