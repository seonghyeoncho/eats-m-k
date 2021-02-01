import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import StoreAndTableBoxContainer from '../../component/Home/StoreAndTableBoxContainer';
import DetailViewNav from '../../component/Detail/DetailViewNav';
import DetailContent from '../../component/Detail/DetailContent';
import { RootState } from '../../redux';

const DetailView = (props:any) => {

    const { count, store, table, totalPrice, state, orderStatus, items } = useSelector((state:RootState) => ({
        count:state.Counter.count,
        store:state.Store.information.name,
        table:state.Location.table,
        totalPrice:state.Data.data.totalPrice,
        orderStatus:state.Data.data.orderStatus,
        state:state.Data.data.state,
        items:state.Store.menu.items
    }));

    const query = queryString.parse(props.location.search);
    const menu = String(query.menu);

    const [ select, setSelect ] = useState<any>({});
    const [ more, setMore ] = useState<any>([]);
    const [ morePrice,setMorePrice] = useState<number>(0);
    
    const moreMenuHandler = (m:any, isChecked:boolean) => {
        if(isChecked) {
            setMore( (prev:any) => [m,...prev]);
            setMorePrice(morePrice + m.price);
        } else if(!isChecked) {
            setMore( (prev:any) => prev.filter((doc:any)=> m.menu !== doc.menu));
            setMorePrice(morePrice - m.price);
        };
    };
    const func1 = () => {
        for( var i=0 ; i<items.length ; i++ ) {
            if (items[i].name === menu) {
                const Obj = {
                    menu:menu,
                    price:items[i].price,
                    more:more,
                    count:count,
                };
                setSelect(Obj);
            };
        ;}
    };

    useEffect(()=>{

    },[more, menu, count, state, orderStatus, price, morePrice, store, table]);

    return (
        <div className="detail">
            <StoreAndTableBoxContainer/>
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