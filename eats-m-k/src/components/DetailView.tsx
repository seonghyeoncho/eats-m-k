import React from 'react';
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import CounterContainer from '../containers/CounterContainer';
import OrderContainer from '../containers/OrderContainer';
import OrderButtonContainer from './atoms/OrderButton/OrderButtonContainer';
import StoreAndTableBox from './StoreAndTableBox';
import StoreAndTableBoxContainer from '../containers/StoreAndTableBoxContainer';

const DetailView = (props:any) => {

    const menuList = useSelector((state:RootState)=> state.setData.menu);

    let select = {
        menu:"",
        price:0
    };

    const query = queryString.parse(props.location.search);
    const menu = query.menu;

    console.log("메뉴",menu);

    for(let i in menuList){
        for(let k in menuList[i]){
            if(k === menu){
                select = { menu:k, price:menuList[i][k] };
            }
        }
        
    }

    console.log(select);

    const goBack = () => {

        props.history.goBack();

    }

    return (

       <div>
           <StoreAndTableBoxContainer/>
           <button onClick={goBack}>Back to Menu</button>

           <div>{select.menu}<br/>{select.price}</div>

           <CounterContainer/>
           <OrderContainer select={select} history={props.history}/>
           <OrderButtonContainer/>

           

       </div>

    );
}
export default DetailView;