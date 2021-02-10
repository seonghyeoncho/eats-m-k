import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import StoreAndTableBoxContainer from '../../component/StoreAndTable/StoreAndTableBoxContainer';
import HorizontalScroll from '../../component/HorizontalScroll/HorizontalScroll';
import CategoryNav from '../../component/Category/CategoryNav';
import './HomePage.scss';
import ButtonsContainer from '../../component/Buttons/ButtonsContainer';
import { OrderButtonContainer } from '../../component/OrderButton';

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
const Home: React.FC<any> = ( props:any ) => {

    const scrollY = useScroll().y;
    const { items, categotys, totalPrice, eventState, orderStatus} = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.order_state,
        items:state.Store.menu.items,
        categotys: state.Store.menu.categories,
        totalPrice: state.Data.data.total_price,
        eventState: state.Event.eventState,
    }));
    const s = window.localStorage.getItem('storeName');
    const [ categoryName, setCategoryName ] = useState<string>('');
    const [ homeNav, setHomeNav ] = useState<boolean>(false);
    const [ categoryVaild, setCategoryVaild ] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(categoryName === '') {
            if(categotys.length !== 0 ) {setCategoryName(categotys[0].name); return;}
        };
        if(scrollY !== 0) {
            setCategoryVaild(true);
        } else {
            setCategoryVaild(false);
        }
        if(scrollY >= 178) {
            setHomeNav(true);
        } else {
            setHomeNav(false);
        }
    },[s, categotys, scrollY, items.length, categoryName, dispatch,]);
    
    return (
        <div className="home">
            <StoreAndTableBoxContainer/>
            <ButtonsContainer homeNav={homeNav}/>
            {
                eventState? <div className={homeNav? 'event-nav':'event'}> 장바구니에 메뉴가 담겼습니다</div>
                : <></>
            }
            <div className={homeNav ?  totalPrice === 0 && !orderStatus? 'home-content-noprice' : 'home-content-nav' : `home-content`}>
                <div className="first">
                    <HorizontalScroll list={items} title={'사장님 추천'} width={325} height={160} radius={10}/>
                </div>
                <div className="second">
                    <HorizontalScroll list={items} title={'이런건 어때요?'} width={120} height={160} radius={18}/>
                </div>
                {
                    categoryVaild ? <CategoryNav categorys={categotys} setCategoryName={setCategoryName} categoryName={categoryName}/>
                    : <></>
                }
                <div className="home-order-bt">
                    {
                        homeNav? <OrderButtonContainer/>
                        : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
