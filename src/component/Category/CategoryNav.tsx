import React from 'react';
import './Category.scss';
import CategoryMenuList from './CategoryMenuList';

interface Category {
    id: number;
    name: string;
    description: string;
};
interface Props {
    categorys:Category[];
    setCategoryName: (category:string) => void;
    categoryName: string;
};

const CategoryNav = ({ categorys, setCategoryName, categoryName}:Props) => {
    return (
        <div className="category-nav">
            <div className="name">
                <div className="item" style={{width:"15px", margin:"0px"}}/>
                {
                    categorys.map((category:Category) => {
                        return (
                            <>
                                <div className="category-name" key={category.name}>
                                    <div className="name-text">{category.name}</div>
                                </div>
                                <CategoryMenuList categoryName={category.name} />
                            </>
                            
                        )
                    })
                }
                <div className="item" style={{width:"15px", margin:"0px"}}/>
            </div>
        </div>
    );
};

export default CategoryNav;