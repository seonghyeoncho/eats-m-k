import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import Checked from '../../../image/icons/icon_CheckBox_selected_x3.png';
import NotCheck from '../../../image/icons/icon_CheckBox_deselect_x3.png';
import Rchecked from '../../../image/icons/icon_radio_selected_x3.png';
import RNotCheck from '../../../image/icons/icon_radio_deselected_x3.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { OptionAction } from '../../../redux/actions';

interface Option {
    name: string,
    price: number
};
interface SelectedOption {
    name: string,
    maxSelect: number,
    options: O[]
}
interface O {
    name: string;
    price: number;
    state:boolean;
};

interface Props {
    name: string;
    price: number;

    maxSelect: number;
    totalCheck: number;
    state: boolean;
    optionHandler: (isChecked:boolean,test:any[]) => void
}

const SelectItem = ({ name, price, maxSelect, totalCheck, state, optionHandler }:Props) => {

    const dispatch = useDispatch();
    const { options } = useSelector((state:RootState) => ({
        options: state.Option.option,
    }))
    console.log(state);
    console.log(options);
    const checkCount = () => {
        if(maxSelect === 1) {
            console.log('this options is radio');
            let ew:any[] = [];
            let test:any[] = [];
            for( let i=0 ; i<options.length; i++) {
                const newSelectedOptions = options[i].options.map((O:O) => {
                    if(O.name === name) {
                        return {
                            name:O.name,
                            price:O.price,
                            state: true
                        }
                    } else {
                        return {
                            name:O.name,
                            price:O.price,
                            state: false
                        }
                    }
                });
                console.log(newSelectedOptions);
                test = ew.concat({
                    name:options[i].name,
                    maxSelect: options[i].maxSelect,
                    options: newSelectedOptions,
                })
                ew = test;
                console.log("1")
                break;
            }
            console.log("2")
            dispatch(OptionAction.setSelectOption(test));
        } else {
            console.log('this is checkbox');
            console.log(maxSelect);
            let count = 0;
            options.map((Op:SelectedOption) =>  {
                count = Op.options.filter((state:O) => state.state === true).length;
            });
            console.log(count);
            let ew:any[] = [];
            let test:any[] = [];
            if(count < maxSelect) {
                for( let i=0 ; i<options.length; i++) {
                    const newSelectedOptions = options[i].options.map((O:O) => {
                        if(O.name === name) {
                            return {
                                name:O.name,
                                price:O.price,
                                state: true
                            }
                        } else return O;
                    });
                    console.log(newSelectedOptions);
                    test = ew.concat({
                        name:options[i].name,
                        maxSelect: options[i].maxSelect,
                        options: newSelectedOptions,
                    })
                    ew = test;
                }
                dispatch(OptionAction.setSelectOption(test));
            } else {
                console.log('over max select')
            }
        }
    };

    return (
        <div className="item" onClick={checkCount}>
            <div className="con">
                {
                    maxSelect !== 1? <img className='check' src={state ? Checked : NotCheck} alt="check"></img>
                    : <img className='Rcheck' src={state ? Rchecked : RNotCheck} alt="check"></img>
                }
                <div className="name">{name}</div>
            </div>
            
            <div className="price"> + {numberWithCommas(price)}원</div>
        </div>
    );
};

export default SelectItem;