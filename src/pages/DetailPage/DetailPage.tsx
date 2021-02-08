import React from 'react';
import DetailNav from '../../component/Detail/Nav/DetailNav';
import DetailContent from '../../component/Detail/DetailContent';
import AddMenuButtonContainer from '../../component/AddMenuButton/AddMenuButtonContainer';
import DetailInfo from '../../component/Detail/Info/DetailInfo';
import OrderDirectContainer from '../../component/OrderButton/OrderDirectContainer';
import { CounterContainer } from '../../component/Counter';
import SelectMenuPrice from './SelectMenuPrice';

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
    history:any;
};
interface Option {
    name: string;
    price: number;
};

const DetailPage = ({select, history}:Props) => {
    return (
        <>
            <div className="detail">
                <div className="con">
                    <DetailNav history={history}/>
                    <div className="test"></div>
                    <DetailInfo name={select.name} price={select.price} desc={select.desc}/>
                </div>
                <DetailContent />
                <CounterContainer/>
                <SelectMenuPrice/>
            </div>
            <div className="detail-bt">
                <AddMenuButtonContainer/>
                <OrderDirectContainer/>
            </div>
        </>
    );
}

export default DetailPage;