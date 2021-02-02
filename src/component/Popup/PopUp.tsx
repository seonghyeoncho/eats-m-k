import React from 'react';
import './Popup.scss';

interface Props {
    title:string;
    content:string;
    func: () => void;
    popUpTrigger:() => void
};

const PopUp = ({title, content,func,popUpTrigger}:Props) => {
    return(
        <div className="popup-con">
            <div className="popup-inner-con">
                <div className="popup-title">
                    {title}
                </div>
                <div className="popup-content">
                    {content}
                </div>
                <div className="popup-bt-con">
                    <div className="popup-bt-cancle" onClick={popUpTrigger}>취소</div>
                    <div className="popup-bt-delete" onClick={()=>{popUpTrigger();func();}}>삭제하기</div>
                </div>
            </div>
        </div>
    );
};

export default PopUp; 