import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { resetCount } from '../../../modules/counters';
import { increase } from '../../../modules/totalPrice';
import OrderButton from '../../atoms/OrderButton/OrderButton';
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
            'totalPrice': select.itemTotalPrice,

        })
        dispatch(resetCount());
        
    }



    return(
        <div>

            <div onClick={onClick}>
                <Link to='/orderlistd'>
                        <button>주문하기</button>
                </Link>
            
            </div>

        </div>
    );
}

export default OrderButtonDirect;