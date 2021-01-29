import {Buckets} from '../../api/bucketFromFire';
import {createAsyncAction} from 'typesafe-actions'
import { AxiosError } from 'axios';

export const GET_BUCKETS = 'myBase/GET_BUCKETS';
export const GET_BUCKETS_SUCCESS ='myBase/GET_BUCKETS_SUCCESS';
export const GET_BUCKETS_ERROR = 'myBase/GET_BUCKETS_ERROR';

export const getBucketAsync = createAsyncAction(
    GET_BUCKETS,
    GET_BUCKETS_SUCCESS,
    GET_BUCKETS_ERROR
)<undefined, Buckets,AxiosError>();