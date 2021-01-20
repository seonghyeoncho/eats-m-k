import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import OrderButtonContainer from '../../atoms/OrderButton/OrderButtonContainer';
import { setStore } from '../../../modules/setStore';
import { setTable } from '../../../modules/setTable';
import SetMenuList from './SetMenuList';
import StoreAndTableBoxContainer from '../../molecules/StoreAndTable/StoreAndTableBoxContainer';
import BucketButtonContainer from '../../atoms/BucketButton/BucketButtonContainer';
import { useCookies } from 'react-cookie';
import { getMenuThunk } from '../../../modules/getMenus';
import MenuListContainer from '../../molecules/MenuList/MenuListcontainer';
import SideMenuListContainer from './SideMenuListContainer';
import { getBucketThunk } from '../../../modules/getBucket/thunks';
import { dbService } from '../../../firebase';
import { setState, setStatus } from '../../../modules/orderState';


const Home = ( props: any ) => {
    
    const {totalPrice, menu, buckets, state,orderStatus} = useSelector((state:RootState)=>({

        totalPrice:state.myBucket.bucket.data?.totalPrice,
        menu:state.myBase.menus.data?.menu,
        buckets:state.myBucket.bucket.data?.bucket,
        state:state.stateSet.state,
        orderStatus:state.myBucket.bucket.data?.orderStatus

    }));

    //props의 type을 왜 any로 주는지 잘 모르겠는데 object로 주면 읽지를 못함
    //type을 object로 정하면 props를 받아올 수가 없음 ㅋㅋ

    const [ cookies, setCookie, removeCookie ] = useCookies(['clientId', 'bucket']);
    //쿠키를 통해서 새로운 고객을 구별하도록 함
    //쿠키는 접속시 있으면 버킷이랑 비교해서 같으면 설정하지 않고 다르면 설정함. 없을 경우는 바로 설정함
    
    const [test,setTest] = useState();
    const [id, setId] = useState<any>(null);
    //처음 들어오는 값을 확인 하기 위해서 any로 타입 명시       

    const [ menuListState,setMenuListState ] = useState<number>(0);

    const dispatch = useDispatch();

    //고객에 해당되는 아이디 부여

    const today = new Date();
    const time = `[${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}]`;
    
    console.log('clientId',`${today.getMonth()+1}/${today.getDate()}/${time}`);
    const clientId = `${today.getMonth()+1}/${today.getDate()}/${time}`;

    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table

    /*
        일단 파이어베이스에서 onSnap으로 데이터를 가져오지를 못하는데 주문 현황을 보려면 실시간이 필요해서 상태만 따로 가져옴.
        더 알아보고 바꿀 예정
    */  

    const getStateFormFire = () => {

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot(snapShot=>{

            const data = snapShot.data();
            dispatch(setState(data?.state));
            dispatch(setStatus(data?.orderStatus));
            setTest(data?.state);
            setId(data?.clientId);

        })
    }
    //파이어로부터 실시간으로 상태를 받아오는 함수.

    useEffect(()=>{
        
        dispatch(setStore(store));
        dispatch(setTable(table));

        if(menu === undefined) dispatch(getMenuThunk(store));
        dispatch(getBucketThunk(store, table));
        getStateFormFire();
        if(id !== null) {
            onCookie();
        }

    },[id]);
    
    //리스트를 바꾸는 함수

    const changeList = (n:number) => {

        if (n === 0) return <MenuListContainer/>
        else if (n === 1) return <SetMenuList/>
        else return <SideMenuListContainer/>

    }

    const onCookie = () => {

        if( cookies.clientId === undefined ) {

            console.log('쿠키가 없으면 이게 나옵니다.');

            setCookie('clientId', clientId);

        
            dbService.collection(`${store}`).doc(`${table}`).update({

                'bucket':[],
                orderStatus:false,
                state:false,
                clientId:clientId,
                totalPrice:0
        
            })

        } else {

            console.log('쿠키가 있으면 이게 나오고')

            if(cookies.clientId === id ){

                console.log('전 사용자의 아이디와 현 사용자의 아이디가 같다면 이게 나옵니다.');

            } else if (cookies.clientId !== id && state) {

                console.log('전 사용자의 아이디와 현 사용자의 아이디가 다르다고 주문 접수된 상태라면 이게 나옵니다.');
                setCookie('clientId', clientId);

                dbService.collection(`${store}`).doc(`${table}`).update({

                    'bucket':[],
                    orderStatus:false,
                    state:false,
                    clientId:clientId,
                    totalPrice:0
            
                })
            }

        }
    }

    console.log('state',state);
    console.log('cookies.clientId', clientId);
    console.log('clientId', clientId)
    console.log('id',id);
    console.log('totalPrice', totalPrice);
    console.log('bucket', buckets);
    console.log("totalPrice",totalPrice)

    return (
        <>
            {/* 가게와 테이블 표시*/}
            <StoreAndTableBoxContainer/>

            {/* 장바구니 버튼*/}
            { 
                totalPrice === 0 || orderStatus ? 

                    <></> 

                :

                    <BucketButtonContainer />

            }

            {/* totalPrice를 불러오는 시간때문에 처음에는 보여주고 시작함. 나쁜 환경을 제공할 수 있음 */}
            

            {/*단품메뉴, 세트메뉴, 사이드메뉴 */}
            
            <button onClick={()=>setMenuListState(0)} style={{fontSize:'13px'}}>단품메뉴</button>
            <button onClick={()=>setMenuListState(1)}>세트메뉴</button>
            <button onClick={()=>setMenuListState(2)}>사이드메뉴</button>

            
            {changeList(menuListState)}

            {/* 주문하기 버튼*/}
            { totalPrice === 0 ? <></> : <OrderButtonContainer />}
            {/*추가 주문 생각해보기 */}
            {/* totalPrice를 불러오는 시간때문에 처음에는 보여주고 시작함. 나쁜 환경을 제공할 수 있음 */}
        
    
        </>
    );

}

export default Home;
