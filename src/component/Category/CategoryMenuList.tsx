import React from 'react';
import ItemLink from '../Item/Item';
import './Category.scss';

interface Props {
    categoryName : string;
    list: any;
};

const CategoryMenuList = ({categoryName, list}:Props): JSX.Element => {

    return (
        <div className="category">
            <div className="category-name">
                <div className="name-text">{categoryName}</div>
            </div>
            <div className="list">
                {
                    list.map((item:any): JSX.Element | undefined => {
                        for( var i=0 ; i<item.categories.length ; i++ ){
                            if(item.categories[i] === categoryName) {
                                return (
                                    <div key={item.name}>
                                        <ItemLink name={item.name} desc={item.description} price={item.price}/>
                                    </div>
                                )
                            }
                        }
                    })
                }
            </div>
        </div>
    );
};

export default CategoryMenuList;