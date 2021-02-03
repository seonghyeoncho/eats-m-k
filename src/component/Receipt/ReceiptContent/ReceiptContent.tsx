import React from 'react';
import { useSelector } from 'react-redux';
import OptionsContainer from '../../Bucket/Options/OptionsContainer';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../redux';
import { Bucket } from '../../../redux/reducers/DataReducer';

interface Props {
};

const ReciptContent = ({}:Props) => {

    const { receipts } =  useSelector((state:RootState) => ({
        receipts:state.Data.data.receipt,
    }));
    return (
        <div className="content">
            {
                receipts.map((doc:Bucket) => {
                    for(let i in doc){
                        return (
                            <div className="item">
                                <div className="title">
                                    <div>{doc.name}</div>
                                    <div>{numberWithCommas(doc.itemTotalPrice)}원</div>
                                </div>
                                <div className="sub">
                                    <div>개수 : {doc.count}개</div>
                                    <div>{numberWithCommas(doc.price)}원</div>
                                </div>
                                <OptionsContainer options={doc.options}/>
                            </div>
                        );
                    }
                })
            }
        </div>
    );
};

export default ReciptContent;