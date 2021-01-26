import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { BucketAction } from './types';
import { getBucketAsync } from './actions';
import { dbService } from '../../firebase';

export const getBucketThunk = (store: string | string[] | null, table: string | string[] | null): ThunkAction<Promise<void>, RootState, null, BucketAction> => {

        return async dispatch => {

            const { request, success, failure } = getBucketAsync;
            dispatch(request());

            try {

                dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
                    console.log(snapShot.data())

                    dispatch(success(snapShot.data()));

                })
                

            } catch (e) {

                dispatch(failure(e));
                
            }
        };

};