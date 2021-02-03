import React from 'react';

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
            <div className="info">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <div className="box" style={{width:`${width}px`, height:`${height}px`, borderRadius:`${radius}` }}></div>
        </div>
    );
};

export default BigBox;