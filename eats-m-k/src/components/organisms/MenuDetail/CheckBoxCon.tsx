import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';


interface Props {
    addMoreMenu: ( m:string, p:number ) => void;

}
const CheckBoxCon = ({ addMoreMenu }:Props) => {
    const [state, setState] = useState<boolean>(false);

    const { AC } = useSelector((state:RootState)=> ({

        AC:state.myBase.menus.data?.AC
        
    }));
    console.log(AC);
    AC?.map((doc:any)=>{
        for(let i in doc){
           
            console.log(doc[i],i);
            
        }
    })


    return (
        <div className="checkbox-con">

            {
                AC?.map((doc:any)=>{
                   
                        return (
                            <div onClick={()=>addMoreMenu(doc, doc.price)} className="checkbox-item">
                                <div>{doc.menu}</div>
                                <div>+{doc.price}원</div>
                            </div>
                        )
                    
                })
            }
        </div>
    );
}

export default CheckBoxCon;