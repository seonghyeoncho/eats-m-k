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
        <div className="content">
                {
                    bucket.map((item:Bucket) => {
                        for(let i in item){
                            return (
                                <>
                                    <div className="item">
                                        <div className="info">
                                            <div>{item.name}</div>
                                            <div>{numberWithCommas(item.itemTotalPrice)}원</div>
                                        </div>
                                        <div className="content">
                                            <div className="info">
                                                <div>개수 : {item.count}개</div>
                                                <div>{numberWithCommas(item.price)}원</div>
                                            </div>
                                            <div className="option">
                                                <Options options={item.options}/>
                                            </div>
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