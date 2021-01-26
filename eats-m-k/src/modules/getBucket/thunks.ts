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

<<<<<<< HEAD
                dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
                    console.log(snapShot.data())

                    dispatch(success(snapShot.data()));

                })
                
=======
                const buckets = await getBucket(store, table);

            
                dispatch(success(buckets));
>>>>>>> ea96b24afd118ac423ac19a48c10bd724c0be2a1

            } catch (e) {

                dispatch(failure(e));
                
            }
        };

};