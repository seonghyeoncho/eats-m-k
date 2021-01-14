import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import CounterContainer from '../../atoms/Counter/CounterContainer';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BackButton from '../../atoms/BackButton/BackButton';
import AddMenuContainer from '../../atoms/AddMenuButton/AddMenuButtonContainer';
import SideMenuListContainer from '../Home/SideMenuListContainer';
import CheckBoxCon from './CheckBoxCon';



const DetailView = (props:any) => {

    const [ select, setSelect ] = useState<any>({});
    const [ more, setMore ] = useState<any>([]);

    const {menus, count, AC} = useSelector((state:RootState)=> ({
        menus:state.myBase.menus.data?.menu,
        count:state.counters.count,
        AC:state.myBase.menus.data?.AC
    }));

    console.log(menus);

    const query = queryString.parse(props.location.search);
    const menu = query.menu;

    console.log("메뉴",menu);

    useEffect(()=>{

        menus?.map((doc:any)=>{
            
            for(let i in doc){
                if(i === menu) {
                    console.log(doc[i].price, i);
                    const Obj = {
                        menu:i,
                        price:doc[i].price
                    }
                    setSelect(Obj);
                }

            }
        })
    
    },[]);

    const onClick = (more:any) => {

        setMore((prev:any)=>[...prev, more])

    }


    console.log(more)
    console.log(select);

    return (

       <div>

           <StoreAndTableBoxContainer/>
           <BackButton text={'뒤로가기'}/>

           <div>{select.menu}<br/>{select.price}</div>
           <hr/>
           <div>추가선택</div>
           <CheckBoxCon onClick={onClick}/>

           {/* 추가 선택할 컴포넌트가 있어야 함. 아마 체크 박스로 선택 할 수 있게 해서 useState로 추가 할 수 있게 해야 할 듯 */}
           <hr/>
           <CounterContainer/>
           <hr/>
           <AddMenuContainer select={select} history={props.history} more={more}/>
           <OrderButtonContainer/>
          

           

        </div>

    );
}

export default DetailView;