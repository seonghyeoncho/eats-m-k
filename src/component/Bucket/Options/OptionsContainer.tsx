import React from 'react';
import Options from './Options';
import { Option } from '../../../redux/Types';
import './Options.scss';
interface Props {
    options: Option[];
};

const OptionsContainer = ({ options }:Props) => {
    console.log(options)
    return(
        <div>
            {
                options.length !== 0 ? <Options options={options}/>
                : <></>
            }
        </div>
    ); 
};

export default OptionsContainer;