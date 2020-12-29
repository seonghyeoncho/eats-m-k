import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

//currentPrice, setTotalPrice setTest price name
const SpecificMenu = (props:any) => {


    const [data,setData] = useState<any>();

    
    return(
        <div>

            <div>{props.select}</div>
            {
                props.menu.map((doc:any)=>{
                    if(doc.menu === props.select){
                        console.log(doc.menu);
                        return (

                            <Counter
                                price={doc.price}
                                menu={doc.menu}
                                setTotalPrice={props.setTotalPrice}
                                currentPrice={props.currentPrice}
                                setTest={props.setTest}
                                store={props.store}
                                table={props.table}
                            />
                        )
                    } else {
                        <h1>잘못된 접근입니다.</h1>
                    }
                })
            }

            
            <Link to={`/menu/?store=${props.store}&table=${props.table}`}><button>뒤로가기</button></Link>
            
        </div>
    );




}

export default SpecificMenu;