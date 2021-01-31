import { Action } from '../../Types';
import { StoreAction } from '../../actions';
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
    console.log(getState().Location.store);
    dbService
      .collection('stores')
      .doc(`${getState().Location.store}`)
      .get()
      .then((querySnapshot) => { 
        console.log(querySnapshot.data());
        const data:any = querySnapshot.data();
        dispatch(StoreAction.setStoreInformation(data.information.name));
        dispatch(StoreAction.setStoreMenu(data.menu));
      })
      .catch((e) => console.log(e));
  };
};
// V10WuwulJcyZx08OhxKF
// `${getState().Location.store}`