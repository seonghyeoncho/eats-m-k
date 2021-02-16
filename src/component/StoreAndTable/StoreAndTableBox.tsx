import React from 'react';

type BoxProps = {
    store:string | string[] | null;
    table:string | string[] | null;
    state: boolean | undefined
    orderStatus: boolean | undefined
};

const StoreAndTableBox = ({ store, table }:BoxProps) => {
    return(
        <div className="nav">
            <div>
                <div className="store">{store}</div>
                <div className="table">{`테이블 ${table}`}</div>
            </div>
        </div>
    );
};

export default StoreAndTableBox;