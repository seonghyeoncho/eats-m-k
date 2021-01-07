import React from 'react';
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import CounterContainer from '../../atoms/Counter/CounterContainer';
import OrderContainer from '../../atoms/AddMenuButton/AddMenuButtonContainer';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import StoreAndTableBox from '../../molecules/StoreAndTable/StoreAndTableBox';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BackButton from '../../atoms/BackButton/BackButton';

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
           <BackButton text={'뒤로가기'}/>

           <div>{select.menu}<br/>{select.price}</div>

           <CounterContainer/>
           <OrderContainer select={select} history={props.history}/>
           <OrderButtonContainer/>

           

       </div>

    );
}
export default DetailView;