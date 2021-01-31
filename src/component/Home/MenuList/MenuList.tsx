import React from 'react';
import MenuListItem from './MenuListItem';
import Ready from '../../../image/graphics/gaphic_ready_x3.png';


type Props = {
    
    menus: any | undefined
    store: string | string[] | null
    table: string | string[] | null

}

const MenuList = ({ menus, store, table }:Props ) => {
    var flag = 0;

    if( menus !== undefined ) {
        for(let i=0 ; i<menus.length ; i++ ) {
            if( menus[i].state ) flag++;
        }
    }
  
    return(
 
        <div className="menulist-content">

            {
                flag === 0 ? 

                    <div className="ready-img">
                        <div className="ready-content">
                            <img src={Ready} width="133px"/>
                            <div className="ready-text">메뉴 준비중입니다</div>
                        </div>

                    </div >
                :
                    <>
                        {  
                            menus?.map((doc:any) => {
                                
                                return <MenuListItem key={doc.menu} menu={doc.menu} price={doc.price} store={store} table={table} state={doc.state}/>
                                
                            })
                        }
                    </>

            }

        </div>

    );
}

export default MenuList