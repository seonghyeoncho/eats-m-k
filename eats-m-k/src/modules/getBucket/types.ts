import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Buckets } from '../../api/bucketFromFire';

export type BucketAction = ActionType<typeof actions>;

export type BucketState = {
  buckets: {
    loading: boolean;
    error: Error | null;
    data: Buckets | null;
  };
};