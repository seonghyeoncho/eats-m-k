import React, { useEffect, useState } from 'react';
import BackButton from '../../component/BackButton/BackButton';
import Finish from '../../image/graphics/graphic_finish_x3.png';
import './CompletePage.scss';

const CompletePage = (props:any) => {
    
    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    const [ time, setTime ] = useState<number>(3);

    useEffect(()=>{
        if(time === 0 ) props.history.push(`/?store=${store}&table=${table}`);
        const countdown = setInterval(() => {
            if(time>0) setTime(time-1);
        }, 1000);
        return () => clearInterval(countdown);
    },[time]);

    return (
        <div className="complete">
            <div className="conetent">
                <img src={Finish} alt='finish' className="img"/>
                <div className="title">
                    주문이 완료되었습니다
                </div>
                <div className="text">
                    사이트 재방문을 통해<br/>
                    주문 현황을 확인하실 수 있습니다.
                </div>
                <div className="timer">{time}초 후에 메뉴판으로 이동합니다.</div>
                <BackButton text={'주문 현황 확인'}/>
            </div>
        </div>

    )
}

export default CompletePage;