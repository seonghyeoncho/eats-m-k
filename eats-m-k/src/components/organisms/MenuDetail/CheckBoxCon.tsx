import React, { useEffect, useState } from 'react';
import { dbService } from '../../../firebase';
import CheckItem from './CheckItem';


interface Props {
    moreMenuHandler: ( m:any, checked:boolean ) => void;
    store: string | string[] | null


}
const CheckBoxCon = ({ moreMenuHandler, store}:Props) => {
    
    const [AC, setAC] = useState<any>([]);

    useEffect(()=>{
        dbService.collection('store').doc(`${store}`).get().then(
            (doc:any) => {
                setAC(doc.data().AC);
            }
        )
    },[]);

    return (
        <div className="checkbox-con">

            {
                AC?.map((doc:any)=>{
                   
                        return <CheckItem menu={doc }moreMenuHandler={moreMenuHandler} />
                })
            }
        </div>
    );
}

export default CheckBoxCon;