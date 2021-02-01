interface Props {
}

const modifBucketFunc = (select:any) => {
    var moreprice = select.price;
    select.options.forEach((doc:any) => {
        moreprice += doc.price;
    });

    const modifBucket = ( totalPrice:number ) => {
        const Obj = {
            menu: menu,
            price: price,
            count: c,
            more: more,
            id:`${menu}/${c}/${JSON.stringify(more)}`,
            itemTotalPrice: itemTotalPrice 
        }
        const modifBuc = bucket.map((item:any) => item.id === id 
            ? 
                Obj
            :
                item
        );
    };
    const modifMenuCount = (type:string) => {
        if(type === 'in'){
            c += 1
            itemTotalPrice += moreprice
            totalPrice += moreprice
        } else {
            c -= 1
            itemTotalPrice -= moreprice;
            totalPrice -= moreprice
        }
        modifBucket(totalPrice);
    };
};

export default modifBucketFunc;