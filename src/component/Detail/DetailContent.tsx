import React from 'react';
import OptionSelectContainer from './OptoinSelect/OptionSelectContainer';
import { Option } from '../../redux/Types'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface Props {
    optionHandler: (m:Option,isChecked:boolean) => void;
};

const DetailContent = ({ optionHandler }:Props) => {
    const { select } = useSelector((state:RootState) => ({
        select:state.Select.select,
    }));

    return(
        <div>
            <OptionSelectContainer optionHandler={optionHandler}/>
        </div>
    );
};
export default DetailContent;