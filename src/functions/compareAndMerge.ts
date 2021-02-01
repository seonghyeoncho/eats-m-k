export const addOrdersFunc = ( bucket:any,select:any) => {

    if( bucket.length !== 0 ) {
        const c = bucket.length;
        var flag = 0;
        for( let i=0 ; i<bucket.length ; i++ ) {
            if( bucket[i].menu === select.menu && compareAndMerge(bucket[i].more, select.more) ) {
                addOrdersProcesser('M', bucket, select);
                break;
            }
            flag++;
        }; 
        if( flag === c ) addOrdersProcesser('A', bucket, select);
    } else {
        addOrdersProcesser('A', bucket, select);
    };

};


const compareAndMerge = ( bucketMore:[], selectMore:any ) => {
    if( bucketMore.length !== 0 && selectMore.length !== 0 ) {
        if( JSON.stringify(bucketMore).length === JSON.stringify(selectMore).length) {
            let flag1 = 0;
            const count = bucketMore.length;
            for( let i=0 ; i<count ; i++ ) {
                if( JSON.stringify(bucketMore).includes(JSON.stringify(selectMore[i].menu)) ) flag1++;
            }
            if (flag1 === count ) {
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
    };
    return false;
};



const addOrdersProcesser = (c:string, bucket:any, select:any) => {
    if( c === 'A' ) return processA(bucket, select);
    else if ( c === 'M' ) return processM(bucket, select);
}

const processA = (bucket:any, select:any): any => {
    const obj = bucket.concat({
        ...select,
        id:`${select.menu}/${select.count}/${JSON.stringify(select.more)}`
    });
    return obj;
};

const processM = (bucket:any, select:any): any => {
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
    return obj;
};
