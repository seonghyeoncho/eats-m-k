import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';

interface Props {
    
    more:[]

}

const MoreMenuList = ({more}:Props) => {

    return (
        <div className="moremenulist-con">
            {
                more.map((doc:any)=>{
                   
                    return (
                        <div className="moremenulist-content-con" key={doc.menu}>
                            <div className="moremenulist-content-menu">{doc.menu}</div>
                            <div className="moremenulist-content-price">{numberWithCommas(doc.price)}원</div>
                        </div>
                    )
                    
                })
                
            }
        </div>
    );
}

export default MoreMenuList;