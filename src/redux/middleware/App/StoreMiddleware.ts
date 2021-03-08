import { Action } from '../../Types';
import { DataAction, GlobalLoadingAction, StoreAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';

interface param {
  dispatch: any;
  getState: () => RootState;
}

export const StoreMiddleware = ({ dispatch, getState }: param) => (
  next: any
) => (action: Action) => {
  
  next(action);

  if(StoreAction.Types.LOAD_STORE_FIREBASE === action.type) {
    dbService
      .collection('stores')
      .doc(`${action.payload.storeId}`)
      .get()
      .then((querySnapshot) => { 
        const data:any = querySnapshot.data();
        dispatch(StoreAction.setStoreInformation(data.information.name, data.id, data.information.bestPhotoUrl));
        dispatch(StoreAction.setStoreMenu(data.menu));
        dispatch(DataAction.loadDataFirebase(action.payload.storeId, action.payload.tableId));
        dispatch(GlobalLoadingAction.commendGlobalLoading());
      })
      .catch((e) => console.log(e));
  };
  if(StoreAction.Types.LOAD_STORE_FIREBASE_FOR_SELECT === action.type) {
    dbService
      .collection('stores')
      .doc(`${action.payload.storeId}`)
      .get()
      .then((querySnapshot) => { 
        const data:any = querySnapshot.data();
        dispatch(StoreAction.setStoreInformation(data.information.name, data.id));
        dispatch(StoreAction.setStoreMenu(data.menu));
        dispatch(DataAction.loadDataFirebaseForDetail(action.payload.storeId, action.payload.tableId, action.payload.name));
        dispatch(GlobalLoadingAction.commendGlobalLoading());
      })
      .catch((e) => console.log(e));
  }
};