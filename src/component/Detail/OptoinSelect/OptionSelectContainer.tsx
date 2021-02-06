import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { SelectAction } from '../../../redux/actions';
import OptionSelect from './OptionSelect';
import './OptionSelect.scss';

interface Props {
};
interface Option {
    name: string,
    price: number
};
interface OptionGroups {
    name: string,
    selecOption: Option[],
    optionPrice: number,
}

const OptionSelectContainer = ({ }:Props) => {
    const { optionGroups, selectOptionGroups, options, option } = useSelector((state:RootState)=>({
        optionGroups:state.Store.menu.optionGroups,
        selectOptionGroups:state.Select.select.optionGroups,
        options:state.Select.options,
        option:state.Option.option,
    }));

    console.log(options);
    console.log(option);
    return (
        <div className="option-con">
            <OptionSelect 
                option={option}
            />
        </div>
    );
}

export default OptionSelectContainer;