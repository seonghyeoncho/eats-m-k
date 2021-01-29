import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';
import { getMenuThunk } from '../../../modules/getMenus';
import MenuListContainer from '../../molecules/MenuList/MenuListcontainer';
import { dbService } from '../../../firebase';
import '../../../scss/main.scss';
import { getBucketThunk } from '../../../modules/getBucket';

const Home = ( props: any ) => {
    
    const { menu } = useSelector((state:RootState)=>({
        menu:state.myBase.menus.data?.menu,
    }));

    const [ menuListState,setMenuListState ] = useState<number>(0);
    const [ color1, setColor1 ] = useState('#ff1b6d');
    const [ color2, setColor2 ] = useState('#999999');
    const [ color3, setColor3 ] = useState('#999999');
    const [ state, setState ] = useState<boolean>();
    const [ orderStatus, setOrderStatus ] = useState<boolean>();
    const dispatch = useDispatch();
    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
   
    const getStateFormFire = () => {

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            window.localStorage.setItem('state', data?.state.toString());
            window.localStorage.setItem('orderStatus', data?.orderStatus.toString());
            setTotalPrice(data.totalPrice);
        });
        setState(JSON.parse(window.localStorage.getItem('state')!));
        setOrderStatus(JSON.parse(window.localStorage.getItem('orderStatus')!));

    }

    const changeList = (n:number) => {
        return <MenuListContainer state={n} store={store} table={table}/>
    }

    const underLine = () => {
        return <div style={{width:"auto", height:"1px", background:"#ff1b6d", margin:"0 8px"}}></div>
    }

    useEffect(()=>{

        if( store !== null ) {
            const s:any = store;
            const t:any = table
            window.localStorage.setItem('store',s);
            window.localStorage.setItem('table',t);
        };

        if(menu === undefined) dispatch(getMenuThunk(store));

        getStateFormFire();
        getBucketThunk(store, table);
    
    },[]);

    return (
        <div>
            <StoreAndTableBoxContainer store={store} table={table} state={state} orderStatus={orderStatus}/>
            <div className="main-content">
                <div className="menulist-nav">
                    <div className="menulist-bts">

                        <div>
                            <div onClick={()=>{setMenuListState(0);setColor1('#ff1b6d');setColor2('#999999');setColor3('#999999')}} className="text" style={{color:`${color1}`}}>단품메뉴</div>
                            { menuListState === 0 ? underLine() : <></> }

                        </div>
                
                        <div>
                            <div onClick={()=>{setMenuListState(1);setColor1('#999999');setColor2('#ff1b6d');setColor3('#999999')}} className="text" style={{color:`${color2}`}}>세트메뉴</div>
                            { menuListState === 1 ? underLine() : <></> }
                        </div>

                        <div>
                            <div onClick={()=>{setMenuListState(2);setColor1('#999999');setColor2('#999999');setColor3('#ff1b6d')}} className="text" style={{color:`${color3}`}}>사이드메뉴</div>
                            { menuListState === 2 ? underLine() : <></> }
                        </div>
                        
                    </div>
                    <BucketButtonContainer store={store} table={table} orderStatus={orderStatus} totalPrice={totalPrice}/>
                </div>

                {changeList(menuListState)}
                <div className="block"></div>

                <div className="bt">
                    <OrderButtonContainer orderStatus={orderStatus} totalPrice={totalPrice}/>
                </div>
            </div>
           
            <footer/>

           
        
    
        </div>
    );

}

export default Home;
