import React, { useEffect } from 'react';
import { dbService } from '../firebase';
import queryString from 'query-string';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSetting from './MenuSetting';
import InfoSetting from './InfoSetting';
import StoreSetting from './StoreSetting';
import '../scss/Setting.scss';

const Settings = () => {

    const store = queryString.parse(window.location.search).store;

    const [ data, setData ] = useState<any>([]);
    const [ state, setState ] = useState<number>(1);

    useEffect(()=>{
        dbService.collection('store').doc(`${store}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            setData(data);
        });
    },[]);

    console.log(data);

    const changePage = (n:number) => {
        if ( n === 0 ){
            return <InfoSetting/>

        } else if ( n === 1 ) {
            return <MenuSetting data={data} store={store}/>

        } else {
            return <StoreSetting/>

        }
    }




    return (
        <div className="setting-con">
            
            <div className="setting-nav-con">
                <Link to={`/?store=${store}`}><div>뒤로가기</div></Link>
               
                
                <div onClick={()=>setState(1)}>메뉴 관리</div>
                <div onClick={()=>setState(2)}>가게 관리</div>
                <div onClick={()=>setState(0)}>개인 정보 관리</div>
            </div>
            <div className="setting-content-con">
                {changePage(state)}
            </div>
        </div>
    );
}
export default Settings;