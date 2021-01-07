import React from 'react';
import Order from './Order';

interface Props {
    table:any
}
const CompleteOrderList = ({table}:Props) => {


    return (
        <div>
            {table.map((m:any)=>{
          
                if(m.check){
                    return(
                    <div className="or-con">
                        <div key={m.myTable}>{m.myTable}</div>
                        
                        <Order orders={m.orders}/>
                        
                    </div>
                    )
                }
                

            })}
        </div>
    );
}

export default CompleteOrderList;