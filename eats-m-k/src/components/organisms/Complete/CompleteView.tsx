import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BackButton from '../../atoms/BackButton/BackButton';




const CompleteView = (props:any) => {
    const [ time, setTime ] = useState<number>(3);
    const { store, table } = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table
    }))
    useEffect(()=>{
        if(time === 0 ){
            props.history.push(`/menu/?store=${store}&table=${table}`)

        }
        const countdown = setInterval(() => {
            if(time>0){
                setTime(time-1);
            }
        }, 1000);
        return () => clearInterval(countdown);

        

    },[time]);


    return (
        <div>
            <div>주문완료!</div>
            <div>{time}초 후에 메뉴판으로 이동합니다.</div>
            <BackButton text={'홈으로'}/>
        </div>

    )
}

export default CompleteView;