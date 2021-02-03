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
    const { optionGroups, selectOptionGroups, options } = useSelector((state:RootState)=>({
        optionGroups:state.Store.menu.optionGroups,
        selectOptionGroups:state.Select.select.optionGroups,
        options:state.Select.options
    }));

    console.log(options);
    return (
        <div className="option-con">
            <div className="title">추가선택</div>
            <OptionSelect 
                selectOptionGroups={selectOptionGroups}
                optionGroups={optionGroups}
            />
        </div>
    );
}

export default OptionSelectContainer;