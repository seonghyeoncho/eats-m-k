import {dbService} from '../firebase';

export const getMenuList  = async (store:string | string[] | null) : Promise<any> => {
     return (await dbService.collection('store').doc(`${store}`).get()).data();
      
}

export interface Menus {

    AC:[],
    menu:[],
    setmenu:[],
    sidemenu:[],
    notice:string
        
    
}
