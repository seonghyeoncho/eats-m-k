import { createReducer } from 'typesafe-actions';
import { BucketState, BucketAction } from './types';
import { GET_BUCKETS, GET_BUCKETS_SUCCESS, GET_BUCKETS_ERROR } from './actions';

const initialState: BucketState = {
  buckets:{
    loading: false,
    error: null,
    data: null
  }
};

const myBucket = createReducer<BucketState, BucketAction>(initialState, {
  [GET_BUCKETS]: state => ({
    ...state,
    buckets: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_BUCKETS_SUCCESS]: (state, action) => ({
    ...state,
    buckets: {
      loading: false,
      error: null,
      data: action.payload
      
    },

  }),
  [GET_BUCKETS_ERROR]: (state, action) => ({
    ...state,
    buckets: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default myBucket;