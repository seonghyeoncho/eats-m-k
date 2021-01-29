import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { resetCount } from '../../../modules/counters';
<<<<<<< HEAD
import { compareAndMerge } from '../../../functions/compareAndMerge';

=======
import { increase } from '../../../modules/totalPrice';
>>>>>>> v2
type Props = {

    select: {

        menu:string,
        price:number,
        more: any,
        count:number,
        itemTotalPrice: number

    };
    
    history: any;
    store: string | string[] | null
    table: string | string[] | null
    

}

const AddMenuContainer = ({ select, history, store, table }:Props) => {

<<<<<<< HEAD
    const bucket:any = JSON.parse(window.localStorage.getItem('bucket')!);
    const totalPrice = Number(window.localStorage.getItem('totalPrice'));
=======
    const {count} = useSelector((state:RootState) => ({

        count:state.counters.count,
        totalPrice:state.totalPrice.price
        

    }));
    const [ buckets, setBuckets ] = useState<any>([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
>>>>>>> v2

    const dispatch = useDispatch();

    const processA = ( ) : void => {

        const Obj = bucket.concat({
                
            ...select,
            id:`${select.menu}/${select.count}/${JSON.stringify(select.more)}`
            
        });
<<<<<<< HEAD
        window.localStorage.setItem('bucket', JSON.stringify(Obj));
        window.localStorage.setItem('totalPrice', (totalPrice + select.itemTotalPrice).toString());

    }
    const processN = () => {
        const Obj = [
            {
                ...select,
                id:`${select.menu}/${select.count}/${JSON.stringify(select.more)}`
            }
            
        ];
        window.localStorage.setItem('bucket', JSON.stringify(Obj));
        window.localStorage.setItem('totalPrice', (totalPrice + select.itemTotalPrice).toString());
=======
>>>>>>> v2

    }

    const processM = ( ) => {

        console.log('process Merge')

        const Obj = bucket.map( (doc:any) =>
            doc.menu === select.menu && compareAndMerge(doc.more, select.more) ? 

                {
                    ...select,
                    count:doc.count + select.count,
                    itemTotalPrice: Number(doc.itemTotalPrice) + Number(select.itemTotalPrice),
                    id:`${select.menu}/${doc.count + select.count}/${JSON.stringify(select.more)}`,
                    
                }

            :

                doc

        );
<<<<<<< HEAD
        console.log("Obj",Obj);
=======
        
>>>>>>> v2
        var p:number = 0;
        Obj.map((doc:any) => 
            p += doc.itemTotalPrice
        );
        window.localStorage.setItem('bucket', JSON.stringify(Obj));
        window.localStorage.setItem('totalPrice', (p).toString());

    }

    const addOrders = () => {

        var a = '0'

        if( select.more.length !== 0) { a = '1' } 

        if( bucket !== null ) {
            const c = bucket.length;
            var flag = 0;

            for( let i=0 ; i<bucket.length ; i++ ) {
                
                console.log(bucket[i], i)
                if( bucket[i].menu === select.menu && compareAndMerge(bucket[i].more, select.more) ) {

                    console.log(compareAndMerge(bucket[i].more, select.more));

                    processM();

                    break;

                }
                flag++;
                
            }; 
            console.log(flag)
            if(flag === c ) processA();

        } else if (bucket === null){

            processN();

        } else {
            processA();
        }

        dispatch(resetCount());
        history.goBack();

    }

    return <AddMenuButton  addOrders={addOrders}/>

}

export default AddMenuContainer;