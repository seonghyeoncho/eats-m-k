import React from 'react';
import { useSelector } from 'react-redux';
import Complete from '../../../image/icons/icon_OrderCompleted_x3.png';
import Reception from '../../../image/icons/icon_ReceptionCompleted_x3.png';
import { RootState } from '../../../redux';

const StateIndicator = () => {
    const { state } = useSelector((state:RootState) => ({
        state:state.Data.data.state,
    }));
    return (
        <>
            <div className="receipt-state">
                <div className="receipt-complete"> 
                    <div className="circle-1"> 
                        <img src={Complete} alt="complete"/>
                    </div>
                    <div className="circle-2">
                    </div>
                    <div className="text">
                        주문완료  
                    </div>
                </div>
                
                <div className="receipt"> 
                    <div className={`circle1 ${state ? 'y1':''}`}>
                        { state ?  <img src={Reception} alt="receipt"/> : <></> }
                    </div>
                    <div className={`circle2 ${state ? 'y2':''}`}></div>
                    <div className={`text ${state ? 'ytext':''}`}>
                        접수완료  
                    </div>
                </div>
                <div className="state-line"/>
                
            </div>
        </>
    );
};

export default StateIndicator;