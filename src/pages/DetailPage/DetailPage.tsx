import React, { useEffect, useState } from 'react';
import DetailNav from '../../component/Detail/Nav/DetailNav';
import DetailContent from '../../component/Detail/DetailContent';
import AddMenuButtonContainer from '../../component/AddMenuButton/AddMenuButtonContainer';
import DetailInfo from '../../component/Detail/Info/DetailInfo';
import OrderDirectContainer from '../../component/OrderButton/OrderDirectContainer';
import { CounterContainer } from '../../component/Counter';
import SelectMenuPrice from './SelectMenuPrice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface Props {
    select: {
        name: string,
        price:number,
        item_total_price:number,
        optionGroups: string[],
        count:number,
        options:Option[],
        desc:string,
        photoUrl:string
    };
    history:any;
};
interface Option {
    name: string;
    price: number;
};
const useScroll = () => {
    // state를 생성합니다.
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};
const DetailPage = ({select, history}:Props) => {
    const scrollY = useScroll().y;
    const { eventState, maxSelect } = useSelector((state:RootState) => ({
        eventState: state.Event.eventState,
        maxSelect: state.Event.maxSelect
    }));
    const [ detailNav, setDetailNav ] = useState<boolean>(false);
    useEffect(() => {
        if(scrollY > 0) setDetailNav(true);
        else setDetailNav(false);
        
    }, [scrollY]);
    return (
        <>
            {
                eventState? <div className='event-detail'>최대 {maxSelect}개까지 선택할 수 있습니다</div>
                : <></>
            }
            <div className="detail">
                <div className="con">
                    <DetailNav history={history} name={select.name} state={detailNav}/>
                    <div className="test" style={{backgroundImage:`url(${select.photoUrl})`}}></div>
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