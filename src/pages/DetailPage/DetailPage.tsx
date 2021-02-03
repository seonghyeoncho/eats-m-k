import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailNav from '../../component/Detail/Nav/DetailNav';
import DetailContent from '../../component/Detail/DetailContent';
import { RootState } from '../../redux';
import AddMenuButtonContainer from '../../component/AddMenuButton/AddMenuButtonContainer';
import DetailInfo from '../../component/Detail/Info/DetailInfo';
import OrderDirectContainer from '../../component/OrderButton/OrderDirectContainer';
import { CounterContainer } from '../../component/Counter';

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
interface Option {
    name: string,
    price: number
};

interface OptionGroups {
    name: string,
    selecOption: Option[],
    optionPrice: number,
}

const DetailPage = ({select, history}:Props) => {
    const dispatch = useDispatch();
    const { totalPrice, count } = useSelector((state:RootState) => ({
        count:state.Counter.count,
        totalPrice:state.Data.data.totalPrice,
        select:state.Select.select,
    }));
    //필수그룹의 설정도 필요할 듯
    //옵션 그룹 별로 추가 사항이 들어가도록 해야함
    // 추가 사항이 없음 상태를 만들어야 할 듯

    const [ options, setOptions ] = useState<OptionGroups[]>([]);
    const [ itemTotalPrice , setItemTotalPrice ] = useState<number>(0);    
    return (
        <div className="detail">
            <DetailNav history={history}/>
            <DetailInfo name={select.name} price={select.price} desc={select.desc}/>
            <DetailContent />
            <CounterContainer/>
            <AddMenuButtonContainer/>
            <OrderDirectContainer/>
        </div>
    );
}

export default DetailPage;