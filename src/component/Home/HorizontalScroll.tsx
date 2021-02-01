import React from 'react';

interface Props {
    list: any;
    title:string;
};

const HorizontalScroll = ({title, list}:Props) => {
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
                    {
                        list.map((doc:any) => {
                            return (
                                <div className="item">
                                    hello
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;