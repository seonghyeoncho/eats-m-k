import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMenu } from '../../redux/actions/SelectMenuAction';
import './HorizontalScroll.scss';

interface Props {
    list: Item[];
    title:string;
    width: number;
    height: number;
    radius: number;
};
interface Item {
    name: string;
    price: number;
    description: string;
    categories: number[];
    optionGroups: string[];
}

const HorizontalScroll = ({title, list, width, height, radius}:Props) => {
    const dispatch = useDispatch();
    console.log(list);
    return (
        <div className="horizontal-scroll">
            <div className="title-con">
                <div  className="title">
                    {title}
                </div>
            </div>
            <div className="content-con">
                <div className="content">
                    <div className="item" style={{width:'10px', height:'10px', color:"transparent", backgroundColor:"transparent",}}/>
                    {
                        list.map((item:Item) => {
                            return (
                                <Link to={`/detail/`} onClick={() => dispatch(setMenu(item.name, 1,[]))}>
                                    <div className="item">
                                        <div className="info">
                                            <div className="name">{item.name}</div>
                                            <div className="price">{item.price}</div>
                                        </div>
                                        <div className="box" style={{width:`${width}px`, height:`${height}px`, borderRadius:`${radius}` }}></div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    <div className="item" style={{width:'10px', height:'10px', color:"transparent", backgroundColor:"transparent"}}/>
                </div>
                <div/>
            </div>
        </div>
    );
};

export default HorizontalScroll;