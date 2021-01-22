import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';

interface Props {
    
    more:[]

}

const MoreMenuList = ({more}:Props) => {

    more.map((doc:any)=>{
        for(let i in doc){
            console.log(i, doc[i])
        }
    });
    console.log(more)

    return (
        <div className="moremenulist-con">
            {
                more.map((doc:any)=>{
                   
                    return (
                        <div className="moremenulist-content-con">
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