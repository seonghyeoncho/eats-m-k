import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import CancleOrderButtonContainer from '../../atoms/CancleOrderButton/CancleOrderButtonContainer';
type Props = {
    item: any
}
const BucketItem = ({item}:Props) => {
    return(

        <div>
            <div>{item.menu} X {item.count} {numberWithCommas(item.price)}원</div>
            <CancleOrderButtonContainer item={item}/>
        </div>
        
    );
}
export default BucketItem;