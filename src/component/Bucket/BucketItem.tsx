import React from 'react';
import CancleOrderButtonContainer from '../CancleOrderButton/CancleOrderButtonContainer';
import ModifCount from './ModifCount';
import BucketItemInfo from './BucketItemInfo';
import MoreMenuListContainer from './MoreMenuListContainer';


interface Props {
    bucket: any;
    totalPrice:number
    store:string | string[] | null
    table:string | string[] | null

}
const BucketItem = ({bucket, store, table, totalPrice}:Props) => {
    return(
        <>
            {
                bucket?.map((doc:any): JSX.Element | undefined => {
                    for(let i in doc){
                        return (
                            <div className="bucket-item-con" key={doc.menu}>
                                <div className="bucket-item"> 
                                    <BucketItemInfo menu={doc.menu} itemTotalPrice={doc.itemTotalPrice} count={doc.count} price={doc.price}/>
                                    <MoreMenuListContainer more={doc.more}/>
                                    <div className="line"/>
                                    <div className="modif-bucket">
                                        <CancleOrderButtonContainer 
                                            id={doc.id} 
                                            itemTotalPrice={doc.itemTotalPrice} 
                                            bucket={bucket} 
                                            store={store} 
                                            table={table} 
                                            totalPrice={totalPrice} 
                                        />
                                        <ModifCount 
                                            c={doc.count}
                                            select={doc}
                                        />
                                    </div>
                                </div>
                                <div className="middle"/>
                            </div>
                        );
                    }
                })
            }
        </>
    );
};
export default BucketItem;