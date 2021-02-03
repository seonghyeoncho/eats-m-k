import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { SelectAction } from '../../../redux/actions';
import SelectItem from './SelectItem';

interface Option {
    name: string,
    price: number
};

interface Props {
    options: Option[];
    maxSelect: number;
    optionName : string;
};

const Options = ({ maxSelect, options, optionName, }:Props) => {

    const dispatch = useDispatch();

    const optionHandler = (selectOption:Option, isChecked: boolean) => {
        const option = {
            name: selectOption.name,
            price: selectOption.price,
            optionCategory: optionName
        };
        if(isChecked){
            dispatch(SelectAction.selectOptoin(option));
        } else {
            dispatch(SelectAction.deleteOptoin(option));
        };
    };

    return (
        <div className="options">
            {
                options.map((op:Option) => {
                    return (
                        <SelectItem name={op.name} price={op.price} optionHandler={optionHandler}/>
                    )
                })
            }
        </div>
    );
}

export default Options;