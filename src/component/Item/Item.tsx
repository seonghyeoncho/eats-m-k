import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../functions/addCommaFunc';
import { SelectAction } from '../../redux/actions';
import DefaultImg from '../../image/graphics/graphic_defaultImage_x3.png';

interface Props {
    name: string;
    price: number;
    desc: string;
    photoUrl:string
}

const ItemLink = ({name, price, desc, photoUrl}:Props) => {
    const dispatch = useDispatch();
    return (
        <Link to={`/detail/?name=${name}`} onClick={() => {dispatch(SelectAction.setMenu(name, 1,[]));window.scrollTo(0,0)}}>
            <div className="list-con">
                {/* <div className="img"/> */}
                {photoUrl? <img className="img" src={photoUrl} alt="menuImg"/>:<img className="img" src={DefaultImg} alt="menuImg"/>}
                <div className="item">
                    <div className="name">
                        {name}
                    </div>
                    <div className="description">
                        {desc}
                    </div>
                    <div className="price">
                        {numberWithCommas(price)}원
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ItemLink;