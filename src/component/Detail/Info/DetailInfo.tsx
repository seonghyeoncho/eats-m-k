import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';

interface Props {
    name:string | null;
    price: number;
    desc: string;
};

const DetailInfo = ({name, price, desc}:Props) => {
    return (
        <div className="info">
            <div className="content">
                <div className="info1">
                    <div className="name">{name}</div>
                    { desc !== '' ?<div className="desc">{desc}</div> : <></>}
                </div>
                <div className="price">{numberWithCommas(price)}원</div>
            </div>
            
        </div>
    );
};

export default DetailInfo;

