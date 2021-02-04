import React from 'react';
import Options from '../../Bucket/Options/Options';
import numberWithCommas from '../../../functions/addCommaFunc';
import { Bucket } from '../../../redux/reducers/DataReducer';
import './ComfirmContent.scss';

interface Props {
    bucket: Bucket[];
};

const ComfirmContent = ({ bucket }:Props) => {
    return (
        <div className="cfcontent">
                {
                    bucket.map((item:Bucket) => {
                        for(let i in item){
                            return (
                                <>
                                    <div className="cfitem">
                                        <div className="cfinfo">
                                            <div className="cfname">{item.name}</div>
                                            <div className="cfprice">{numberWithCommas(item.itemTotalPrice)}원</div>
                                        </div>
                                        <div className="cfcontent">
                                            <div className="cfsinfo">
                                                <div>개수 : {item.count}개</div>
                                                <div>{numberWithCommas(item.price)}원</div>
                                            </div>
                                            <Options options={item.options}/>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>
    );
};
export default ComfirmContent;