import React from 'react';
import Cart from '../../graphics/graphic_cart_x3.png';

const ReadyBucket = () => {
    return(
        <div className="ready-bucket-con">
            <img src={Cart}/>
            <div className="ready-bucket-text">메뉴를 추가해 주세요</div>
        </div>
    );
};
export default ReadyBucket;