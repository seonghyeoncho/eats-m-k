import React from 'react';
import OptionSelectContainer from './OptoinSelect/OptionSelectContainer';
import { Option } from '../../redux/Types'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface Props {
    
};

const DetailContent = ({ }:Props) => {
    const { select } = useSelector((state:RootState) => ({
        select:state.Select.select,
    }));

    return(
        <div>
            <OptionSelectContainer/>
        </div>
    );
};
export default DetailContent;