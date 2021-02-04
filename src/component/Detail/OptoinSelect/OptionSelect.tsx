import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectAction } from '../../../redux/actions';
import { OptionGroup } from '../../../redux/Types';
import Options from './Options';

interface Option {
    name: string,
    price: number
};
interface OptionGroups {
    name: string,
    selecOption: Option[],
    optionPrice: number,
}

interface Props {
    selectOptionGroups: string[];
    optionGroups:  OptionGroup[];
};

const OptionSelect = ({ selectOptionGroups, optionGroups }:Props) => {

    return (
        <div className="select-option">
            {
                optionGroups.map((option:OptionGroup) => {
                    if(selectOptionGroups.includes(option.name)){
                        return(
                            <div className="content">
                                <div className="title">
                                    <div className="name">{option.name}</div>
                                    <div className="max">(최대 : {option.maxSelect}개)</div>
                                </div>
                                <Options options={option.options} maxSelect={option.maxSelect} optionName={option.name}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
};

export default OptionSelect;