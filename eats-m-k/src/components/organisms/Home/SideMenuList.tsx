import React from 'react';
interface Props {
    sideMenus: [] | undefined
}

const SideMenuList = ({sideMenus}:Props) => {


    return(
        <div>
            {
                sideMenus?.map(((doc:any)=>{
                    for(let i in doc){
                        return <div>{i}{doc[i]}원</div>
                    }
                }))
                
            }

        </div>
    ); 
}

export default SideMenuList;