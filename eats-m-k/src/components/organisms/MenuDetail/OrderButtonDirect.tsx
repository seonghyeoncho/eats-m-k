import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { increase } from '../../../modules/totalPrice';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';

interface Props {

    select: {

        menu:string,
        price:number,
        more: any,
        count:number,
        itemTotalPrice: number

    };

}


const OrderButtonDirect = ({select}:Props) => {

    const { store, table, count,totalPrice} = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table,
        count:state.counters.count,
        totalPrice:state.totalPrice.price
    }))

    const dispatch = useDispatch();


    const onClick = () => {

        var a = '0'
        if( select.more === undefined) { a = '1' } 

        const Obj:any = [
            {
                ...select,
                count:count,
                id:`${select.menu}/${count}/${a}`,
            }

        ];
        dispatch(increase(select.itemTotalPrice));

        dbService.collection(`${store}`).doc(`${table}`).update({
            'bucket':Obj,
            'totalPrice': select.price,

        })
        
    }



    return(
        <div>

            <div onClick={onClick}><OrderButtonContainer /></div>

        </div>
    );
}

export default OrderButtonDirect;