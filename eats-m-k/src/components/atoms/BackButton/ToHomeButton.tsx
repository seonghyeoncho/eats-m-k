import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../modules';


interface Props {
    text:string
}

const ToHomeButton = ({text}:Props) => {
    const {store,table} = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table
    }))
    return (
        <Link to={`/menu/?store=${store}&table=${table}`} ><button>{text}</button></Link>
    )
}

export default ToHomeButton;