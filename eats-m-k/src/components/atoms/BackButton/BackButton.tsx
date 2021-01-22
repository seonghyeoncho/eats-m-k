import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../modules';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'


interface Props {
    text:string
}

const BackButton = ({text}:Props) => {
    const {store,table} = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table
    }))
    return (
        <Link to={`/menu/?store=${store}&table=${table}`}><img src={Arrow} width="7.5px"/></Link>
    )
}

export default BackButton;