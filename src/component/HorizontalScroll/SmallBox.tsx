import React from 'react';

interface Props {
    name: string,
    price: number,
    width: number;
    height: number;
    radius: number;
}
const SmallBox = ({ name, price, width, height, radius}:Props) => {
    return (
        <div className="item">
            <div className="box" style={{width:`${width}px`, height:`${height}px`, borderRadius:`${radius}` }}>
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="price">{price}</div>
                </div>
            </div>
        </div>
    );
};

export default SmallBox;