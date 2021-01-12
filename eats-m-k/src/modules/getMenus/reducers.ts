import { createReducer } from 'typesafe-actions';
import { MenuState, MenuAction } from './types';
import { GET_MENUS, GET_MENUS_SUCCESS, GET_MENUS_ERROR } from './actions';

const initialState: MenuState = {
  menus: {
    loading: false,
    error: null,
    data: null
  }
};

const myBase = createReducer<MenuState, MenuAction>(initialState, {
  [GET_MENUS]: state => ({
    ...state,
    menus: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_MENUS_SUCCESS]: (state, action) => ({
    ...state,
    menus: {
      loading: false,
      error: null,
      data: action.payload
      
    },

  }),
  [GET_MENUS_ERROR]: (state, action) => ({
    ...state,
    menus: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default myBase;