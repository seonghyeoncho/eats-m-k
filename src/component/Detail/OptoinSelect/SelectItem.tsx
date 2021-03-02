/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import Checked from '../../../image/icons/icon_CheckBox_selected_x3.png';
import NotCheck from '../../../image/icons/icon_CheckBox_deselect_x3.png';
import Rchecked from '../../../image/icons/icon_radio_selected_x3.png';
import RNotCheck from '../../../image/icons/icon_radio_deselected_x3.png';
import { useDispatch } from 'react-redux';
import { OptionAction } from '../../../redux/actions';

interface Props {
    name: string;
    price: number;
    maxSelect: number;
    state: boolean;
}

const SelectItem = ({ name, price, maxSelect, state }:Props) => {

    const dispatch = useDispatch();
    const checkCount = () => {
        dispatch(OptionAction.commendSelectOption(name, maxSelect, state))
    };
    useEffect(() => {
        if(maxSelect === 1 && price === 0) {
            checkCount();
        }
    }, []);

    return (
        <div className="item" onClick={checkCount}>
            <div className="con">
                {
                    maxSelect !== 1? <img className='check' src={state ? Checked : NotCheck} alt="check"></img>
                    : <img className='Rcheck' src={state ? Rchecked : RNotCheck} alt="check"></img>
                }
                <div className="name">{name}</div>
            </div>
            <div className="price"> + {numberWithCommas(price)}원</div>
        </div>
    );
};

export default SelectItem;