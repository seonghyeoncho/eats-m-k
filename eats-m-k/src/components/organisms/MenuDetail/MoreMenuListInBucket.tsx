import React from 'react';

interface Props {
    more:[]

}

const MoreMenuListInBucket = ({more}:Props) => {

    more.map((doc:any)=>{
        for(let i in doc){
            console.log(i, doc[i])
        }
    });

    return (
        <div>
            {
                more.map((doc:any)=>{
                    for(let i in doc){
                        return <div>{i}{doc[i]}</div>
                    }
                })
                
            }
        </div>
    );
}

export default MoreMenuListInBucket;