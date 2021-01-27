import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import numberWithCommas from '../functions/addCommaFunc';

interface Props {
    data:any
    store:any
}

const MenuSetting = ({data,store}:Props) => {

    const [ addMenu, setAddMenu ] = useState<string>('');
    const [ price, setPrice ] = useState<number>(0);
    const [ state, setState ] = useState<number>(0);
    const [ menu, setMenu ] = useState<any>([]);

    const onChange = ( event:any ) => {

        const {

            target: {name,value},

        } = event;

        if ( name === "menu" ) {

            setAddMenu(value);

        } else if ( name === "price" ){

            setPrice(value);

        }
    };

    const toggleState = (m:any) => {

        console.log(!m.state)

        const toggleObj = {

            menu:m.menu,
            price:m.price,
            state:!m.state

        };

        const toggledMenu = menu.map((doc:any) => doc.menu === m.menu ? toggleObj : doc);

        if(state === 0) {

            dbService.collection('store').doc(`${store}`).update({
                'menu':toggledMenu
            });

        } else if(state === 1) {

            dbService.collection('store').doc(`${store}`).update({
                'setmenu':toggledMenu
            });

        } else {

            dbService.collection('store').doc(`${store}`).update({
                'sidemenu':toggledMenu
            });

        }
        
    };

    // const removeMenu = (m:string) => {
    //     const removedObj = menu.filter((doc:any) => doc.menu !== m );
    //     dbService.collection('store').doc(`${store}`).update({
    //         'menu':removedObj
    //     })
    // };

    useEffect(() => {

        changeMenuList();

    }, [state]);

    const changeMenuList = () => {

        if( state === 0 ) {
            
        } else if( state === 1 ) {
            
        } else {
            
        }

    };

    const onSubmit = (event:any) => {

        event.preventDefault();

        const array = menu.concat({
            menu:addMenu,
            price:Number(price),
            state:true
        });
        if(state === 0) {

            dbService.collection('store').doc(`${store}`).update({
                'menu':array
            });

        } else if(state === 1) {

            dbService.collection('store').doc(`${store}`).update({
                'setmenu':array
            });

        } else {

            dbService.collection('store').doc(`${store}`).update({
                'sidemenu':array
            });

        }

        setAddMenu('');
        setPrice(0);

    }

    return (
        <div className="menusetting-con">
            <div className="menusetting-nav-con">
                
                <div className="menusetting-nav-main" onClick={() => setState(0)}>단품 메뉴</div>
                <div className="menusetting-nav-set" onClick={() => setState(1)}>세트 메뉴</div>
                <div className="menusetting-nav-side" onClick={() => setState(2)}>사이드 메뉴</div>
                <div className="background-box-menusetting"></div>
            </div>
            <div className="menusetting-content-con">
                {
                    menu?.map((doc:any)=>{
                        
                            return (
                                <div>
                                    <div>
                                        {doc.menu}
                                    </div>
                                    <div>
                                        {numberWithCommas(doc.price)}원
                                    </div>
                                    <div>
                                        {
                                            doc.state ?
                                                <button onClick={()=>toggleState(doc)}>주문 가능</button>
                                            :
                                                <button onClick={()=>toggleState(doc)}>주문 불가</button>

                                        }

                                    </div>
                                    <div>
                                        {/* <button onClick={()=>removeMenu(doc.menu)}>삭제</button> */}
                                    </div>
                                    <hr/>
                                </div>
                            )
                        

                    })
                }
                <div>메뉴 추가</div>
                <form onSubmit={onSubmit}>
                    <input name="menu" placeholder="메뉴 이름" value={addMenu} onChange={onChange} required></input>
                    <input name="price" placeholder="가격" value={price} onChange={onChange} required></input>
                    
                    <input type='submit'></input>
                </form>
            </div>

        </div>
    );
    
}
export default MenuSetting;