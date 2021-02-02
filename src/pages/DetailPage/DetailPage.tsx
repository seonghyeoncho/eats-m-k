import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailNav from '../../component/Detail/Nav/DetailNav';
import DetailContent from '../../component/Detail/DetailContent';
import { RootState } from '../../redux';
import AddMenuButtonContainer from '../../component/AddMenuButton/AddMenuButtonContainer';
import { SelectAction } from '../../redux/actions';
import DetailInfo from '../../component/Detail/Info/DetailInfo';
import { Option } from '../../redux/Types'

interface Props {
    select: {
        name: string,
        price:number,
        itemTotalPrice:number,
        optionGroups: string[],
        count:number,
        options:Option[],
        desc:string
    };
    history:any
};

const DetailPage = ({select, history}:Props) => {
    const dispatch = useDispatch();
    const { totalPrice, count } = useSelector((state:RootState) => ({
        count:state.Counter.count,
        totalPrice:state.Data.data.totalPrice,
        select:state.Select.select,
    }));
    const [ options, setOptions ] = useState<Option[]>([]);
    const [ itemTotalPrice , setItemTotalPrice ] = useState<number>(0);    
    const optionHandler = (o:Option, isChecked:boolean) => {
        if(isChecked) {
            setOptions((prev:Option[]) => [o,...prev]);
            setItemTotalPrice(itemTotalPrice + o.price);
            dispatch(SelectAction.setMenu(select, count, options));
        } else if(!isChecked) {
            setOptions( (prev:Option[]) => prev.filter((doc:Option)=> o.name !== doc.name));
            setItemTotalPrice(itemTotalPrice - o.price);
            dispatch(SelectAction.setMenu(select, count, options));
        };
    };
    return (
        <div className="detail">
            <DetailNav history={history}/>
            <DetailInfo name={select.name} price={select.price} desc={select.desc}/>
            <DetailContent optionHandler={optionHandler}/>
            <AddMenuButtonContainer/>
        </div>
    );
}

export default DetailPage;