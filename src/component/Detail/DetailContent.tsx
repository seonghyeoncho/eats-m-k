import React from 'react';
import CounterContainer from '../Counter/CounterContainer';
import CheckBoxCon from './CheckBoxCon';
import numberWithCommas from '../../functions/addCommaFunc';
import DetailInfo from './DetailInfo';
import { Option } from '../../redux/Types'

interface Props {
    select: {
        name:string | null,
        price:number | null,
        itemTotalPrice:number | null,
        options:Option[] | null,
        count:number | null
    };
    moreMenuHandler: (m:Option,isChecked:boolean) => void;
};

const DetailContent = ({ select, moreMenuHandler }:Props) => {

    return(
        <div className="detail-con">
            <div className="detail-content-con">

                {/* <DetailInfo menu={select.name} price={select.price}/> */}

                <div className="line"/>

                <CheckBoxCon moreMenuHandler={moreMenuHandler}/>

                <div className="line"/>

                {/* <CounterContainer/> */}

                <div className="line"/>

                <div className="detail-totalprice-con">
                    <div className="datail-totalprice-text">합계</div>
                    {/* <div className="detail-totalprice-price">{numberWithCommas(select.itemTotalPrice)}원</div> */}
                </div>

                <div className="line"/>

            </div>
        </div>
    );
};
export default DetailContent;