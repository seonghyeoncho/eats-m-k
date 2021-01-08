import React from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import CounterContainer from '../../atoms/Counter/CounterContainer';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BackButton from '../../atoms/BackButton/BackButton';
import AddMenuContainer from '../../atoms/AddMenuButton/AddMenuButtonContainer';
import { addOrder } from '../../../modules/orderMenus';
import { resetCount } from '../../../modules/counters';

const DetailView = (props:any) => {

    const dispatch = useDispatch();

    const {menuList, count} = useSelector((state:RootState)=> ({
        menuList: state.setData.menu,
        count:state.counters.count
    }));

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

    const setMenuList = () => {
        
        //dispatch(addOrder(select.menu, count, select.price));

    }

    console.log(select);

    return (

       <div>
           <StoreAndTableBoxContainer/>
           <BackButton text={'뒤로가기'}/>

           <div>{select.menu}<br/>{select.price}</div>

           <CounterContainer/>
           <AddMenuContainer select={select} history={props.history}/>
           <div onClick={setMenuList}><OrderButtonContainer/></div>

           

       </div>

    );
}

export default DetailView;