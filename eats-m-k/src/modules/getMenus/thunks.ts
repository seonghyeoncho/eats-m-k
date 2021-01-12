import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { MenuAction } from './types';
import { getMenuList } from '../../api/menuFromFire';
import { getMenuAsync } from './actions';

export const getMenuThunk = (store: string | string[] | null): ThunkAction<Promise<void>, RootState, null, MenuAction> => {
        console.log('2');
        return async dispatch => {

            const { request, success, failure } = getMenuAsync;
            dispatch(request());

            try {

                const menus = await getMenuList(store);
                console.log(getMenuList(store));
                dispatch(success(menus));

            } catch (e) {

                dispatch(failure(e));
                
            }
        };

};