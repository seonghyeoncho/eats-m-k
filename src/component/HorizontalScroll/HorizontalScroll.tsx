import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalScroll.scss';

interface Props {
    list: any;
    title:string;
};

const HorizontalScroll = ({title, list}:Props) => {
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
                                <Link to={`/detail/?menu=${doc.name}`} >
                                    <div className="item">
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