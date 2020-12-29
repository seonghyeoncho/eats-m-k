import React from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Counter from './Counter';
import SpecificMenu from "./SpecificMenu";

const Menus = (props:any):any => {

    const numberWithCommas = ( x:number ) => {

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    }
    const select = (menu:string) => {

        props.setSelect(menu);

    }

    

    return(
        
            
        <div>

            {props.menu.map((doc:any) => 
                <>

                    <Link to="/detail" onClick={()=>select(doc.menu)} style={{textDecoration:'none'}}>

                        <button key={doc.menu} className="menu-card">
                            
                            <div>{doc.menu}<p/>가격 : {numberWithCommas(doc.price)}원</div>
                                        
                        </button>
                        
                    </Link> 
                          

                                
                </>
            )}

        </div>

        

    );
}
export default Menus;