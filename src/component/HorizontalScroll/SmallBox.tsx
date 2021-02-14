import React from 'react';
import numberWithCommas from '../../functions/addCommaFunc';
import Test from '../../image/graphics/testImg.jpg'
import BG from '../../image/graphics/graphic_TextBG_x3.png'

interface Props {
    name: string,
    price: number,
    width: number;
    height: number;
    radius: number;
}
const SmallBox = ({ name, price, width, height, radius}:Props) => {
    
    return (
        <div className="item"  onClick={()=> window.scrollTo(0,0)}>
            <div className="box" style={{width:`${width}px`, height:`${height}px`, borderRadius:`${radius}`}}>
                <img src={Test} className="smallbox-img" alt="background-img"/>
                <img src={BG} className="smallbox-box" alt="text-box"/>
                <div className="scinfo">
                    <div className="name">{name}</div>
                    <div className="price">{numberWithCommas(price)}원</div>
                </div>
            </div>
        </div>
    );
};

export default SmallBox;