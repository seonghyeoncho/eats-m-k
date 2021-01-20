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
        <div>
            {
                more.map((doc:any)=>{
                    for(let i in doc){
                        return <div>{i}   {numberWithCommas(doc[i])}원</div>
                    }
                })
                
            }
        </div>
    );
}

export default MoreMenuList;