import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
    name: string | null;
    price: number | null;
    desc: string | null;
}

const ItemLink = ({name, price, desc}:Props) => {
    return (
        <Link to={`/detail/?menu=${name}`} >
            <div className="item">
                <div className="name">
                    {name}
                </div>
                <div className="description">
                    {desc}
                </div>
                <div className="price">
                    {price}
                </div>
            </div>
        </Link>
    );
};

export default ItemLink;