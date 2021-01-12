import {Buckets} from '../../api/bucketFromFire';
import {createAsyncAction} from 'typesafe-actions'
import { AxiosError } from 'axios';

export const GET_BUCKETS = 'firebase/GET_MENUS';
export const GET_BUCKETS_SUCCESS ='firebase/GET_MENUS_SUCCESS';
export const GET_BUCKETS_ERROR = 'firebase/GET_MENUS_ERROR';

export const getBucketAsync = createAsyncAction(
    GET_BUCKETS,
    GET_BUCKETS_SUCCESS,
    GET_BUCKETS_ERROR
)<undefined, Buckets,AxiosError>();