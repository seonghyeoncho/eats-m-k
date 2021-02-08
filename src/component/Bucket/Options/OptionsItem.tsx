import React from 'react';
interface Props {
    options:any;
};
const OptionsItem = ({options}:Props) => {
    var morePrice = 0;
    options.forEach((O:any): void => {if(O.state) {morePrice += O.price}});

    return (
        <div className="name-price">
            <div className="name-price-content">
                { 
                    options.map((doc:any, index:number) => {
                        if(doc.state) {
                            return <div className="name" key={index}>{doc.name},</div>
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