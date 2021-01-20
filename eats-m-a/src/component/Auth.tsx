import React from 'react';
import { Link } from 'react-router-dom';
interface Props {


    setLogined: any
    history:any

}

const Auth = ({setLogined,history}:Props) => {

    const toggleState = () => {

        const store = '멘동';
        setLogined((prev:any)=> !prev);
        history.push(`/?store=${store}`)

    }

    return (

        <div>
            로그인창입니다.
            <button onClick={toggleState}>로그인</button>

        </div>

    );

}

export default Auth;