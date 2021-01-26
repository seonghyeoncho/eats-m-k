import React, { useState } from 'react';
import { dbService } from '../firebase';
import numberWithCommas from '../functions/addCommaFunc';

interface Props {
    menu:any
    store:any
}

const MenuSetting = ({menu,store}:Props) => {

    console.log(menu)
    const [addMenu, setAddMenu] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    const onChange = (event:any) => {
        const {
            target: {name,value},
        } = event;
        if (name === "menu") {
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

        }
        
       const toggledMenu = menu.map((doc:any) => doc.menu === m.menu ? toggleObj : doc);
        dbService.collection('store').doc(`${store}`).update({
            'menu':toggledMenu
        })
        
    }

    const onSubmit = (event:any) => {
        event.preventDefault();
        const array = menu.concat({
            menu:addMenu,
            price:Number(price),
            state:true
        });
        dbService.collection('store').doc(`${store}`).update({
            'menu':array
        })
        setAddMenu('');
        setPrice(0);
    }

    return (
        <div>
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
    );
    
}
export default MenuSetting;