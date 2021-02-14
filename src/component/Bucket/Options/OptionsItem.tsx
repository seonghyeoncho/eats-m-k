import React from 'react';
interface Props {
    options:any;
    count:number
};
const OptionsItem = ({options,count}:Props) => {
    let morePrice = 0;
    options.forEach((O:any): void => {if(O.state) {morePrice += O.price}});

    return (
        <>
        <div className="name-price">
            <div className="name-price-content">
                : { 
                    options.map((doc:any, index:number) => {
                        if(doc.state) {
                            return <div className="name" key={doc.name}>&nbsp;{doc.name}{index === count-1 ? ',': ''}</div>
                        }
                        return <></>;
                    })
                }
            </div>
            <div className="price">{morePrice}원</div>
        </div>
        
        </>
       
    );
};

export default OptionsItem;