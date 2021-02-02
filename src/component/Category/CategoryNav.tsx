import React from 'react';
import './Category.scss';

interface Category {
    id: number;
    name: string;
    description: string;
};
interface Props {
    categorys:Category[];
    setCategoryName: (category:string) => void;
};

const CategoryNav = ({ categorys, setCategoryName}:Props) => {
    console.log(categorys);
    return (
        <div className="category-nav">
            <div className="name">
                {
                    categorys.map((category:Category) => {
                        return (
                            <div className="item" onClick={() => setCategoryName(category.name)}>
                                {category.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CategoryNav;