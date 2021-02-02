import React from 'react';
import ModifCount from './ModifCount';
import BucketItemInfo from './BucketItemInfo';
import MoreMenuListContainer from './MoreMenuListContainer';
import { Bucket } from '../../redux/reducers/DataReducer';
import DeleteMenuContainer from '../CancleOrderButton/DeleteMenuContainer';

interface Props {
    bucket: Bucket[];
};

const BucketItem = ({bucket}:Props) => {
    return(
        <div className="item">
            {
                bucket.map((item:Bucket): JSX.Element | undefined => {
                        return (
                            <div className="content" key={item.id}>
                                <div className="item"> 
                                    <BucketItemInfo name={item.name} itemTotalPrice={item.itemTotalPrice} count={item.count} price={item.price}/>
                                    <MoreMenuListContainer more={item.option}/>
                                    <DeleteMenuContainer id={item.id} itemTotalPrice={item.itemTotalPrice}/>
                                    <ModifCount c={item.count} select={item}/>
                                </div>
                            </div>
                        );
                    }
                )
            }
        </div>
    );
};
export default BucketItem;