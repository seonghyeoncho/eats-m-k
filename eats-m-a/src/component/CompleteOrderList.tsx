import React, { useState } from 'react';
import Order from './Order';

interface Props {
    table:any
}
const CompleteOrderList = ({table}:Props) => {

    const [select,setSelect] = useState<any>();

    const onClick = (menu:any) => {
        setSelect(menu);
    }


    return (
        <div>
            {table.map((m:any)=>{
          
                if(m.check){
                    return(
                    <div className="or-con" onClick={()=>onClick(m.orders)}>
                        <div key={m.myTable}>{m.myTable}</div>
                        
                        <Order orders={m.orders}/>
                        
                    </div>
                    )
                }
                

            })}
            <div>상세주문</div>
            <Order orders={select}/>


        </div>
    );
}

export default CompleteOrderList;