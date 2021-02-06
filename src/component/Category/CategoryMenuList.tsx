import React from 'react';
import './Category.scss';

interface Props {
    categoryName : string;
    list: any;
};

const CategoryMenuList = ({categoryName, list}:Props): JSX.Element => {
    console.log(list);
    return (
        <div>
            <div>
                {
                    list.map((item:any): JSX.Element | undefined => {
                        for( var i=0 ; i<item.categories.length ; i++ ){
                            if(item.categories[i] === categoryName) {
                                return (
                                    <div>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {item.description}
                                        </div>
                                        <div>
                                            {item.price}
                                        </div>
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