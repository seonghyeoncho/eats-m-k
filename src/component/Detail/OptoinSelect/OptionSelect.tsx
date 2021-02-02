import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import { Option, OptionGroup } from '../../../redux/Types';


interface Props {
    moreMenuHandler: ( m:any, checked:boolean ) => void;
    selectOptionGroups: string[];
    optionGroups: OptionGroup[];
};

const OptionSelect = ({moreMenuHandler, selectOptionGroups, optionGroups}:Props) => {

    return (
        <div className="option">
            {
                optionGroups.map((option:OptionGroup) => {
                    if(selectOptionGroups.includes(option.name)){
                        return(
                            <div className="content">
                                <div className="title">최대 : {option.maxSelect}개</div>
                                {
                                    option.options.map((op:Option) => {
                                        return (
                                            <div  className="item" onClick={()=>moreMenuHandler(op,true)}>
                                                <div className="name">{op.name}</div>
                                                <div className="price"> + {numberWithCommas(op.price)}원</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                })
            }
        </div>
    );
};

export default OptionSelect;