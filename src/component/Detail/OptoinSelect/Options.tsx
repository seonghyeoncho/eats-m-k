import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { SelectAction } from '../../../redux/actions';
import SelectItem from './SelectItem';

interface Option {
    name: string,
    price: number
};

interface Props {
    options: Option[];
    maxSelect: number;
    optionName : string;
};

const Options = ({ maxSelect, options, optionName, }:Props) => {

    const dispatch = useDispatch();
    const [ totalCheck, setTotalCheck ] = useState<number>(0);

    const optionHandler = (selectOption:Option, isChecked: boolean) => {
        console.log(isChecked);
        const option = {
            name: selectOption.name,
            price: selectOption.price,
            optionCategory: optionName
        };
        if(isChecked){
            if(totalCheck < maxSelect) {
                setTotalCheck(totalCheck + 1);
                dispatch(SelectAction.selectOptoin(option));

            } else {
                console.log('over max select!');
            }
        } else {
            setTotalCheck(totalCheck - 1);
            dispatch(SelectAction.deleteOptoin(option));
        };
    };

    return (
        <div className="options">
            {
                options.map((op:Option) => {
                    return (
                        <SelectItem name={op.name} price={op.price} optionHandler={optionHandler} maxSelect={maxSelect} totalCheck={totalCheck}/>
                    )
                })
            }
        </div>
    );
}

export default Options;