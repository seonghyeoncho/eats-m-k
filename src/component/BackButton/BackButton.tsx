import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    text:string
}

const BackButton = ({text}:Props) => {
    const store = window.localStorage.getItem('store')!;
    const table = window.localStorage.getItem('table')!;

    return (
        <Link to={`/menu/?store=${store}&table=${table}`} className="back-bt">
            <div>{text}</div>
        </Link>
    )
}

export default BackButton;