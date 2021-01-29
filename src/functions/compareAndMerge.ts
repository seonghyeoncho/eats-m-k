export const compareAndMerge = ( bucketMore:[], selectMore:any ) => {
    console.log(bucketMore,selectMore)

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

    return false
    

};
