import React, { useState } from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import Checked from '../../../image/icons/icon_CheckBox_selected_x3.png';
import NotCheck from '../../../image/icons/icon_CheckBox_deselect_x3.png';

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
            <div className="con">
                <img className='check' src={!isChecked ? Checked:NotCheck}></img>
                <div className="name">{name}</div>
            </div>
            
            <div className="price"> + {numberWithCommas(price)}원</div>
        </div>
    );
};

export default SelectItem;