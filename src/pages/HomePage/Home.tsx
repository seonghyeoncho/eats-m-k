import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import StoreAndTableBoxContainer from '../../component/StoreAndTable/StoreAndTableBoxContainer';
import { LocationAction, StoreAction, DataAction } from '../../redux/actions';
import HorizontalScroll from '../../component/HorizontalScroll/HorizontalScroll';
import CategoryNav from '../../component/Category/CategoryNav';
import CategoryMenuList from '../../component/Category/CategoryMenuList';
import './HomePage.scss';
import ButtonsContainer from '../../component/Buttons/ButtonsContainer';
import Indicator from './Indicator';
import { OrderButtonContainer } from '../../component/OrderButton';

const useScroll = () => {
    // state를 생성합니다.
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    // scrll의 값을 가져와 state를 갱신합니다.
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
      // scroll 이벤트를 만들어줍니다. 스크롤을 움직일때 마다 
      // onScroll 함수가 실행됩니다.
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
  };

const Home: React.FC<any> = ( props:any ) => {

    const scrollY = useScroll().y;
    const { items, categotys } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.order_state,
        totalPrice:state.Data.data.total_price,
        items:state.Store.menu.items,
        categotys: state.Store.menu.categories,
    }));
    const s = window.localStorage.getItem('storeName');
    const [ categoryName, setCategoryName ] = useState<string>('');
    const [ homeNav, setHomeNav ] = useState<boolean>(false);
    const [ categoryVaild, setCategoryVaild ] = useState<boolean>(false);
    const query = queryString.parse(window.location.search);
    const store = query.store;
    const table = query.table;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(items.length === 0) {
            dispatch(LocationAction.initiateLocation(store, table));
            dispatch(StoreAction.loadStoreFirebase());
            dispatch(DataAction.loadDataFirebase());
        }
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
    },[s, categotys, scrollY]);

    return (
        <div className="home">
            <StoreAndTableBoxContainer/>
            <ButtonsContainer homeNav={homeNav}/>
            <div className={homeNav? 'home-content-nav': `home-content`}>
                <div className="first">
                    <HorizontalScroll list={items} title={'사장님 추천'} width={325} height={160} radius={10}/>
                </div>
                <div className="second">
                    <HorizontalScroll list={items} title={'이런건 어때요?'} width={120} height={160} radius={18}/>
                </div>
                {
                    categoryVaild ? 
                        <>
                            <CategoryNav categorys={categotys} setCategoryName={setCategoryName} categoryName={categoryName}/>
                            {/* <CategoryMenuList list={items} categoryName={categoryName} /> */}
                        </>
                    :
                        <>
                            <Indicator/>
                        </>
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
