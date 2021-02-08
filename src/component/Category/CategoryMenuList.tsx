import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import ItemLink from '../Item/Item';
import './Category.scss';

interface Props {
    categoryName : string;
};

const CategoryMenuList = ({categoryName}:Props): JSX.Element => {
    const { items } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.order_state,
        totalPrice:state.Data.data.total_price,
        items:state.Store.menu.items,
        categotys: state.Store.menu.categories,
    }));
    return (
        <div className="category">
            
            <div className="list">
                {
                    items.map((item:any): JSX.Element | undefined => {
                        for( var i=0 ; i<item.categories.length ; i++ ){
                            if(item.categories[i] === categoryName) {
                                return (
                                    <div key={item.name}>
                                        <ItemLink name={item.name} desc={item.description} price={item.price}/>
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