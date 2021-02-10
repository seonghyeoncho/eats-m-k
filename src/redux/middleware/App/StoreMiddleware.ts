import { Action } from '../../Types';
import { GlobalLoadingAction, StoreAction } from '../../actions';
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

  if (StoreAction.Types.LOAD_STORE_FIREBASE === action.type) {
    const store = window.localStorage.getItem('store')
    dbService
      .collection('stores')
      .doc(`${store}`)
      .get()
      .then((querySnapshot) => { 
        const data:any = querySnapshot.data();
        dispatch(StoreAction.setStoreInformation(data.information.name));
        window.localStorage.setItem('storeName', data.information.name);
        dispatch(StoreAction.setStoreMenu(data.menu));
        dispatch(GlobalLoadingAction.commendGlobalLoading());
      })
      .catch((e) => console.log(e));
  };
};