import { doesNotReject } from 'assert';
import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';
import MenuListItem from './MenuListItem';

type Props = {
    
    menus: [] | undefined

}

const MenuList = ({ menus }:Props ) => {
    console.log(menus);
    menus?.map((doc:any)=>
        {for(let i in doc){
            console.log(doc[i].price)
        }}
    )

    return(
 
        <div>
           
            {
                menus?.map((doc:any)=>{
                    for(let i in doc){
                        return <MenuListItem menu={i} price={doc[i].price}/>
                    }
                })
            }

        </div>

    );
}

export default MenuList