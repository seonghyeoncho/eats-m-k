export const makeId = (options:any): string => {
    let itemId = [];
    for(let i=0 ; i<options.length ; i++) {
        for(let k=0 ; k<options[i].options.length ; k++) {
            if(options[i].options[k].state) {
                itemId.push((options[i].options[k].name));
            };
        };
    };
    let id:string = JSON.stringify(itemId);
    console.log(id);
    return id;
};
export const optionsArr = (options:any) => {
    let itemId = [];
    for(let i=0 ; i<options.length ; i++) {
        for(let k=0 ; k<options[i].options.length ; k++) {
            if(options[i].options[k].state) {
                itemId.push((options[i].options[k].name));
            };
        };
    };
    return itemId;
};