import { makeId, optionsArr } from "./makeId";

export const addOrdersFunc = ( bucket:any,select:any) => {
    if( bucket.length !== 0 ) {
        for( let i=0 ; i<bucket.length ; i++ ) {
            if( bucket[i].name === select.name && compareAndMerge(bucket[i].options, select.options)) return addOrdersProcesser('M', bucket, select, select.id);
        }; 
        return addOrdersProcesser('A', bucket, select, '');
    } else { 
        return addOrdersProcesser('A', bucket, select, '');
    };
};

const compareAndMerge = ( bucketMore:[], selectMore:any ) => {
    const bucketOptions = optionsArr(bucketMore);
    const selectOptions = optionsArr(selectMore);
    console.log(bucketOptions)
    console.log(selectOptions)
    if( bucketOptions.length + selectOptions.length === 0) {
        console.log('true : reason 2');
        return true;
    } else{
        let count = 0;
        const flag = selectOptions.length;
        for(let i=0 ; i<flag ; i++) {
            if( JSON.stringify(bucketOptions).includes(JSON.stringify(selectOptions[i])) ) count++;
        }
        if (flag === count ) {
            console.log('ture : reason 1');
            return true;
        } else {
            console.log('false : reason 1');
            return false;
        }
    }
};
const addOrdersProcesser = (c:string, bucket:any, select:any, id:string) => {
    if( c === 'A' ) return processA(bucket, select);
    else if ( c === 'M' ) return processM(bucket, select, id);
};
const processA = (bucket:any, select:any): any => {
    const obj = bucket.concat(select);
    return obj;
};
const processM = (bucket:any, select:any, id:string): any => {
    const obj = bucket.map( (doc:any) =>
        doc.id === id? 
            {
                ...select,
                count:doc.count + select.count,
                item_total_price: Number(doc.item_total_price) + Number(select.item_total_price),
                id:`${select.name}/${doc.count + select.count}/${makeId(select.options)}`,   
            }
        :
            doc
    );
    return obj;
};
