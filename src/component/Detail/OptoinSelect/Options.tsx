import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { SelectAction } from '../../../redux/actions';
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

    const dispatch = useDispatch();
    const [ totalCheck, setTotalCheck ] = useState<number>(0);
    console.log('maxSelect', maxSelect)
    const optionHandler = (isChecked: boolean, test:any[]) => {
        console.log(isChecked);
        console.log(totalCheck)
        if(isChecked){
            if(totalCheck < maxSelect) {
                setTotalCheck(totalCheck + 1);

            } else {
                console.log('over max select!');
            }
        } else {
            setTotalCheck(totalCheck - 1);
        };
    };

    return (
        <div className="options">
            {
                options.map((op:Option) => {
                    return (
                        <div key={op.name}>
                            <SelectItem name={op.name} price={op.price} maxSelect={maxSelect} totalCheck={totalCheck} state={op.state} optionHandler={optionHandler}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Options;