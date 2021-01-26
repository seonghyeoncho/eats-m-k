import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { BucketAction } from './types';
import { Buckets, getBucket } from '../../api/bucketFromFire';
import { getBucketAsync } from './actions';

export const getBucketThunk = (store: string | string[] | null, table: string | string[] | null): ThunkAction<Promise<void>, RootState, null, BucketAction> => {

        return async dispatch => {

            const { request, success, failure } = getBucketAsync;
            dispatch(request());

            try {

                const buckets = await getBucket(store, table);

            
                dispatch(success(buckets));

            } catch (e) {

                dispatch(failure(e));
                
            }
        };

};