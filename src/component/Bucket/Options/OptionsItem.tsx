import React from 'react';
interface Props {
    options:any;
};
const OptionsItem = ({options}:Props) => {
    var morePrice = 0;
    options.map((O:any) => {if(O.state) morePrice += O.price});
    console.log(options)
    var count = 0;
    options.map((O:any) => {if(O.state) count ++;});
    console.log(count)
    return (
        <div className="name-price">
            <div className="name-price-content">
                { 
                    options.map((doc:any, index:number) => {
                        if(doc.state) {
                            if(index === count- 1) {
                                return (
                                        <div className="name">{doc.name}</div>
                                )
                            } else {
                                return (
                                        <div className="name">{doc.name},</div>
                                )
                            }
                        }
                    })
                }
            </div>
          
            <div className="price">{morePrice}원</div>
        </div>
       
    );
};

export default OptionsItem;