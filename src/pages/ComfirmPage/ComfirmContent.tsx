import React from 'react';
import Options from '../../component/Bucket/Options/Options';

const ComfirmContent = () => {
    return (
        <div className="orderlist-content-con">
                {
                    bucket.map((doc:any) => {
                        for(let i in doc){
                            return (
                                <>
                                    <div className="orderlist-content">
                                        <div className="orderlist-content-info-con">
                                            <div>{doc.menu}</div>
                                            <div>{numberWithCommas(doc.itemTotalPrice)}원</div>
                                        </div>
                                        <div className="orderlist-menu-con">
                                            <div className="orderlist-menu">
                                                <div>개수 : {doc.count}개</div>
                                                <div>{numberWithCommas(doc.price)}원</div>
                                            </div>
                                            <div className="orderlist-content-more">
                                                <Options options={}/>
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