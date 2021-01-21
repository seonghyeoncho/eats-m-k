import { doesNotReject } from 'assert';
import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';
import MenuListItem from './MenuListItem';
import Ready from '../../../graphics/graphic_ready.png';
import { disconnect } from 'process';


type Props = {
    
    menus: [] | undefined

}

const MenuList = ({ menus }:Props ) => {
  
    return(
 
        <div>
            {
                menus?.length === 0 ? 

                    <div className="ready-img">
                        <div className="ready-content">
                            <img src={Ready}/>
                            <div>메뉴 준비중입니다</div>
                        </div>

                    </div >
                :
                    <>
                        {  
                            menus?.map((doc:any)=>{
                                
                                return <MenuListItem menu={doc.menu} price={doc.price}/>
                                
                            })
                        }
                    </>

            }
           

        </div>

    );
}

export default MenuList