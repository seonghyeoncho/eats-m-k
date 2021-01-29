import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { RootState } from '../../modules';
import { useSelector } from 'react-redux';
import { dbService } from '../../firebase/firebase';
import StoreAndTableBoxContainer from '../../components/molecules/StoreAndTable/StoreAndTableBoxContainer';
import DetailViewNav from './DetailViewNav';
import DetailContent from '../../graphics/DetailContent';

const DetailView = (props:any) => {

    const { count  } = useSelector((state:RootState) => ({
        count:state.counters.count,
    }));
    const query = queryString.parse(props.location.search);
    const menu = String(query.menu);
    const price = Number(query.price);
    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    const [ select, setSelect ] = useState<any>({});
    const [ more, setMore ] = useState<any>([]);
    const [ morePrice,setMorePrice] = useState<number>(0);
    const [ state, setState ] = useState<boolean>();
    const [ orderStatus, setOrderStatus ] = useState<boolean>();
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
    
    const moreMenuHandler = (m:any, isChecked:boolean) => {
        if(isChecked) {
            setMore( (prev:any) => [m,...prev]);
            setMorePrice(morePrice + m.price);
        } else if(!isChecked) {
            setMore( (prev:any) => prev.filter((doc:any)=> m.menu !== doc.menu));
            setMorePrice(morePrice - m.price);
        };
    };

    useEffect(()=>{

        const Obj = {
            menu:menu,
            price:price,
            more:more,
            count:count,
            itemTotalPrice: (price + morePrice) * count
        };
        setSelect(Obj);
        setState(JSON.parse(window.localStorage.getItem('state')!));
        setOrderStatus(JSON.parse(window.localStorage.getItem('orderStatus')!));
        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            setTotalPrice(data.totalPrice);
        });

    },[more, menu, count, state, orderStatus, price, morePrice, store, table]);

    return (
        <div className="detail">
            <StoreAndTableBoxContainer store={store} table={table} state={state} orderStatus={orderStatus}/>
            <DetailViewNav totalPrice={totalPrice} history={props.history}/>
            <DetailContent 
                menu={menu} 
                price={price}
                moreMenuHandler={moreMenuHandler} 
                morePrice={morePrice} 
                count={count}
                select={select}
                history={props.history}
            />
        </div>
    );
}

export default DetailView;