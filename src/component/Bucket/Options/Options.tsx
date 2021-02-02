import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import { Option } from '../../../redux/Types';

interface Props {
    options: Option[];
};

const Options = ({ options }:Props) => {

    return (
        <div className="options">
            {
                options.map((op:Option) => {
                    return (
                        <div  className="item">
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