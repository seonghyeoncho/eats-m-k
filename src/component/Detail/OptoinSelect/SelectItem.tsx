import React, { useState } from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import Checked from '../../../image/icons/icon_CheckBox_selected_x3.png';
import NotCheck from '../../../image/icons/icon_CheckBox_deselect_x3.png';
import Rchecked from '../../../image/icons/icon_radio_selected_x3.png';
import RNotCheck from '../../../image/icons/icon_radio_deselected_x3.png';

interface Option {
    name: string,
    price: number
};

interface Props {
    name: string;
    price: number;
    optionHandler: ( op:Option, isChecked: boolean ) => void;
    maxSelect: number;
    totalCheck: number;
}

const SelectItem = ({ name, price, optionHandler, maxSelect, totalCheck }:Props) => {
    const [ isChecked, setIsChecked ] = useState<boolean>(true);
    
    const option: Option = {
        name: name,
        price: price
    };
    const checkCount = () => {
        if(isChecked){
            if(totalCheck< maxSelect){
                setIsChecked(!isChecked);
                optionHandler(option, isChecked);
            } else {
                console.log('sdfsdf');
            }
        } else {
            setIsChecked(!isChecked);
                optionHandler(option, isChecked);
        }
    }
    
    return (
        <div className="item" onClick={checkCount}>
            <div className="con">
                {
                    maxSelect !== 1? <img className='check' src={!isChecked ? Checked : NotCheck} alt="check"></img>
                    : <img className='Rcheck' src={!isChecked ? Rchecked : RNotCheck} alt="check"></img>
                }
                <div className="name">{name}</div>
            </div>
            
            <div className="price"> + {numberWithCommas(price)}원</div>
        </div>
    );
};

export default SelectItem;