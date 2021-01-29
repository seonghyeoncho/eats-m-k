import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Menus } from '../../api/menuFromFire';

export type MenuAction = ActionType<typeof actions>;

export type MenuState = {
    menus: {
    loading: boolean;
    error: Error | null;
    data: Menus | null;
  };
};