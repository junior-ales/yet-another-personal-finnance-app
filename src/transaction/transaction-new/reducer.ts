import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type ByIdState = AppState['transactions']['byId'];
export const transactionsById: Reducer<ByIdState, ActionsType> = (
  state = {},
  action
) => {
  if (action.type === ActionKeys.SAVE_TRANSACTION) {
    return { ...state, [action.payload.id]: action.payload };
  }

  return state;
};

type AllIdState = AppState['transactions']['allId'];
export const transactionsAllId: Reducer<AllIdState, ActionsType> = (
  state = [],
  action
) => {
  if (action.type === ActionKeys.SAVE_TRANSACTION) {
    return [...state, action.payload.id];
  }

  return state;
};
