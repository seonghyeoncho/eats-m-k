import React from 'react';
import numberWithCommas from '../../functions/addCommaFunc';
import Test from '../../image/graphics/testImg.jpg'

interface Props {
    name: string,
    price: number,
    width: number;
    height: number;
    radius: number;
}
const BigBox = ({ name, price, width, height, radius}:Props) => {
    return (
        <div className="item">
            <div className="scinfo">
                <div className="name">{name}</div>
                <div className="price">{numberWithCommas(price)}원</div>
            </div>
            <div className="box" style={{width:`${width}px`, height:`${height}px`, borderRadius:`${radius}` }}>
                <img src={Test} className="test" alt="background-img"/>
            </div>
        </div>
    );
};

export default BigBox;