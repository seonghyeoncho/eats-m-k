import React from 'react';
import Options from './Options';
import { Option } from '../../../redux/Types';

interface Props {
    options: Option[];
};

const OptionsContainer = ({ options }:Props) => {
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