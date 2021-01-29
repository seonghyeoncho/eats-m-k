import { updateBucket } from "./updateBucket";

const store = window.localStorage.getItem('store');
const table = window.localStorage.getItem('table');


export const addOrdersFunc = ( bucket:any,select:any, totalPrice:number ) => {

    if( bucket.length !== 0 ) {

        const c = bucket.length;
        var flag = 0;

        for( let i=0 ; i<bucket.length ; i++ ) {
            if( bucket[i].menu === select.menu && compareAndMerge(bucket[i].more, select.more) ) {
                addOrdersProcesser('M', bucket, select, totalPrice);
                break;
            }
            flag++;
        }; 
        if(flag === c ) addOrdersProcesser('A', bucket, select, totalPrice);

    } else {
        addOrdersProcesser('A', bucket, select, totalPrice);
    };
};


export const compareAndMerge = ( bucketMore:[], selectMore:any ) => {

    if( bucketMore.length !== 0 && selectMore.length !== 0 ) {

        if( JSON.stringify(bucketMore).length === JSON.stringify(selectMore).length) {

            let flag1 = 0;
            const count = bucketMore.length;

            for( let i=0 ; i<count ; i++ ) {

                console.log( JSON.stringify(bucketMore),JSON.stringify(selectMore[i].menu) )

                if( JSON.stringify(bucketMore).includes(JSON.stringify(selectMore[i].menu)) ) flag1++;
            
            }

            if (flag1 == count ) {
                console.log('ture : reason 1');
                return true;
            } else {
                console.log('false : reason 1');
                return false;
            }
        } else {
            console.log('false : reason 2');
            return false;
    
        }
    } else if( bucketMore.length === 0 && selectMore.length === 0 ) {
        console.log('true : reason 2');
        return true;

    }

    return false;

};



export const addOrdersProcesser = (c:string, bucket:any, select:any, totalPrice:number) => {

    if( c === 'A' ) {
        const result:[any,number] = processA(bucket, select, totalPrice);
        updateBucket(store,table,result[0],result[1]);

    } else if ( c === 'M' ) {
        const result:[any,number] = processM(bucket, select);
        updateBucket(store,table,result[0],result[1]);

    } 
}

export const processA = (bucket:any, select:any, totalPrice:number): [any,number] => {

    const obj = bucket.concat({
            
        ...select,
        id:`${select.menu}/${select.count}/${JSON.stringify(select.more)}`
        
    });
    const p = totalPrice! + select.itemTotalPrice;

    return [obj, p];

}

export const processM = (bucket:any, select:any): [any,number] => {

    const obj = bucket.map( (doc:any) =>
        doc.menu === select.menu && compareAndMerge(doc.more, select.more) ? 
            {
                ...select,
                count:doc.count + select.count,
                itemTotalPrice: Number(doc.itemTotalPrice) + Number(select.itemTotalPrice),
                id:`${select.menu}/${doc.count + select.count}/${JSON.stringify(select.more)}`,   
            }
        :
            doc
    );
    var p:number = 0;
    obj.map((doc:any) => 
        p += doc.itemTotalPrice
    );
    
    return [obj, p];

};
