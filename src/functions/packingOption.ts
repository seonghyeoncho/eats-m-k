export const packingOption = (options:any) => {
    console.log(options);
    let  packedOption = [];
    for( let i=0 ; i<options.length ; i++) {
        for(let k= 0 ; k<options[i].options ; k++) {
            if(options[i].options[k].state) {
                packedOption.push(options[i].options[k]);
            }
        }
    }
    return packedOption;
}