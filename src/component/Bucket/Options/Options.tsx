import React from 'react';
import { optionsArr } from '../../../functions/makeId';
import { Option } from '../../../redux/Types';
import OptionsItem from './OptionsItem';

interface Props {
    options: Option[];
};

const Options = ({ options }:Props) => {
    const count = optionsArr(options);
    return (
        <div className="options">
            {

                options.map((op:any):JSX.Element | undefined => {
                    var count = 0;
                    count = op.options.filter((state:any) => state.state === true).length;
                    if(count !== 0){
                        return (
                            <div  className="item-op" key={op.name}>
                                <div className="item-ca">
                                    {op.name}
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