import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import { setStore } from '../../../modules/setStore';
import { setTable } from '../../../modules/setTable';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';
import { getMenuThunk } from '../../../modules/getMenus';
import MenuListContainer from '../../molecules/MenuList/MenuListcontainer';
import { getBucketThunk } from '../../../modules/getBucket/thunks';
import { dbService } from '../../../firebase';
import { setState, setStatus } from '../../../modules/orderState';
import '../../../scss/main.scss';

const Home = ( props: any ) => {
    
    const {totalPrice, menu, state,orderStatus,bucket} = useSelector((state:RootState)=>({

        totalPrice:state.myBucket.bucket.data?.totalPrice,
        menu:state.myBase.menus.data?.menu,
        state:state.myBucket.bucket.data?.state,
        orderStatus:state.myBucket.bucket.data?.orderStatus,
        bucket:state.myBucket.bucket.data?.bucket

    }));
    
    console.log('bucket',bucket);
    console.log('totalPrice', totalPrice);

    const [id, setId] = useState<any>(null);
    const [ menuListState,setMenuListState ] = useState<number>(0);
    const [ color1, setColor1 ] = useState('#ff1b6d');
    const [ color2, setColor2 ] = useState('#999999');
    const [ color3, setColor3 ] = useState('#999999');
    const dispatch = useDispatch();

    const today = new Date();
    const time = `[${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}]`;
    const clientId = `${today.getMonth()+1}/${today.getDate()}/${time}`;
    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;
    const localStorageClientId = window.localStorage.getItem('clientId');

    const getStateFormFire = () => {

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot(snapShot=>{

            const data = snapShot.data();
            dispatch(setState(data?.state));
            dispatch(setStatus(data?.orderStatus));

            setId(data?.clientId);

        })
    }

    const changeList = (n:number) => {

        return <MenuListContainer state={n} store={store} table={table}/>

    }

    const onCookie = () => {

        if( localStorageClientId === null ) {

            window.localStorage.setItem('clientId',clientId);

            dbService.collection(`${store}`).doc(`${table}`).update({

                'bucket':[],
                orderStatus:false,
                state:false,
                clientId:clientId,
                totalPrice:0
        
            });

        } else {



            if(localStorageClientId === id ){



            } else if (id !== null) {
                if (localStorageClientId !== id && state) {

                    window.localStorage.setItem('clientId',clientId);

                    dbService.collection(`${store}`).doc(`${table}`).update({

                        'bucket':[],
                        orderStatus:false,
                        state:false,
                        clientId:clientId,
                        totalPrice:0
                
                    });
                }
            }

        }
    }

    const underLine = () => {

        return <div style={{width:"auto", height:"1px", background:"#ff1b6d", margin:"0 8px"}}></div>
    }


    useEffect(()=>{
        
        dispatch(setStore(store));
        dispatch(setTable(table));

        if(menu === undefined) dispatch(getMenuThunk(store));
        dispatch(getBucketThunk(store, table));
        getStateFormFire();
        
        onCookie();
        
    },[ id ]);

    return (
        <div>
            <StoreAndTableBoxContainer store={store} table={table}/>
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
                    <BucketButtonContainer store={store} table={table}/>
                </div>


                {changeList(menuListState)}
                <div className="block"></div>

                <div className="bt">
                    <OrderButtonContainer totalPrice={totalPrice}/>
                </div>
            </div>
           
            <footer/>

           
        
    
        </div>
    );

}

export default Home;
