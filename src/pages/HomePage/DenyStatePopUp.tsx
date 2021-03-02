import { useDispatch } from "react-redux";
import { DataAction } from "../../redux/actions";
import './DenyStatePopUp.scss';
const DenyStatePopUP = () => {

    const dispatch = useDispatch();
    return (
        <div className="deny-popup-con">
            <div className="popup-inner-con">
                <div className="popup-title">
                    주문이 취소되었습니다
                </div>
                <div className="popup-content">
                    메뉴가 취소되었습니다.<br/>
                    다시 주문해주세요.
                </div>
                <div className="popup-bt-con">
                    <div className="popup-bt-delete" onClick={()=>{dispatch(DataAction.queryDenyState())}}>확인</div>
                </div>
            </div>
        </div>
    );
};

export default DenyStatePopUP;