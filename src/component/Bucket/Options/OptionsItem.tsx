import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
interface Props {
    options:any;
}

const OptionsItem = ({options}:Props) => {
    options.map((doc:any) => (doc.state ? console.log(doc.name, doc.price) : ''))
    return (
        <div>
            {
                options.map((doc:any) => {
                    if(doc.state) {
                        return (
                            <div>
                                <div className="name">{doc.name}</div>
                                <div className="price"> + {numberWithCommas(doc.price)}원</div>
                            </div>
                        )
                    }
                })
            }
        </div>
       
    );
};

export default OptionsItem;