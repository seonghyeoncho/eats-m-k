import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';

interface Props {

    select: {

        menu:string,
        price:number,
        more: any,
        count:number,
        itemTotalPrice: number

    };
    store:string | string[] | null
    table:string | string[] | null

}


const OrderButtonDirect = ({select, store, table}:Props) => {

    const bucket:any = JSON.parse(window.localStorage.getItem('bucket')!);
    const totalPrice = Number(window.localStorage.getItem('totalPrice'));

    const { count  } = useSelector((state:RootState) => ({

        count:state.counters.count,
        
    }));

    const onClick = () => {

        var a = '0'
        if( select.more === undefined) { a = '1' } 

        if( bucket === null ) {
            const Obj = [
                {
                    ...select,
                    id:`${select.menu}/${select.count}/${JSON.stringify(select.more)}`
                }
                
            ];
            window.localStorage.setItem('bucket', JSON.stringify(Obj));
            window.localStorage.setItem('totalPrice', (totalPrice + select.itemTotalPrice).toString());

        } else {
            
            const Obj:any = bucket.concat({
                ...select,
                count:count,
                id:`${select.menu}/${count}/${a}`,
                
            })
    
            window.localStorage.setItem('bucket', JSON.stringify(Obj));
            window.localStorage.setItem('totalPrice', (select.itemTotalPrice).toString());

        }

        
        
    }



    return(
        <div>

            <div onClick={onClick}>
                <Link to={`/orderlistd/?store=${store}&table=${table}`}>
                        <div className="order-bt-dir">주문하기</div>
                </Link>
            
            </div>

        </div>
    );
}

export default OrderButtonDirect;