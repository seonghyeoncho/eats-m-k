import { Menus } from '../../api/menuFromFire';
import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export const GET_MENUS = 'firebase/GET_MENUS';
export const GET_MENUS_SUCCESS ='firebase/GET_MENUS_SUCCESS';
export const GET_MENUS_ERROR = 'firebase/GET_MENUS_ERROR';

export const getMenuAsync = createAsyncAction(
    GET_MENUS,
    GET_MENUS_SUCCESS,
    GET_MENUS_ERROR
)<undefined, Menus,AxiosError>();