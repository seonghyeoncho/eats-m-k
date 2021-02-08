import React from 'react';
import Options from './Options';

interface Option {
    name: string;
    price: number;
    state:boolean;
};
interface SelectedOption {
    name: string,
    maxSelect: number,
    options: Option[]
};
interface Props {
    option: SelectedOption[];
};

const OptionSelect = ({ option }:Props) => {

    return (
        <div className="select-option">
            {
                option.map((op:SelectedOption) => {
                    return(
                        <div className="content" key={op.name}>
                            <div className="title">
                                <div className="name">{op.name}</div>
                                <div className="max">최대 : {op.maxSelect}개</div>
                            </div>
                            <Options options={op.options} maxSelect={op.maxSelect}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default OptionSelect;