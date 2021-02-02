import React from 'react';
import OptionSelectContainer from './OptoinSelect/OptionSelectContainer';
import { Option } from '../../redux/Types'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface Props {
    moreMenuHandler: (m:Option,isChecked:boolean) => void;
};

const DetailContent = ({ moreMenuHandler }:Props) => {
    const { select } = useSelector((state:RootState) => ({
        select:state.Select.select,
    }));

    return(
        <div>
            <OptionSelectContainer moreMenuHandler={moreMenuHandler}/>
        </div>
    );
};
export default DetailContent;