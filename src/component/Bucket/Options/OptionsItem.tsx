import React from 'react';
interface Props {
    options:any;
};
const OptionsItem = ({options}:Props) => {
    let morePrice = 0;
    let flag = options.length;
    options.forEach((O:any): void => {if(O.state) {morePrice += O.price}});

    return (
        <div className="name-price">
            <div className="name-price-content">
                : { 
                    options.map((doc:any, index:number) => {
                        if(doc.state) {
                            return <div className="name" key={doc.name}>&nbsp;{doc.name}{index === flag-1 ? '': ', '}</div>
                        }
                        return <></>;
                    })
                }
            </div>
            <div className="price">{morePrice}원</div>
        </div>
       
    );
};

export default OptionsItem;