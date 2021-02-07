import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../functions/addCommaFunc';
import { RootState } from '../../redux';
import './SelectMenuPrice.scss';

const SelectMenuPrice = () => {
    const { select, options, count } = useSelector((state:RootState) => ({
        select:state.Select.select,
        options:state.Option.option,
        count: state.Counter.count,
    }));
    var selectPrice = select.price;
    options.forEach((option:any) => option.options.map((doc:any) => {if(doc.state) selectPrice+=doc.price}));
    return (
        <div className="selectprice">
            <div className="text">합계</div>
            <div className="price">
                {numberWithCommas(selectPrice * count)}원
            </div>
        </div>
    );
};
export default SelectMenuPrice;