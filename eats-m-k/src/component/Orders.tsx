import React from 'react'


const Orders = (props:any):any => {

    return(
        <div>
            
            {props.test.map((doc:any)=> {

                if(doc.n !== 0){
                    return (
                        <>
                            <h1 key={doc.menu}>{doc.menu}    {doc.n}개</h1>
                            <button onClick={()=>props.cancleOrder(doc.menu, doc.n)}>주문 취소</button>
                        </>
                    );

                } else {

                }

            })}

        </div>
    );

}

export default Orders;