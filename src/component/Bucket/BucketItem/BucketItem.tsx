import React from 'react';
import ModifBucket from '../ModifBucket/ModifBucket';
import BucketItemInfo from './BucketInfo/BucketItemInfo';
import { Bucket } from '../../../redux/reducers/DataReducer';
import DeleteMenuContainer from '../../DeleteMenu/DeleteMenuContainer';
import './BucketItem.scss';
import OptionsContainer from '../Options/OptionsContainer';

interface Props {
    bucket: Bucket[];
};

const BucketItem = ({ bucket }:Props) => {
    return(
        <div className="items">
            {
                bucket.map((item:Bucket): JSX.Element | undefined => {
                    return (
                        <div className="content" key={item.id}>
                            <div className="item"> 
                                <BucketItemInfo 
                                    name={item.name} 
                                    itemTotalPrice={item.itemTotalPrice} 
                                    count={item.count} 
                                    price={item.price}
                                />
                                <OptionsContainer options={item.options}/>
                                <div className="line"/>
                                <div className="modif-bt">
                                    <DeleteMenuContainer id={item.id} itemTotalPrice={item.itemTotalPrice}/>
                                    <ModifBucket c={item.count} select={item}/>
                                </div>
                            </div>
                        </div>
                    )}
                )
            }
        </div>
    );
};

export default BucketItem;