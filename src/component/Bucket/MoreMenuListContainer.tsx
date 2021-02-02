import React from 'react';
import MoreMenuList from '../Detail/MoreMenuList';

interface Props {
    more:any
};

const MoreMenuListContainer = ({more}:Props) => {
    return(
        <div>
            {
                more !== undefined ? <MoreMenuList more={more}/>
                : <></>
            }
        </div>
    ); 
};

export default MoreMenuListContainer;