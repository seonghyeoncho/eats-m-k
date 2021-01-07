import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';

type Props = {
    
    menuList: object[]

}

const MenuList = ({ menuList }:Props ) => {

    return(
 
        <div>
           
            {
                menuList.map((list:any)=>
                    <>
                        <div>사진</div>

                        <Link to={`/detail/?menu=${list.menu}`} key={list.menu} >
                            
                            <div >{list.menu}{numberWithCommas(list.price)}원</div>
                        </Link>

                        
                    </>
                )
            }

        </div>

    );
}

export default MenuList