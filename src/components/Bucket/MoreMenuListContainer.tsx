import React from 'react';
import MoreMenuList from '../organisms/MenuDetail/MoreMenuList';

interface Props {
    more:any
};

const MoreMenuListContainer = ({more}:Props) => {
    return(
        <div>
            {
                more !== undefined ? 
                    <MoreMenuList more={more}/>
                :
                    <div>추가사항 없음</div>
            }
        </div>
    ); 
};

export default MoreMenuListContainer;