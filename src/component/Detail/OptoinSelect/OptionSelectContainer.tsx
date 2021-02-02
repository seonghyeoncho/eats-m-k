import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import OptionSelect from './OptionSelect';
import './OptionSelect.scss';

interface Props {
    optionHandler: ( m:any, checked:boolean ) => void;
};

const OptionSelectContainer = ({ optionHandler }:Props) => {
    const { optionGroups, selectOptionGroups } = useSelector((state:RootState)=>({
        optionGroups:state.Store.menu.optionGroups,
        selectOptionGroups:state.Select.select.optionGroups
    }));

    return (
        <div className="option-con">
            <div className="title">추가선택</div>
            <OptionSelect 
                optionHandler={optionHandler}
                selectOptionGroups={selectOptionGroups}
                optionGroups={optionGroups}
            />
        </div>
    );
}

export default OptionSelectContainer;