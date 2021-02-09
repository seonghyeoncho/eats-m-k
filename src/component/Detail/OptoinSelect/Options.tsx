import React from 'react';
import SelectItem from './SelectItem';

interface Option {
    name: string,
    price: number,
    state:boolean,
};

interface Props {
    options:any[];
    maxSelect: number;
};

const Options = ({ maxSelect, options, }:Props) => {
    return (
        <div className="options">
            {
                options.map((op:Option) => {
                    return (
                        <div key={op.name}>
                            <SelectItem name={op.name} price={op.price} maxSelect={maxSelect} state={op.state}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Options;