import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import ItemLink from '../Item/Item';
import './Category.scss';
import Up from '../../image/icons/icon_arrow_up_white_x3.png';
import Down from '../../image/icons/icon_arrow_bottom_white_x3.png';

interface Props {
    categoryName : string;
    desc: string
};

const CategoryMenuList = ({categoryName, desc}:Props): JSX.Element => {
    const [dropDown, setDropDown ] = useState<boolean>(true);
    const { items } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.order_state,
        totalPrice:state.Data.data.total_price,
        items:state.Store.menu.items,
        categotys: state.Store.menu.categories,
    }));
    return (
        <div className='category'>
            <div className="category-name" onClick={()=>setDropDown(!dropDown)}>
                <div className="name-text" >
                    {categoryName} 
                    {desc && <div className="name-desc">( {desc} )</div>}
                </div>
                
                {
                    dropDown? <img src={Up} alt='up'/>
                    :<img src={Down} alt='down'/>
                }
            </div>
            <div className={dropDown? 'list':'listdropdowm'}>
                {
                    items.map((item:any): JSX.Element | undefined => {
                        for( var i=0 ; i<item.categories.length ; i++ ){
                            if(item.categories[i] === categoryName) {
                                return (
                                    <div key={item.name}>
                                        <ItemLink name={item.name} desc={item.description} price={item.price} photoUrl={item.photoUrl}key={item.name}/>
                                    </div>
                                )
                            }
                        }
                        return <></>
                    })
                }
            </div>
        </div>
    );
};

export default CategoryMenuList;