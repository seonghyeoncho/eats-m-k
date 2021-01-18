import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import OrderButtonDirect from './OrderButtonDirect';

interface Props {
    select: {

        menu:string,
        price:number,
        more: any,
        count:number,
        itemTotalPrice: number

    };
    history:any
    
}

const BucketPreview = ({select,history}:Props) => {

    const { store, table,totalPrice } = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table,
        totalPrice:state.totalPrice.price
    }))
    console.log(select.more)


    return (
        <div>
            <div>
                {store}<br/>
                테이블 {table}
            </div>
            <div>
                {totalPrice}
            </div>
            <div>
                {select.menu}{select.itemTotalPrice}
                <br/>
                개수 : {select.count}개 {select.price}
                {
                    
                }

            </div>
            <button onClick={history.goBack()}>취소</button>
            <OrderButtonDirect select={select}/>

        </div>
    );
}
export default BucketPreview;