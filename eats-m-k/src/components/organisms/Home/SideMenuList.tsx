import React from 'react';
interface Props {
    AC: [] | undefined
}

const SideMenuList = ({AC}:Props) => {


    return(
        <div>
            {
                AC?.map((doc:any) => {
                    for(let i in doc){
                        return <div>{i}{doc[i]}원</div>
                    }
                })
                
            }

        </div>
    ); 
}

export default SideMenuList;