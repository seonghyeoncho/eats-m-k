import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RequestAction } from '../../redux/actions';
import './Request.scss';
const Requests = () => {
    const [ requests, setRequests ] = useState<string>('');

    const dispatch = useDispatch();

    const requestString = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length >= 60) {
            console.log("60")
        }
        setRequests(e.target.value);   
        dispatch(RequestAction.setRequests(e.target.value));
    };

    return(
        <div className="rqs-con">
            <div className="rqs-title">요청 사항 입력</div>
            <div className="rqs-content">
                <input 
                    type="text" 
                    placeholder="요청사항을 입력해주세요(60자 제한)" 
                    maxLength={60} 
                    value={requests} 
                    onChange={requestString}
                    width="100%"
                />
            </div>
        </div>
    );
};

export default Requests;