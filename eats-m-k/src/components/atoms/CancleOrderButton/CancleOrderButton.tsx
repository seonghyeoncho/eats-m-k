import React, { useState } from 'react';
import Trashcon from '../../../icons/icon_delete_x3.png';
import { Popover, Button } from 'antd'

type Props = {
    cancleOrders:()=>void
}

const CancleOrderButton = ({cancleOrders}:Props) => {

    const [ popOverVisible, setPopOverVisible ] = useState<any>({visible:false});
    console.log(popOverVisible.visible)

    return (
        <Popover
            title={
                <div>
                    <div>메뉴 삭제</div>
                </div>
            }
            content={
                <div className="cancleorder-popover-content">
                    <div>
                        선택한 메뉴를 장바구니에서<br/> 삭제하시겠습니까?
                    </div>
                    <div>
                        <Button onClick={()=>setPopOverVisible({visible:false})}>취소</Button>
                    </div>
                    <div>
                        <Button onClick={()=>{cancleOrders();setPopOverVisible({visible:false})}}>
                            삭제하기
                        </Button>
                    </div>
                </div>
            }
            
            trigger="click"
            visible={popOverVisible.visible}
        >

       
            <div onClick={()=>setPopOverVisible({visible:true})} style={{fontSize:"11px", opacity:"0.68", height:"17px", marginTop:"4px", display:"flex" }}>
                <img src={Trashcon} style={{width:"11px",height:"11.38px" ,marginRight:"6px", marginTop:"3px"}}></img>
                <div>삭제하기</div>
            </div>
        </Popover>
    );
}

export default CancleOrderButton;