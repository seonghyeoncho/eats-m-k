import React from 'react';
interface Props {
    options:any;
};
const OptionsItem = ({options}:Props) => {
    var morePrice = 0;
    options.map((O:any) => {if(O.state) morePrice += O.price});

    return (
        <div className="name-price">
            <div className="name-price-content">
                { 
                    options.map((doc:any, index:number) => {
                        if(doc.state) {
                            return <div className="name" key={index}>{doc.name},</div>
                        }
                    })
                }
            </div>
            <div className="price">{morePrice}원</div>
        </div>
       
    );
};

export default OptionsItem;