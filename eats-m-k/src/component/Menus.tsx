import React from 'react';
import Counter from '../component/Counter';


const Menus = (props:any):any => {

    const numberWithCommas = ( x:number ) => {

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
      }

    return(

        <div>
            {props.menu.map((doc:any) => 
          
                <div key={doc.menu} className="dd">
          
                    <h1>{doc.menu}<p/>가격 : {numberWithCommas(doc.price)}원</h1>

                    <div>
                        <Counter 
                            name={doc.menu} 
                            price={doc.price} 
                            setTotalPrice={props.setTotalPrice}
                            setTest={props.setTest}
                            currentPrice={props.currentPrice}
                        />
                    </div>

                </div>
            
            
            )}

        </div>

    );
}
export default Menus;