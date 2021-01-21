import React, { useEffect } from 'react';
import { dbService } from '../firebase';
import queryString from 'query-string';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSetting from './MenuSetting';
import InfoSetting from './InfoSetting';
import StoreSetting from './StoreSetting';

const Settings = () => {
    const store = queryString.parse(window.location.search).store;

    const [ data, setData ] = useState<any>([]);
    const [ state, setState ] = useState<number>(0);

    const getStoreInfo = async () => {

        const dataRef = await dbService.collection('store').doc(`${store}`).get();
        setData(dataRef.data());

    }
    useEffect(()=>{
        getStoreInfo();
    },[]);
    console.log(data);
    const changePage = (n:number) => {
        if ( n === 0 ){
            return <InfoSetting/>

        } else if ( n === 1 ) {
            return <MenuSetting menu={data.menu} store={store}/>

        } else {
            return <StoreSetting/>

        }
    }




    return (
        <div>
            <Link to={`/?store=${store}`}><button>뒤로가기</button></Link>
            <div>
                <div onClick={()=>setState(0)}>개인 정보 관리</div>
                <div onClick={()=>setState(1)}>메뉴 관리</div>
                <div onClick={()=>setState(2)}>가게 관리</div>
            </div>
            <div>
                {changePage(state)}
            </div>
        </div>
    );
}
export default Settings;