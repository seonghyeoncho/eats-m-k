export const compareAndMerge = ( Obj1:[], Obj2:[] ) => {
    console.log(JSON.stringify(Obj2),JSON.stringify(Obj1))

    if( JSON.stringify(Obj2) === JSON.stringify(Obj1) ){

       return true;

    } else {
        return false;
    }

};