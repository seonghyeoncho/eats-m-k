import React, { useEffect } from 'react';
import { dbService } from '../firebase';
import queryString from 'query-string';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
    const store = queryString.parse(window.location.search).store;

    const [ data, setData ] = useState<any>([]);

    const getStoreInfo = async () => {

        const dataRef = await dbService.collection('store').doc(`${store}`).get();
        setData(dataRef.data());

    }
    useEffect(()=>{
        getStoreInfo();
    },[]);
    console.log(data);




    return (
        <div>
            <Link to={`/?store=${store}`}><button>뒤로가기</button></Link>
            대표 메뉴관리
            {
                data.menu?.map((doc:any)=>{
                    for(let i in doc){
                        return <div>{i}{doc[i].price}</div>
                    }

                })
            }

        </div>
    );
}
export default Settings;