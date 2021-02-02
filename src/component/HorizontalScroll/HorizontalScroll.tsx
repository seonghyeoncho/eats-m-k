import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMenu } from '../../redux/actions/SelectMenuAction';
import './HorizontalScroll.scss';

interface Props {
    list: any;
    title:string;
    width: number;
    height: number;
};

const HorizontalScroll = ({title, list, width, height}:Props) => {
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
                    {
                        list.map((doc:any) => {
                            return (
                                <Link to={`/detail/`} onClick={() => dispatch(setMenu(doc.name, 1, []))}>
                                    <div className="item" style={{width:`${width}px`, height:`${height}px`, }}>
                                        {doc.name}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;