import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BackButton from '../../atoms/BackButton/BackButton';
import Finish from '../../../graphics/graphic_finish_x3.png';




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
        <div className="complete-con">
            <div className="complete-conetent">
                <img src={Finish}/>
                <div className="complete-content-text">
                    주문이 완료되었습니다
                </div>
                <div className="complete-content-text-2">
                    사이트 재방문을 통해<br/>
                    주문 현황을 확인하실 수 있습니다.
                </div>
                
                <div className="complete-content-timer">{time}초 후에 메뉴판으로 이동합니다.</div>
                <BackButton text={'주문 현황 확인'}/>
            </div>
        </div>

    )
}

export default CompleteView;