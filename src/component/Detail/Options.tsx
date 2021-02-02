import React from 'react';
import numberWithCommas from '../../functions/addCommaFunc';
import { Option } from '../../redux/Types';

interface Props {
    options: Option[];
    optionHandler: ( o:any, checked:boolean ) => void;
};

const Options = ({ options, optionHandler }:Props) => {

    return (
        <div className="options">
            {
                options.map((op:Option) => {
                    return (
                        <div  className="item" onClick={() => optionHandler(op,true)}>
                            <div className="name">{op.name}</div>
                            <div className="price"> + {numberWithCommas(op.price)}원</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Options;