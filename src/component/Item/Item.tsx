import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SelectAction } from '../../redux/actions';

interface Props {
    name: string | null;
    price: number | null;
    desc: string | null;
}

const ItemLink = ({name, price, desc}:Props) => {
    const dispatch = useDispatch();
    return (
        <Link to={`/detail`} onClick={() => dispatch(SelectAction.setMenu(name, 1,[]))}>
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