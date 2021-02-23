import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    text:string
};

const BackButton = ({text}:Props) => {
    const store = JSON.parse(window.localStorage.getItem('storeId')!);
    const table = JSON.parse(window.localStorage.getItem('tableId')!);
    return (
        <Link to={`/?store=${store}&table=${table}`} className="back-bt">
            <div className="text">{text}</div>
        </Link>
    );
};

export default BackButton;