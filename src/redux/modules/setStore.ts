const SET_STORE = 'setStore/SET_STORE' as const;

export const setStore = ( store: string | string[] | null ) => ({
    type:SET_STORE,
    payload: store
    
});

type StoreAction = 
    | ReturnType<typeof setStore>;

type StoreState = {
    store:string | string[] | null
};

const initialState: StoreState = {
    store:''
};

const storeSet = (
    state: StoreState = initialState,
    action: StoreAction
): StoreState => {
    switch(action.type){
        case SET_STORE:
            return{
                store:action.payload
            };
        default:
            return state;
    }
};
/*
console.log("hello")
    
    const test = props.test;
    
    const cancleOrder = (m:string, n:number) => {

        props.menu.map((doc:any)=>{
          console.log(doc.menu,m);
          if(doc.menu === m){
            const sumPrice = props.currentPrice-(n)*(doc.price);
            props.setTotalPrice(sumPrice);
            doc.n = 0;
            
          }
        });
    
        props.setTest(props.test.filter((test:any) => test.menu !== m));
        
    }
    
    const numberWithCommas = ( x:number ) => {
    
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    }

    const onSubmit = (event : any) => {

        event.preventDefault();
        
        dbService.collection(`${props.store}`).doc(`${props.myTable}`)
          .set({
            test,
            orderAt: Date.now(),
            check:false
    
          })
          .then(function() {
            console.log("Document successfully written!");
            props.setTest([]);
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
    
          props.setTotalPrice(0);
    
    }
*/

export default storeSet;