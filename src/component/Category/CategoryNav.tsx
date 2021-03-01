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
                            <div key={category.name}>
                                <CategoryMenuList categoryName={category.name} desc={category.description} />
                            </div>
                            
                        )
                    })
                }
                <div className="item" style={{width:"15px", margin:"0px"}}/>
            </div>
        </div>
    );
};

export default CategoryNav;