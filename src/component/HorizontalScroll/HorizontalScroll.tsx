import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMenu } from '../../redux/actions/SelectMenuAction';
import BigBox from './BigBox';
import './HorizontalScroll.scss';
import SmallBox from './SmallBox';

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
};

const HorizontalScroll = ({title, list, width, height, radius}:Props) => {
    const dispatch = useDispatch();
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
                                <Link to={`/detail/?name=${item.name}`} onClick={() => {dispatch(setMenu(item.name, 1,[]));window.scrollTo(0,0)}} key={item.name}>
                                    {
                                        width === 325 ? <BigBox width={width} height={height} radius={radius} name={item.name} price={item.price}/>
                                        : <SmallBox width={width} height={height} radius={radius} name={item.name} price={item.price}/>
                                    }
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