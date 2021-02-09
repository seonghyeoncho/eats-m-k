export const addOrdersFunc = ( bucket:any,select:any) => {
    if( bucket.length !== 0 ) {
        const c = bucket.length;
        var flag = 0;
        for( let i=0 ; i<bucket.length ; i++ ) {
            console.log(bucket[i].options)
            if( bucket[i].name === select.name && compareAndMerge(bucket[i].options, select.options) ) {
                return addOrdersProcesser('M', bucket, select);
            }
            flag++;
        }; 
        if( flag === c ) return addOrdersProcesser('A', bucket, select);
    } else { 
        return addOrdersProcesser('A', bucket, select);
    };
};

const compareAndMerge = ( bucketMore:[], selectMore:any ) => {
    if( bucketMore.length !== 0 && selectMore.length !== 0 ) {
        if( JSON.stringify(bucketMore).length === JSON.stringify(selectMore).length) {
            let flag1 = 0;
            const count = bucketMore.length;
            for( let i=0 ; i<count ; i++ ) {
                if( JSON.stringify(bucketMore).includes(JSON.stringify(selectMore[i].name)) ) flag1++;
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
};
const processA = (bucket:any, select:any): any => {
    const obj = bucket.concat({
        ...select,
        id:`${select.name}/${select.count}/${JSON.stringify(select.options)}`
    });
    return obj;
};
const processM = (bucket:any, select:any): any => {
    const obj = bucket.map( (doc:any) =>
        doc.name === select.name && compareAndMerge(doc.options, select.options) ? 
            {
                ...select,
                count:doc.count + select.count,
                item_total_price: Number(doc.item_total_price) + Number(select.item_total_price),
                id:`${select.name}/${doc.count + select.count}/${JSON.stringify(select.options)}`,   
            }
        :
            doc
    );
    return obj;
};
