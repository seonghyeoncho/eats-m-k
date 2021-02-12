import React from 'react';
import DetailNav from '../../component/Detail/Nav/DetailNav';
import DetailContent from '../../component/Detail/DetailContent';
import AddMenuButtonContainer from '../../component/AddMenuButton/AddMenuButtonContainer';
import DetailInfo from '../../component/Detail/Info/DetailInfo';
import OrderDirectContainer from '../../component/OrderButton/OrderDirectContainer';
import { CounterContainer } from '../../component/Counter';
import SelectMenuPrice from './SelectMenuPrice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import testImg from '../../image/graphics/testImg.jpg'

interface Props {
    select: {
        name: string,
        price:number,
        item_total_price:number,
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
    const { eventState, maxSelect } = useSelector((state:RootState) => ({
        eventState: state.Event.eventState,
        maxSelect: state.Event.maxSelect
    }));
    return (
        <>
            {
                eventState? <div className='event-detail'>최대 {maxSelect}개까지 선택할 수 있습니다</div>
                : <></>
            }
            <div className="detail">
                
                <div className="con">
                    <DetailNav history={history}/>
                    <div className="test" style={{backgroundImage:`url(${testImg})`}}></div>
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