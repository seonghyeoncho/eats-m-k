import React, { useState } from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
interface Option {
    name: string,
    price: number
};

interface Props {
    name: string;
    price: number;
    optionHandler: ( op:Option, isChecked: boolean ) => void;
}

const SelectItem = ({ name, price, optionHandler }:Props) => {
    const [ isChecked, setIsChecked ] = useState<boolean>(true);
    
    const option: Option = {
        name: name,
        price: price
    };
    
    return (
        <div className="item" onClick={() => {setIsChecked(!isChecked);optionHandler(option, isChecked);}}>
            <div className="name">{name}</div>
            <div className="price"> + {numberWithCommas(price)}원</div>
        </div>
    );
};

export default SelectItem;