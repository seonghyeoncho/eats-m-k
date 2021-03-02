import React from 'react';
import { optionsArr } from '../../../functions/makeId';
import { Option } from '../../../redux/Types';
import OptionsItem from './OptionsItem';

interface Props {
    options: Option[];
};

const Options = ({ options }:Props) => {
    const count = optionsArr(options).length;
    const checkOptionState = (op:any) => {
        let c = 0;
        op.forEach((item:any) => {
            if(item.state) c++;
        });
        return c;
    }
    return (
        <div className="options">
            {

                options.map((op:any):JSX.Element | undefined => {
                    if(count !== 0 && checkOptionState(op.options) !== 0){
                        return (
                            <div  className="item-op" key={op.name}>
                                <div className="item-ca">
                                    {op.name} : 
                                </div>
                                <OptionsItem options={op.options} count={count}/>
                            </div>
                        )
                    }
                    return <></>;
                })
            }
        </div>
    );
}

export default Options;