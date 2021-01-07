import React from 'react';
import CancleOrderButtonContainer from '../../atoms/CancleOrderButton/CancleOrderButtonContainer';
type Props = {
    item: any
}
const BucketItem = ({item}:Props) => {
    return(

        <div>
            <div>{item.menu}{item.count}{item.price}</div>
            <CancleOrderButtonContainer item={item}/>
        </div>
        
    );
}
export default BucketItem;