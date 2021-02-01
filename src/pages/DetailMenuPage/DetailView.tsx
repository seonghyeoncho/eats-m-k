import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import StoreAndTableBoxContainer from '../../component/StoreAndTable/StoreAndTableBoxContainer';
import DetailViewNav from '../../component/Detail/DetailViewNav';
import DetailContent from '../../component/Detail/DetailContent';
import { RootState } from '../../redux';
import { Option } from '../../redux/Types'
import AddMenuButtonContainer from '../../component/AddMenuButton/AddMenuButtonContainer';

interface Select {
    select: {
        menu:string | null,
        price:number | null,
        itemTotalPrice:number | null,
        options:Option[] | null,
        count:number | null
    },
};
const DetailView = (props:any) => {

    const { count, totalPrice, items, bucket } = useSelector((state:RootState) => ({
        count:state.Counter.count,
        totalPrice:state.Data.data.totalPrice,
        items:state.Store.menu.items,
        bucket:state.Data.data.bucket
    }));
    
    const query = queryString.parse(props.location.search);
    const menu = String(query.menu);
    const [ select, setSelect ] = useState<any>(null);
    const [ options, setOptions ] = useState<any>([]);
    const [ itemTotalPrice , setItemTotalPrice ] = useState<number>(0);
    console.log(select)
    console.log(items);

    console.log(bucket);
    const dispatch = useDispatch();
    const moreMenuHandler = (m:any, isChecked:boolean) => {
        if(isChecked) {
            setOptions( (prev:any) => [m,...prev]);
            setItemTotalPrice(itemTotalPrice + m.price);
        } else if(!isChecked) {
            setOptions( (prev:any) => prev.filter((doc:any)=> m.menu !== doc.menu));
            setItemTotalPrice(itemTotalPrice - m.price);
        };
    };

    const selectMenu = () => {
        console.log(items)
        for( var i=0 ; i<items.length ; i++ ) {
            if (items[i].name === menu) {
                const Obj = {
                    name:items[i].name,
                    price:items[i].price,
                    options:[],
                    count:count,
                    itemTotalPrice:items[i].price,
                };
                setSelect(Obj);
                setItemTotalPrice(Obj.price);
                return;
            };
        };
        //사용자가 임의로 이름을 바꾸어 놓았을 때 오류 안나게 하는 방법도 구상해와야 할 듯
    };

    useEffect(()=>{
        console.log('fff');
        selectMenu();
    },[]);

    return (
        <div className="detail">
            <StoreAndTableBoxContainer/>
            <DetailViewNav totalPrice={totalPrice} history={props.history}/>
            <DetailContent moreMenuHandler={moreMenuHandler} select={select}/>
            <AddMenuButtonContainer select={select}/>
        </div>
    );
}

export default DetailView;