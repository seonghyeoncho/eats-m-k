import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import OptionSelect from './OptionSelect';
import './OptionSelect.scss';

interface Props {
};

const OptionSelectContainer = ({ }:Props) => {
    const { option } = useSelector((state:RootState)=>({
        option:state.Option.option,
    }));
    return (
        <div className="option-con">
            <OptionSelect 
                option={option}
            />
        </div>
    );
}

export default OptionSelectContainer;