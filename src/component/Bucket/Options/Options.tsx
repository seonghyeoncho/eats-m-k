import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import { Option } from '../../../redux/Types';
import OptionsItem from './OptionsItem';

interface Props {
    options: Option[];
};
interface O {
    name:string;
    
}

const Options = ({ options }:Props) => {
    console.log(options);

   

    return (
        <div className="options">
            {
                options.map((op:any) => {
                    var count = 0;
                    count = op.options.filter((state:any) => state.state === true).length;
                    if(count !== 0){
                        return (
                            <div  className="item">
                                <div>
                                    {op.name} : 
                                </div>
                                <OptionsItem options={op.options}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default Options;