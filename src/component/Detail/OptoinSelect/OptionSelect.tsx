import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import { Option, OptionGroup } from '../../../redux/Types';
import Options from '../Options';


interface Props {
    optionHandler: ( o:any, checked:boolean ) => void;
    selectOptionGroups: string[];
    optionGroups: OptionGroup[];
};

const OptionSelect = ({optionHandler, selectOptionGroups, optionGroups}:Props) => {

    return (
        <div className="option">
            {
                optionGroups.map((option:OptionGroup) => {
                    if(selectOptionGroups.includes(option.name)){
                        return(
                            <div className="content">
                                <div className="title">최대 : {option.maxSelect}개</div>
                                <Options optionHandler={optionHandler} options={option.options}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
};

export default OptionSelect;